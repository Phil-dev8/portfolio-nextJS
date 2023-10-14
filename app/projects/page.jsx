import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <div>
      <h1 className={styles.title}>Projets réalisés</h1>
      <div className={styles.container}>
        <ProjectCard />
      </div>
    </div>
  );
}
