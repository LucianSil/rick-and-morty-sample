import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.item}>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
