import React from "react";
import "../App.css";
import "../components/Projects/Projects";
import Projects from "../components/Projects/Projects";
import Title from "../components/Title/Title";

function Portfolio() {
  return (
    <div>
      <Title title={"Portfolio"} />
      <Projects />
    </div>
  );
}

export default Portfolio;
