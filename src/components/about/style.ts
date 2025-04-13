import styled from "styled-components";
import { bounceIn, fadeIn, glowEffect } from "../../styles/effectsStyles";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  position: relative;
  width: 100%;
  min-height: 100vh;

  .about__title {
    font-size: clamp(2rem, 3vw, 4rem);
    color: var(--white-color);
    font-weight: 700;
    position: relative;
    animation: ${glowEffect} 1.5s ease-in-out infinite;

    /* &:hover {
      animation: ${bounceIn} 0.8s ease-out;
    } */
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
