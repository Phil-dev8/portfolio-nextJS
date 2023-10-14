"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.scss";
import DropDownMenu from "../../components/SVG/DropDownMenu/DropDownMenu";
import { useState } from "react";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const openMenu = () => setisOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div onClick={openMenu} className={styles["drop-down-menu"]}>
        <DropDownMenu />
        <div
          className={`${styles["mobile-menu"]} ${isOpen ? styles.open : ""}`}
        >
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
        </div>
      </div>
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
