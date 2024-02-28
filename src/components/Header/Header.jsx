import styles from "./Header.module.css";
import igniteLogo from "../../assets/ignite-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogo}
        alt="Logo com o símbolo triangular da cor verde do IGNITE"
      />
      <strong>Ignite Feed</strong>
    </header>
  );
}
