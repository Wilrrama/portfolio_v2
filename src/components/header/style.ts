import styled, { keyframes } from "styled-components";

// Keyframes para as animações
const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

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

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  animation: ${slideInFromTop} 0.5s ease-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: solid 1px var(--main-color);

  .logo {
    color: var(--white-color);
    font-size: clamp(1.2rem, 3vw, 1.5rem);
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

  #menu__icon {
    font-size: 3rem;
    color: var(--white-color);
    display: none;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      color: var(--main-color);
      transform: scale(1.1);
    }
  }

  .header__nav {
    display: flex;
    gap: 3.5rem;

    a {
      font-size: clamp(0.9rem, 2vw, 1rem);
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
  }

  @media (max-width: 1200px) {
    padding: 1rem 5%;

    .header__nav {
      gap: 2.5rem;
    }
  }

  @media (max-width: 991px) {
    padding: 1rem 4%;

    .header__nav {
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 2%;

    #menu__icon {
      display: block;
    }

    .header__nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 4%;
      background: var(--bg-color);
      border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      display: none;

      &.active {
        display: block;
        animation: ${slideInFromRight} 0.3s ease-out forwards;
      }

      a {
        display: block;
        font-size: 1.1rem;
        margin: 2rem 0;
        text-align: center;
        transform: translateX(-50px);
        opacity: 0;

        @keyframes slideInLinks {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        &.active {
          animation: slideInLinks 0.3s ease-out forwards;
          animation-delay: calc(0.1s * var(--i));
        }
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 2%;

    .logo {
      font-size: 1.2rem;
    }

    #menu__icon {
      font-size: 2.5rem;
    }
  }
`;
