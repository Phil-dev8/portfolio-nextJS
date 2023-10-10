import React from "react";

import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import data from "../data/projects.json";

export default function page() {
  return (
    <div>
      <h1>Projets</h1>
      <ProjectCard />
    </div>
  );
}
