import { StyledExperience } from "./style";

export function Experience() {
  return (
    <StyledExperience>
      <h1>Experiencias Profissionais</h1>
      <ul className="experience__list">
        {/* Metal Games */}
        <li className="experience__list__container">
          <div className="experience__container__title">
            <img
              src="experience/metal_games.jpg"
              alt="Logo da Loja Metal Games"
            />
            <h2>Loja Metal Games</h2>
          </div>
          <div className="experience__container__details">
            <p>
              <strong>Função:</strong> Microempresário
            </p>
            <p>
              <strong>Período:</strong> 1995 - 2022
            </p>
            <p>
              <strong>Descrição:</strong> A Metal Games começou como sala de
              jogos de vídeo-games, evoluiu para uma lan house, adicionou
              serviços de manutenção de computadores e, finalmente, se tornou
              uma loja de informática , games e música. Esse foi o meu sonho de
              infância transformado em realidade.
            </p>
            <p>
              <strong>Atividades desempenhadas:</strong>
            </p>
            <ul>
              <li>Atendimento ao cliente</li>
              <li>Compras e Vendas</li>
              <li>Manutenção de Computadores e Notebooks</li>
              <li>Configuração de Redes e Roteadores</li>
              <li>
                Instalação e configuração de Sistemas Operacionais e Periféricos
              </li>
            </ul>
          </div>
          <a target="_blank">Visite a loja | em construção</a>
        </li>

        {/* Liga Hortolandense */}
        <li className="experience__list__container">
          <div className="experience__container__title">
            <img src="experience/liga.png" alt="Logo da Liga Hortolandense" />
            <h2>Liga Hortolandense</h2>
          </div>
          <div className="experience__container__details">
            <p>
              <strong>Função:</strong> Organizador de Eventos
            </p>
            <p>
              <strong>Período:</strong> 2019 - 2024
            </p>
            <p>
              <strong>Descrição:</strong> Organizei eventos esportivos e
              coordenei atividades da liga, promovendo o esporte e incentivando
              a participação da comunidade em eventos locais.
            </p>
            <p>
              <strong>Atividades desempenhadas:</strong>
            </p>
            <ul>
              <li>Inscrições de participantes</li>
              <li>Atualização do Aplicativo</li>
              <li>Telas Gráficas</li>
              <li>Mesário</li>
              <li>Regulamento, reuniões</li>
            </ul>
          </div>
          <a href="https://boleiros-v3.vercel.app/" target="_blank">
            Saiba mais
          </a>
        </li>

        {/* 'Dr. George 22' */}
        <li className="experience__list__container">
          <div className="experience__container__title">
            <img
              src="experience/dr_george_222.png"
              alt="Logo da Campanha Política"
            />
            <h2>Campanha Política</h2>
          </div>

          <div className="experience__container__details">
            <p>
              <strong>Função:</strong> Motorista e Coordenador de Ações de
              Divulgação
            </p>
            <p>
              <strong>Período:</strong> 2024
            </p>

            <p>
              <strong>Descrição:</strong> Participei ativamente da campanha como
              motorista e em ações de campo, incluindo bandeiraços, panfletagem,
              coordenação de pontos de wind banner e divulgação das propostas de
              porta em porta. Essa experiência me proporcionou um aprendizado
              profundo em comunicação, planejamento e trabalho em equipe.
            </p>

            <p>
              🚀 Durante essa transição para desenvolvedor, aproveitei a
              oportunidade para criar uma plataforma digital para a campanha.
              Usando <strong>React com Vite</strong>, desenvolvi um site
              funcional onde centralizei o plano de governo, propostas,
              entrevistas, debates e conteúdos dos panfletos distribuídos. Essa
              plataforma ampliou o alcance das informações da campanha,
              facilitando o acesso e compartilhamento das propostas com um
              público maior.
            </p>
            <p>
              <strong>Atividades desempenhadas:</strong>
            </p>
            <ul>
              <li>
                Criação de um site informativo e funcional para a campanha
              </li>
              <li>Organização de planilhas no Excel e textos no Word</li>
              <li>
                Participação em eventos e ações de divulgação no trio elétrico
              </li>
              <li>Divulgação das propostas de porta em porta</li>
            </ul>

            <a href="https://dr-george22.vercel.app/" target="_blank">
              Acesse a plataforma da campanha
            </a>
          </div>
        </li>

        {/* 'Entregador' */}
        <li className="experience__list__container">
          <div className="experience__container__title">
            <img src="experience/entregas.jpg" alt="Logo da Entregas" />
            <h2>Entregas</h2>
          </div>

          <div className="experience__container__details">
            <p>
              <strong>Função:</strong> Motorista e Entregador
            </p>
            <p>
              <strong>Período:</strong> 2025
            </p>

            <p>
              <strong>Descrição:</strong> Atuando como motorista entregador
              realizando o transporte e a entrega de produtos em diferentes
              regiões, sempre prezando pela pontualidade, organização e bom
              atendimento ao cliente. Essa experiência me ajudou a desenvolver
              ainda mais minha responsabilidade, foco em resultados e
              proatividade.
            </p>

            <p>
              Desenvolvi uma aplicação para controle interno das ordens de
              serviço, com o objetivo de facilitar o registro, das entregas. A
              aplicação foi construída utilizando{" "}
              <strong>React com TypeScript</strong>, oferecendo uma interface
              simples e funcional para o dia a dia.
            </p>
            <p>
              <strong>Atividades desempenhadas:</strong>
            </p>
            <ul>
              <li>Coleta, transporte e entrega de mercadorias</li>
              <li>Organização das rotas e otimização do tempo</li>
              <li>Atendimento cordial e direto com os clientes</li>
              <li>
                Criação de uma aplicação web para controle de ordens de serviço
              </li>
              <li>
                Uso da aplicação para registrar entregas e status das ordens
              </li>
            </ul>

            <a href="https://cafs20.vercel.app/" target="_blank">
              Acesse a aplicação
            </a>
          </div>
        </li>

        {/* Logistica */}
        <li className="experience__list__container">
          <div className="experience__container__title">
            <img src="experience/stlog.png" alt="Logo da Loja Metal Games" />
            <h2>STT Log</h2>
          </div>
          <div className="experience__container__details">
            <p>
              <strong>Função:</strong> Diarista
            </p>
            <p>
              <strong>Período:</strong> 2026 Jan - presente
            </p>
            <p>
              <strong>Descrição:</strong> STT Log - Empresa de Logistia
            </p>
            <p>
              <strong>Atividades desempenhadas:</strong>
            </p>
            <ul>
              <li>Auxiliar</li>
              <li>Carga e Descarga - Caminões</li>
            </ul>
          </div>
          {/* <a target="_blank">Visite a loja | em construção</a> */}
        </li>
      </ul>
    </StyledExperience>
  );
}

export default Experience;
