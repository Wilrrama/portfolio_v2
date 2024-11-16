import { useState } from "react";
import { projects } from "../../data/projects";
import { StyledProjects, StyledProjectsList } from "./style";
import "boxicons/css/boxicons.min.css";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = (type: string) => {
    if (type === "Todos") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.tipo === type));
    }
  };
  return (
    <StyledProjects id="projetos">
      <h1>Projetos</h1>

      <nav className="nav__projects">
        {/* <a onClick={() => filterProjects("FullStack")}>Principais-Projetos</a> */}
        <a onClick={() => filterProjects("Todos")}>Todos</a>
        <a onClick={() => filterProjects("Front-End")}>Front-End</a>
        <a onClick={() => filterProjects("Back-End")}>Back-End</a>
        <a onClick={() => filterProjects("FullStack")}>Full-Stack</a>
      </nav>

      <StyledProjectsList>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <h2>{project.nome}</h2>
            {/* <p>{project.tipo}</p> */}
            <img src={project.img} alt={project.nome} />
            <p>{project.descrição}</p>
            <div>
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>

              <a
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-rocket"></i>
              </a>
            </div>
            <div className="tech__container">
              {project.tech.map((tech, index) => (
                <img
                  key={index}
                  src={tech}
                  alt={`imagem da tecnologia utilizada neste projeto - ${index}`}
                />
              ))}
            </div>
          </li>
        ))}
      </StyledProjectsList>
    </StyledProjects>
  );
}

export default Projects;
