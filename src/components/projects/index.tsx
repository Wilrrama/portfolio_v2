import { useState } from "react";
import { projects } from "../../data/projects";
import {
  StyledNavigationButtons,
  StyledProjects,
  StyledProjectsList,
} from "./style";
import "boxicons/css/boxicons.min.css";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentProject, setCurrentProject] = useState(0);

  const filterProjects = (type: string) => {
    // if (type === "Principais") {
    //   setFilteredProjects(projects);
    // } else {
    setFilteredProjects(projects.filter((project) => project.tipo === type));
    // }
    setCurrentProject(0);
  };

  const nextProject = () => {
    if (currentProject < filteredProjects.length - 1) {
      setCurrentProject(currentProject + 1);
    }
  };

  const prevProject = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    }
  };

  return (
    <StyledProjects id="projetos">
      <h1>Projetos</h1>

      <nav className="nav__projects">
        <a onClick={() => filterProjects("Principais")}>Principais</a>
        <a onClick={() => filterProjects("Front-End")}>Front-End</a>
        <a onClick={() => filterProjects("Back-End")}>Back-End</a>
        <a onClick={() => filterProjects("FullStack")}>Full-Stack</a>
      </nav>

      <StyledProjectsList>
        {filteredProjects.length > 0 && (
          <li key={filteredProjects[currentProject].id}>
            <h2>{filteredProjects[currentProject].nome}</h2>
            {/* <p>{filteredProjects[currentProject].tipo}</p> */}
            <div className="projects__details__container">
              <img
                src={filteredProjects[currentProject].img}
                alt={filteredProjects[currentProject].nome}
              />
              <div className="projects__details">
                <p>{filteredProjects[currentProject].descrição}</p>
                <div className="projects__details__links__tech">
                  <div className="projects__details__links">
                    <a
                      href={filteredProjects[currentProject].git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                    {filteredProjects[currentProject].deploy && (
                      <a
                        href={filteredProjects[currentProject].deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bx bx-rocket"></i>
                      </a>
                    )}
                  </div>

                  <div className="tech__container">
                    {filteredProjects[currentProject].tech.map(
                      (tech, index) => (
                        <img
                          key={index}
                          src={tech}
                          alt={`imagem da tecnologia utilizada neste projeto - ${index}`}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
      </StyledProjectsList>

      <StyledNavigationButtons>
        <button onClick={prevProject} disabled={currentProject === 0}>
          <i className="bx bxs-left-arrow-circle"></i>
        </button>
        <button
          onClick={nextProject}
          disabled={currentProject === filteredProjects.length - 1}
        >
          <i className="bx bxs-right-arrow-circle"></i>
        </button>
      </StyledNavigationButtons>
    </StyledProjects>
  );
}

export default Projects;
