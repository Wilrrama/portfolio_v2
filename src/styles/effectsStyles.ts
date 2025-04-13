import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const glowEffect = keyframes`
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

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const glowingBorder = keyframes`
  0%, 100% {
    box-shadow: 0 0 1rem var(--main-color);
  }
  50% {
    box-shadow: 0 0 2rem var(--main-color), 0 0 3rem var(--main-color);
  }
`;

export const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

export const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  70% {
    transform: scale(1.1);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
