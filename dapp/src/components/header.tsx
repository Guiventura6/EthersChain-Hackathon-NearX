import Link from "next/link";
import styles from "./header.module.css";

export default async function Header() {
  const user = false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href={"/"}>Album</Link>
        <Link href={"/loja"}>Loja</Link>
        <Link href={"/trocar"}>Trocar repetidas</Link>
        {user ? (
          <>
            <Link className={styles.login} href={"/login"}>
              0x123099483910129
            </Link>
          </>
        ) : (
          <>
            <Link className={styles.login} href={"/login"}>
              Conectar Metamask
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
