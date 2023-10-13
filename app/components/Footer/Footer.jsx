"use client";
import React from "react";
import styles from "../../styles/Footer.module.scss";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const skillPage = pathname === "/skills";

  return (
    <footer
      className={`${styles.footer} ${skillPage ? styles["skill-page"] : null} `}
    >
      © 2023 by Phil_dev_8 with Next.js repository on <span>GitHub</span>
    </footer>
  );
}

export default Footer;
