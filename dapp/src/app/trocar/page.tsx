"use client";

import { mint, trocar } from "@/services/web3Services";
import styles from "./troca.module.css";
import { ChangeEvent, useState } from "react";

export default function troca() {
  const [idFigurinha, setIdFigurinha] = useState<number>(0);
  const [endereco, setEndereco] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function onQuantityChange(evt: ChangeEvent<HTMLInputElement>) {
    const idFigurinha = parseInt(evt.target.value);
    if (idFigurinha > 11) setIdFigurinha(11);
    if (idFigurinha < 0) setIdFigurinha(0);
    else setIdFigurinha(idFigurinha);
  }

  function btnTrocartClick() {
    trocar(idFigurinha, endereco)
      .then((tx) => {
        setMessage("Tx Id: " + (tx || "error"));
        setEndereco("");
      })
      .catch((err) => setMessage(err.message));
  }

  return (
    <>
      <div>
        <h1 className="title">Trocar Figurinha</h1>
      </div>

      <section className="animeLeft">
        <p>
          <label>
            <input
              id="idFigurinha"
              type="number"
              name="Figurinha"
              placeholder="Id Figurinha"
              onChange={onQuantityChange}
            />
            <input
              id="endereco"
              type="string"
              name="endereco"
              placeholder="from"
              onChange={onQuantityChange}
            />
          </label>
        </p>
        <p>
          <button
            id="btnMint"
            className={styles.button}
            onClick={btnTrocartClick}
          >
            Comprar
          </button>
        </p>
        <p>{message}</p>
      </section>
    </>
  );
}
