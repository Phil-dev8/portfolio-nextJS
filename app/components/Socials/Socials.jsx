"use client";

import React from "react";
import styles from "../../styles/Socials.module.scss";
import Link from "next/link";
import CVSVG from "../SVG/CVSVG/CVSVG";
import GithubSVG from "../SVG/GithubSVG/GithubSVG.jsx";
import LinkedinSVG from "../SVG/LinkedinSVG/LinkedinSVG";

function Socials() {
  return (
    <div className={styles.social}>
      <a href="/assets/CV-3W.pdf" target="blank">
        <CVSVG />
      </a>
      <Link href="https://github.com/Phil-dev8" target="blank">
        <GithubSVG />
      </Link>
      <Link href="https://www.linkedin.com/in/phil-dev8/" target="blank">
        <LinkedinSVG />
      </Link>
    </div>
  );
}

export default Socials;
