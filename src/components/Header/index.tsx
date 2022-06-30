import logoImg from "../../assets/rocket.svg";

import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.imageLogo} src={logoImg} alt="Rocket Logo" />
      <strong className={styles.title}>
        To<span className={styles.titleColor}>do</span>
      </strong>
    </header>
  );
}
