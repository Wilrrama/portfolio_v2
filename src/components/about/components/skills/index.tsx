import { tecnologies } from "../../../../data/tecnologies";
import { StyledSkills } from "./style";

export function Skills() {
  return (
    <StyledSkills>
      <ul className="skill__list">
        {tecnologies.map((tecnologie) => (
          <li key={tecnologie.id}>
            <img src={tecnologie.img} alt={tecnologie.nome} />
            <h2>{tecnologie.nome}</h2>
            <p>{tecnologie.experiencia}</p>
          </li>
        ))}
      </ul>
    </StyledSkills>
  );
}

export default Skills;
