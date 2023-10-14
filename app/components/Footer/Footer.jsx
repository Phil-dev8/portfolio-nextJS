"use client";
import React from "react";
import styles from "../../styles/Footer.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Footer() {
  const pathname = usePathname();
  const skillPage = pathname === "/skills";

  return (
    <footer
      className={`${styles.footer} ${skillPage ? styles["skill-page"] : null} `}
    >
      © 2023 by Phil_dev_8 with Next.js repository on{" "}
      <Link
        className={styles.link}
        href="https://github.com/Phil-dev8/portfolio-nextJS"
        target="blank"
      >
        GitHub
      </Link>
    </footer>
  );
}

export default Footer;
