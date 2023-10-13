"use client";
import React from "react";
import styles from "../styles/Skills.module.scss";
import data from "../assets/data/skills.json";
import SkillCard from "../components/SkillCard/SkillCard";

export default function skills() {
  //   console.log(data);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Skills</h1>
        {data.map((category, categoryIndex) => {
          return (
            <div key={categoryIndex}>
              <h2>{category.title}</h2>
              <div className={styles["category-container"]}>
                <SkillCard items={category.items} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
