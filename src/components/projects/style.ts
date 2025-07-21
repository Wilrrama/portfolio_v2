import styled from "styled-components";
import { bounceIn, fadeIn, glowEffect } from "../../styles/effectsStyles";

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 6rem;

  h1 {
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight: 700;
    position: relative;
    animation: ${bounceIn} 0.8s ease-out;
    animation: ${glowEffect} 1.5s ease-in-out infinite;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--main-color);
      transition: width 0.3s ease;
    }
  }

  .nav__projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 90%;
    padding: 1rem 0 0 0;
    gap: 20px;
    width: 70%;

    a {
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      width: 200px;
      font-weight: 500;
      position: relative;
      transition: color 0.3s;
      animation: ${fadeIn} 0.5s ease-out;
      border-radius: 1rem;
      box-shadow: 0 0 0.5rem var(--main-color);
      text-align: center;
      padding: 0.5rem;

      &::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: var(--main-color);
        transition: width 0.3s ease;
      }

      &:hover::before {
        width: 100%;
      }

      &:hover {
        color: var(--main-color);
      }
    }

    @media (max-width: 640px) {
      padding: 0.5rem;
      /* flex-direction: column; */
      gap: 15px;
      align-items: center;
      width: 90%;

      a {
        border-radius: 1rem;
        box-shadow: 0 0 0.5rem var(--main-color);
        width: 130px;
        text-align: center;
      }
    }
  }
`;

export const StyledProjectsList = styled.ul`
  display: flex;
  padding: 1rem;
  width: 90%;

  li {
    width: 80%;
    margin: 0 auto;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    padding-top: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 1rem var(--main-color);

    &:hover {
      transform: translateY(-7px);
    }

    h2 {
      font-size: 1.5rem;
      color: var(--main-color);
      margin-bottom: 1rem;
      font-weight: 600;
      text-align: center;
    }

    .projects__details__container {
      display: flex;
      justify-content: center;
      gap: 3%;
      img {
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .projects__details {
        display: flex;
        width: 400px;
        flex-direction: column;
        gap: 30px;

        p {
          padding: 1rem;
          line-height: 1.6;
          text-align: center;
        }

        .projects__details__links__tech {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5%;

          .projects__details__links {
            display: flex;
            justify-content: center;
            gap: 15px;
            a {
              text-align: center;
              font-size: 2rem;
              border-radius: 50%;
              display: inline-flex;
              justify-content: center;
              padding: 0.5rem;
              border: 0.2rem solid var(--main-color);
              transition: all 0.3s ease;
              opacity: 0;
              animation: ${fadeIn} 0.5s ease-out forwards;
            }

            a:hover {
              transform: scale(1.1) rotate(360deg);
              background: var(--main-color);
              color: var(--bg-color);
              box-shadow: 0 0 1rem var(--main-color);
            }
          }
          .tech__container {
            display: flex;
            justify-content: center;
            /* flex-wrap: wrap; */
            gap: 10px;
            padding: 1rem;
            img {
              width: 50px;
              height: 50px;
              padding: 0.5rem;
              border: 0.2rem solid var(--main-color);
            }
            img:hover {
              transform: scale(1.1) rotate(360deg);
              box-shadow: 0 0 1rem var(--main-color);
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    li {
      width: 95%;
      .projects__details__container {
        display: flex;
        justify-content: center;
        gap: 3%;
        img {
          padding-left: 15px;
          width: 150px;
          height: 300px;
          object-fit: cover;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 500px) {
    li {
      width: 95%;
      height: 480px;
      padding: 0.5rem;
      display: flex;

      /* h2 {
        font-size: 1.2rem; 
      } */

      .projects__details__container {
        flex-direction: column;
        align-items: center;

        img {
          width: 150px;
          height: 150px;
        }

        .projects__details {
          gap: 10px;
          width: 250px;
          p {
            padding: 0.5rem;
            font-size: 0.9rem;
          }

          .projects__details__links__tech {
            gap: 1px;

            /* .projects__details__links {
              a {
                font-size: 1.2rem;
                padding: 0.3rem;
              }
            } */

            .tech__container {
              /* gap: 10px; */

              /* img {
                width: 40px;
                height: 40px;
              } */
            }
          }
        }
      }
    }
  }
`;

export const StyledNavigationButtons = styled.div`
  display: flex;
  gap: 15px;
  button {
    background: var(--main-color);
    text-align: center;
    font-size: clamp(1.5rem, 4vw, 2rem);
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    border: 0.2rem solid var(--main-color);
    transition: all 0.3s ease;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;
  }

  button:hover {
    box-shadow: 0 0 1rem var(--main-color);
  }
`;
