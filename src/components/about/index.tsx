import { useState } from "react";
import Bibliography from "./components/bibliography";
import Diplomas from "./components/diplomas";
import Experience from "./components/experience";
import Skills from "./components/skills";
import { StyledAbout } from "./style";

export function About() {
  const [activeSection, setActiveSection] = useState("skills");

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <StyledAbout id="sobre">
      <h1 className="about__title">Sobre Mim</h1>

      <nav className="about__nav">
        <a
          href="#skills"
          onClick={() => handleButtonClick("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          <h3>Skills</h3>
        </a>
        <a
          href="#diplomas"
          onClick={() => handleButtonClick("diplomas")}
          className={activeSection === "diplomas" ? "active" : ""}
        >
          <h3>Formação</h3>
        </a>
        <a
          href="#experience"
          onClick={() => handleButtonClick("experience")}
          className={activeSection === "experience" ? "active" : ""}
        >
          <h3>Experiências</h3>
        </a>
        <a
          href="#bibliography"
          onClick={() => handleButtonClick("bibliography")}
          className={activeSection === "bibliography" ? "active" : ""}
        >
          <h3>Bibliografia</h3>
        </a>
      </nav>

      {activeSection === "skills" ? (
        <Skills />
      ) : activeSection === "diplomas" ? (
        <Diplomas />
      ) : activeSection === "experience" ? (
        <Experience />
      ) : (
        <Bibliography />
      )}
    </StyledAbout>
  );
}

export default About;
