import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <section id="bio" className="bio page-content wrapper">
        <h1 className="md-heading text-center">About Me</h1>
        <p className="bio-body">
          My name is Ching-Yu Lee, and I graduated from{" "}
          <strong>Taipei Medical University</strong> with a degree in{" "}
          <strong>Medical Laboratory Science and Biotechnology</strong>. I am a
          licensed <strong>medical technologist</strong> and hold a master’s
          degree in <strong>Toxicology</strong> from{" "}
          <strong>National Taiwan University</strong>. My research focused on
          using <strong>iPSCs</strong> to study the combined effects of{" "}
          <strong>heavy metals</strong> and <strong>PAHs</strong> on{" "}
          <strong>East Asian lung adenocarcinoma</strong>. I specialize in{" "}
          <strong>bioinformatics</strong>, including <strong>RNA-seq</strong>,{" "}
          <strong>scRNA-seq</strong>, and{" "}
          <strong>methylation array analyses</strong>, and I am skilled in tools
          like <strong>R</strong>, <strong>Linux</strong>, and{" "}
          <strong>NGS pipelines</strong>. With a strong background in{" "}
          <strong>lab operations</strong>, <strong>data analysis</strong>, and{" "}
          <strong>programming</strong>, I aim to integrate{" "}
          <strong>bioinformatics</strong> and <strong>AI</strong> to advance{" "}
          <strong>precision medicine</strong> and contribute to the
          biotechnology industry.
        </p>
      </section>
    </>
  );
}

export default AboutMe;
