import styles from "./header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <div className={styles.logo}>
          <Link href="/">Vedant Globals</Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.actions}>
          <a href="/login">Login</a>
          <a href="/signup" className="">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
