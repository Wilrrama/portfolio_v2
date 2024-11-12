import { StyledHome, StyledHomeBoxImg, StyledHomeDetails } from "./style";
import "boxicons/css/boxicons.min.css";

function Home() {
  return (
    <StyledHome id="home">
      <StyledHomeDetails>
        <div className="perfil__container">
          <h1>Wilson Alves</h1>
          <h2>Desenvolvedor Full Stack</h2>
          <p>
            Desenvolvedor Full Stack em ascensão, com sólida formação em
            hardware e paixão por criar soluções inovadoras que impactam
            positivamente a vida das pessoas.
          </p>
        </div>

        <div className="btn__container">
          <a href="" className="cvn">
            Currículo
          </a>
          <div className="icons">
            <a
              href="https://github.com/Wilrrama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-alves-franchi-dos-santos-b3ba3332/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5519982876099"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            {/* <a href="#">
              <i className="bx bx-envelope"></i>
            </a> */}
          </div>
        </div>
      </StyledHomeDetails>

      <StyledHomeBoxImg>
        <img
          src="/perfil/home.png"
          alt="Wilson Alves"
          className="image__perfil"
        />
      </StyledHomeBoxImg>
    </StyledHome>
  );
}

export default Home;
