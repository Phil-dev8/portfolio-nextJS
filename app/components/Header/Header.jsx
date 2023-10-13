import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
        <Link className={styles.link} href="/skills">
          Skills
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
