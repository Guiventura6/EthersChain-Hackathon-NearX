import Image from "next/image";
import styles from "./footer.module.css";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/metamask.svg"}
        alt="MetaMask"
        width={28}
        height={22}
      />
      <p>CompletaCompa 3.0 - Alguns direitos reservados.</p>
    </footer>
  );
}
