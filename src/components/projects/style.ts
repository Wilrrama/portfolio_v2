import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const glowEffect = keyframes`
  0% {
    text-shadow: 0 0 5px var(--main-color);
  }
  50% {
    text-shadow: 0 0 20px var(--main-color), 0 0 30px var(--main-color);
  }
  100% {
    text-shadow: 0 0 5px var(--main-color);
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width: 50%;
  padding: 2rem 0;
  margin: 0 auto;

  li {
    height: 450px;
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
    }

    img {
      width: 200px;
      height: 180px;
      object-fit: cover;
      border-radius: 0.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 1rem;
      line-height: 1.6;
    }

    div {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    a {
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

    a:hover {
      transform: scale(1.1) rotate(360deg);
      background: var(--main-color);
      color: var(--bg-color);
      box-shadow: 0 0 1rem var(--main-color);
    }

    .tech__container {
      display: flex;
      justify-content: center;
      gap: 15px;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    width: 90%;

    li {
      padding: 1rem;

      /* img {
        width: 200px;
        height: 200px;
      } */
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
