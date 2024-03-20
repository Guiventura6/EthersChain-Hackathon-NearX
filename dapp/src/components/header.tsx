"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { ChangeEvent, useState, useEffect } from "react";
import { login } from "@/services/web3Services";

export default function Header() {
  const [wallet, setWallet] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) setWallet(wallet);
  }, []);

  function btnLoginClick() {
    setMessage("Logging In...");
    login()
      .then((wallet) => {
        setWallet(wallet);
        localStorage.setItem("wallet", wallet);
        setMessage("");
      })
      .catch((err) => setMessage(err.message));
  }

  function btnLogoutClick() {
    setMessage("Logging Out...");
    setWallet("");
    localStorage.removeItem("wallet");
    setMessage("");
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/album"}>Album</Link>
        <Link href={"/loja"}>Loja</Link>
        <Link href={"/trocar"}>Trocar Figurinhas</Link>
        <p>
          Carteira:{" "}
          {`${wallet.substring(0, 4)}...${wallet.substring(wallet.length - 4)}`}
        </p>
        {!wallet ? (
          <button
            id="btnLogin"
            onClick={btnLoginClick}
            className={styles.login}
          >
            LogIn
          </button>
        ) : (
          <button
            className={styles.login}
            id="btnLogout"
            onClick={btnLogoutClick}
          >
            LogOut
          </button>
        )}
      </nav>
    </header>
  );
}
