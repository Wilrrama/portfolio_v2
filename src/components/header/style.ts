// style.js
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  .logo {
    color: var(--white-color);
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    font-weight: 700;
  }

  #menu__icon {
    font-size: 3rem;
    color: var(--white-color);
    display: none;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: var(--main-color);
    }
  }

  .header__nav {
    display: flex;
    gap: 3.5rem;

    a {
      font-size: clamp(0.9rem, 2vw, 1rem);
      color: var(--white-color);
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: var(--main-color);
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
    padding: 1rem 3%;

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
      }

      a {
        display: block;
        font-size: 1.1rem;
        margin: 2rem 0;
        text-align: center;
        transform: translateY(-20px);
        opacity: 0;
        transition: 0.3s ease;
      }

      &.active a {
        transform: translateY(0);
        opacity: 1;
        transition-delay: calc(0.15s * var(--i));
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
