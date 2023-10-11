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
          {/* <Image
            src={project.img}
            width={150}
            height={100}
            alt={project.name}
          /> */}
          <div className={styles.infos}>
            <h3 className={styles.name}>{project.name}</h3>
            {project["front-repo"] ? (
              <Link
                className={styles.link}
                href={project["front-repo"]}
                target="blank"
              >
                Lien du repo Front
              </Link>
            ) : null}

            {project["back-repo"] ? (
              <Link
                className={styles.link}
                href={project["back-repo"]}
                target="blank"
              >
                Lien du repo Back
              </Link>
            ) : null}
            {project.production ? (
              <Link
                className={styles.link}
                href={project.production}
                target="blank"
              >
                Application en production
              </Link>
            ) : (
              <p className={styles.progress}>Travail en cours</p>
            )}
            <ul>
              {project.technos.map((techno, index) => (
                <li key={index}>{techno}</li>
              ))}
            </ul>
            <ul>
              {project.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
