"use client";

import { mint } from "@/services/web3Services";
import styles from "./loja.module.css";
import { ChangeEvent, useState } from "react";

export default function Loja() {
  const [idFigurinha, setIdFigurinha] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  function onQuantityChange(evt: ChangeEvent<HTMLInputElement>) {
    const idFigurinha = parseInt(evt.target.value);
    if (idFigurinha > 11) setIdFigurinha(11);
    if (idFigurinha < 0) setIdFigurinha(0);
    else setIdFigurinha(idFigurinha);
  }

  function btnMintClick() {
    mint(idFigurinha)
      .then((tx) => {
        setMessage("Tx Id: " + (tx || "error"));
        setIdFigurinha(0);
      })
      .catch((err) => setMessage(err.message));
  }

  return (
    <>
      <div>
        <h1 className="title">Comprar Figurinha</h1>
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
              id="Contract"
              type="number"
              name="Contract"
              placeholder="Contract"
              onChange={onQuantityChange}
            />
          </label>
        </p>
        
        <p>
          <button id="btnMint" className={styles.button} onClick={btnMintClick}>
            Comprar
          </button>
        </p>
        <p>{message}</p>
      </section>
    </>
  );
}
