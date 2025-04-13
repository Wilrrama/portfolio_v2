import styled from "styled-components";
import {
  bounceIn,
  glowEffect,
  slideInFromRight,
  slideInFromTop,
} from "../../styles/effectsStyles";

export const StyledHeader = styled.header<{ showMenu: boolean }>`
  display: ${(props) => (props.showMenu ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${slideInFromTop} 0.5s ease-out;
  border-bottom: solid 1px var(--main-color);

  .logo {
    color: var(--white-color);
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    animation: ${bounceIn} 0.8s ease-out;

    &:hover {
      animation: ${glowEffect} 1.5s infinite ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }

  #menu__icon {
    font-size: 2.5rem;
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
    gap: 2rem;

    a {
      font-size: 1rem;
      color: var(--white-color);
      position: relative;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: var(--main-color);
      }

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
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    #menu__icon {
      display: block;
    }

    .header__nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: var(--bg-color);
      display: none;
      flex-direction: column;
      padding: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

      &.visible {
        display: flex;
        animation: ${slideInFromRight} 0.3s ease-out;
      }

      a {
        padding: 5px;
        text-align: center;
      }
    }
  }

  @media (max-width: 480px) {
    .logo {
      font-size: 1.5rem;
    }

    #menu__icon {
      font-size: 2rem;
    }
  }
`;
