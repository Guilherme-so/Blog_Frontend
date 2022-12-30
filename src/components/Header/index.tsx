import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <h2>Blog</h2>
        </Link>
      </div>

      <nav className={styles.navlinks}>
        <Link className={styles.register} href="/register">
          Register
        </Link>

        <Link className={styles.login} href="/login">
          Login
        </Link>

        <Link className={styles.logout} href="/logout">
          Logout
        </Link>
      </nav>
    </header>
  );
};

export default Header;
