import { StyledDiplomas } from "./style";

export function Diplomas() {
  return (
    <StyledDiplomas>
      <h1>Formação Técnica</h1>
      <ul className="diplomas__list">
        <li>
          <img src="/doc/full_stack.jpg" alt="" />
          <h2>Desenvolvedor Full-Stack</h2>
          <p>Kenzie</p>
        </li>
        <li>
          <img src="/doc/tec_info.jpeg" alt="" />
          <h2>Técnico Informática</h2>
          <p>Dom Pedro</p>
        </li>
        <li>
          <img src="" alt="" />
          <h2>Técnico Hardware</h2>
          <p>Senai</p>
        </li>
      </ul>
    </StyledDiplomas>
  );
}

export default Diplomas;
