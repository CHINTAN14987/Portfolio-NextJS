import Link from "next/link";
import { AiTwotoneMail } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.portfolio}>
        <Link href="/" legacyBehavior>
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </div>

      <div className={styles.icon}>
        <a href="mailto: chintan.react@gmail.com">
          <AiTwotoneMail size="2.5rem" />
        </a>
      </div>
    </div>
  );
};
export default Header;
