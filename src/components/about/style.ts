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

export const StyledAbout = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  width: 100%;
  height: 100%;

  .about__title {
    font-size: clamp(2rem, 3vw, 4rem);
    color: var(--white-color);
    font-weight: 700;
    position: relative;
    animation: ${bounceIn} 0.8s ease-out;

    &:hover {
      animation: ${glowEffect} 1.5s ease-in-out infinite;
    }

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

    &:hover::after {
      width: 100%;
    }
  }

  .about__nav {
    padding: 1rem 0 1rem 0;
    display: flex;
    gap: 1rem;
    a {
      font-size: clamp(0.9rem, 2vw, 1.5rem);
      color: var(--white-color);
      font-weight: 500;
      position: relative;
      transition: color 0.3s;
      animation: ${fadeIn} 0.5s ease-out;

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
        text-shadow: 0 0 8px rgba(var(--main-color-rgb), 0.3);
      }
    }
    .active {
      color: var(--main-color);
    }
    @media (max-width: 420px) {
      padding-top: 1rem;
      flex-direction: column;

      a {
        border-radius: 1rem;
        box-shadow: 0 0 0.5rem var(--main-color);
        width: 200px;
        text-align: center;
      }
    }
  }
`;
