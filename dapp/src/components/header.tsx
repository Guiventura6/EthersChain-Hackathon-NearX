"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { ChangeEvent, useState, useEffect } from "react";

export default function Header() {
  const [wallet, setWallet] = useState<string>("");
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) setWallet(wallet);
  }, []);

  function btnLoginClick() {
    setWallet("0x511...13D2");
    localStorage.setItem("wallet", "0x511");
  }

  function btnLogoutClick() {
    setWallet("");
    localStorage.removeItem("wallet");
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"}>Album</Link>
        <Link href={"/loja"}>Loja</Link>
        <Link href={"/trocar"}>Trocar repetidas</Link>
        <p>Carteira: {wallet}</p>
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
