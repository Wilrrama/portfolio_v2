import styled, { keyframes } from "styled-components";

// Keyframes para animações
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glowingBorder = keyframes`
  0%, 100% {
    box-shadow: 0 0 1rem var(--main-color);
  }
  50% {
    box-shadow: 0 0 2rem var(--main-color), 0 0 3rem var(--main-color);
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const StyledHome = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 3rem 9% 2rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1200px) {
    padding: 1rem 5% 2rem;
    gap: 3rem;
  }

  @media (max-width: 991px) {
    padding: 6rem 4% 2rem;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 1rem;
  }
`;

export const StyledHomeDetails = styled.div`
  width: 40%;
  gap: 1%;
  animation: ${slideInLeft} 1s ease-out;

  .perfil__container {
    h1 {
      font-size: clamp(2.5rem, 8vw, 3.5rem);
      line-height: 1.2;
      margin-bottom: 0.5rem;
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      animation: ${typing} 2s steps(30);

      @media (max-width: 1010px) {
        font-size: clamp(2rem, 7vw, 3rem);
      }

      @media (max-width: 830px) {
        font-size: clamp(2rem, 7vw, 2.5rem);
      }

      @media (max-width: 480px) {
        font-size: clamp(1.8rem, 6vw, 2.5rem);
      }
    }

    h2 {
      display: inline-block;
      font-size: clamp(1.5rem, 3vw, 2rem);
      line-height: 1.4;
      margin: 0.5rem 0;
      opacity: 0;
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 2s;

      @media (max-width: 768px) {
        font-size: clamp(1.5rem, 3.5vw, 1.8rem);
      }

      @media (max-width: 480px) {
        font-size: clamp(1.2rem, 3vw, 1.5rem);
      }
    }

    p {
      font-size: clamp(0.9rem, 2vw, 1rem);
      line-height: 1.6;
      margin: 1rem 0 2.5rem;
      opacity: 0;
      animation: ${fadeIn} 1s ease-out forwards;
      animation-delay: 2.5s;
    }
  }

  .btn__container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    opacity: 0;
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 3s;
  }

  .cvn {
    display: inline-block;
    padding: clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem);
    background: var(--main-color);
    border: 0.2rem solid var(--main-color);
    border-radius: 4rem;
    box-shadow: 0 0 1rem var(--main-color);
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: var(--white-color);
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      background: transparent;
      color: var(--main-color);
      box-shadow: 0 0 2rem var(--main-color);
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .icons a {
    display: inline-flex;
    padding: 0.5rem;
    border: 0.2rem solid var(--main-color);
    border-radius: 50%;
    font-size: clamp(1.5rem, 4vw, 2rem);
    transition: all 0.3s ease;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-out forwards;

    &:nth-child(1) {
      animation-delay: 3.2s;
    }
    &:nth-child(2) {
      animation-delay: 3.4s;
    }
    &:nth-child(3) {
      animation-delay: 3.6s;
    }
    &:nth-child(4) {
      animation-delay: 3.8s;
    }

    &:hover {
      transform: scale(1.1) rotate(360deg);
      background: var(--main-color);
      color: var(--bg-color);
      box-shadow: 0 0 1rem var(--main-color);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    .btn__container {
      justify-content: center;
    }

    .icons {
      justify-content: center;
      margin-top: 1rem;
    }
  }
`;

export const StyledHomeBoxImg = styled.div`
  position: relative;
  width: 40%;
  border-radius: 50%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 0.2rem solid var(--main-color);
  animation: ${slideInRight} 1s ease-out, ${glowingBorder} 3s infinite;

  &::before {
    content: "";

    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--main-color);
    opacity: 0.1;
    animation: ${float} 3s ease-in-out infinite;
  }

  .image__perfil {
    width: 85%;
    height: auto;
    transition: transform 0.3s ease;
    animation: ${float} 3s ease-in-out infinite;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    max-width: 300px;
    animation: ${slideInRight} 1s ease-out, ${glowingBorder} 3s infinite;
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;
