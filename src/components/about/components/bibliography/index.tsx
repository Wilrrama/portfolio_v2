import { StyledBibliography } from "./style";

export function Bibliography() {
  return (
    <StyledBibliography>
      <h1>Bibliografia</h1>
      <div className="container__bibliography">
        <div className="img__bibliography">
          <img src="/perfil/home.png" alt="imagem do wilson" />
        </div>
        <div className="details__bibliography">
          <p>
            Wilson Alves Franchi dos Santos é Técnico em Informática, Analista
            de Sistemas e Desenvolvedor Full Stack.
          </p>
          <p>
            Com um perfil empreendedor e habilidades em tecnologias de front-end
            e back-end, Wilson se destaca pela combinação de experiência prática
            e aprendizado contínuo.
          </p>
          <p>
            Possui um histórico diversificado, com atuação em áreas como a
            gestão de uma loja própria de informática ,games e música, a
            organização de eventos esportivos e a participação em campanhas
            políticas. Essas vivências fortaleceram suas habilidades em
            comunicação, planejamento e liderança — competências que ele agora
            traz para o campo do desenvolvimento de software.
          </p>
        </div>
      </div>
    </StyledBibliography>
  );
}

export default Bibliography;
