import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        Chintan<span className={styles.logoDot}>.</span>
      </Link>

      <a href="mailto:chintan.react@gmail.com" className={styles.sayHiBtn}>
        SAY HI ↗
      </a>
    </header>
  );
};
export default Header;
