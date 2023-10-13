import React from "react";
import styles from "../../styles/SkillCard.module.scss";
import Image from "next/image";

export default function SkillCard({ items }) {
  console.log(items);
  return (
    <>
      {items.map((item, itemIndex) => {
        return (
          <div key={itemIndex} className={styles.container}>
            <Image src={item.svg} width={50} height={50} alt={item.techno} />
            <p className={styles.p}>{item.techno}</p>
          </div>
        );
      })}
    </>
  );
}
