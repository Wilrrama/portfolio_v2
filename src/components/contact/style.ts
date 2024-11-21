import styled, { keyframes } from "styled-components";

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

export const StyledContact = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 6rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  h1 {
    font-size: clamp(2rem, 3vw, 4rem);
    font-weight: 700;
    position: relative;
    animation: ${glowEffect} 1.5s ease-in-out infinite;
  }

  h1:hover {
    /* animation: ${bounceIn} 0.8s ease-out; */
    /* animation: ${glowEffect} 1.5s ease-in-out infinite; */
  }

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      width: 100%;
      height: 50px;
      padding-left: 10px;
      border-radius: 4px;
    }

    textarea {
      padding: 10px;
      border-radius: 4px;
      height: 150px;
    }

    button {
      margin-top: 5px;
      width: 100%;
      height: 60px;
      border-radius: 4px;
      background-color: var(--main-color);
      color: var(--bg-color);
      font-weight: 500;

      span {
        padding-left: 3px;
        font-size: 1rem;
      }
    }

    button:hover {
      box-shadow: 0 0 1rem var(--main-color);
      background-color: var(--bg-color);
      color: var(--white-color);
    }

    @media (max-width: 640px) {
      width: 90%;
    }
  }
`;
