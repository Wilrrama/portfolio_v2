import { StyledBibliography } from "./style";

export function Bibliography() {
  return (
    <StyledBibliography>
      <h1>Bibliografia</h1>
      <div className="container__bibliography">
        <div className="img__bibliography">
          <img src="/perfil/bibliography.jpg" alt="imagem do wilson" />
        </div>
        <div className="details__bibliography">
          <p>
            Sou Wilson Alves Franchi dos Santos, Técnico em Informática,
            Analista de Sistemas e Desenvolvedor Full Stack.
          </p>
          <p>
            Atualmente trabalho como entregador de mercadorias (delivery), onde
            desenvolvo diariamente habilidades como organização, agilidade,
            responsabilidade e foco no atendimento — qualidades que também levo
            para o desenvolvimento de software.
          </p>
          <p>
            Tenho uma trajetória marcada por experiências diversas que
            contribuíram para minha formação pessoal e profissional. Já
            gerenciei uma loja própria de informática, games e música, organizei
            campeonatos de futebol amador e atuei em campanhas políticas, sempre
            com foco em planejamento, comunicação e liderança.
          </p>
          <p>
            Com um perfil autodidata e criativo, sou apaixonado por tecnologia e
            estou sempre em busca de aprender mais e entregar soluções que
            realmente façam a diferença.
          </p>
        </div>
      </div>
    </StyledBibliography>
  );
}

export default Bibliography;
