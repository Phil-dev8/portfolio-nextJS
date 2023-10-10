"use client";
import React from "react";
import data from "../../data/projects.json";
import Image from "next/image";
import styles from "../../styles/ProjectCard.module.scss";
import Link from "next/link";

function ProjectCard() {
  return (
    <>
      {data.map((project) => (
        <div className={styles.card} key={project.id}>
          <Image
            src={project.img}
            width={150}
            height={100}
            alt={project.name}
          />
          <p>{project.name}</p>
          <Link href={project["front-repo"]} target="blank">
            Lien du repo Front
          </Link>
          {project["back-repo"] ? (
            <Link href={project["back-repo"]}>Lien du repo Back</Link>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
