"use client";
import React from "react";
import styles from "../styles/Skills.module.scss";
import data from "../assets/data/skills.json";
import SkillCard from "../components/SkillCard/SkillCard";

export default function skills() {
  return (
    <>
      <div className={styles.certifs}>
        <h3 className={styles.h3}>Certifications Udemy ( PDF )</h3>
        <a href="/assets/certifications/JS.pdf" target="blank">
          Javascript
        </a>
        <a href="/assets/certifications/GIT.pdf" target="blank">
          GIT
        </a>
        <a href="/assets/certifications/NEXT.pdf" target="blank">
          Next.js
        </a>
      </div>
      <h1 className={styles["main-title"]}>Skills</h1>
      <div className={styles.container}>
        {data.map((category, categoryIndex) => {
          const left = categoryIndex === 0 || categoryIndex === 2;
          return (
            <div
              className={`${styles["category-container"]} ${
                left ? styles.left : styles.right
              }`}
              key={categoryIndex}
            >
              <h2 className={styles["second-title"]}>{category.title}</h2>
              <div className={styles["skill-container"]}>
                <SkillCard items={category.items} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
