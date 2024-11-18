import styled from "styled-components";

export const StyledExperience = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 1rem 0;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--main-color);
  }

  .experience__list {
    width: 90%;
    max-width: 800px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .experience__list__container {
    margin: 20px 0;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.2s ease;
    box-shadow: 0 0 1rem var(--main-color);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 1rem var(--main-color);
    }

    .experience__container__title {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 10px;
      justify-content: center;
      gap: 3%;

      img {
        width: 180px;
        height: 140px;
        object-fit: cover;
        box-shadow: 0 0 1rem var(--main-color);
      }

      h2 {
        font-size: 1.5rem;
        margin: 0;
      }
    }

    .experience__container__details {
      padding: 10px 0;

      p {
        line-height: 1.6;
        margin: 10px 0;
      }

      strong {
        font-weight: bold;
      }

      ul {
        list-style: disc;
        padding-left: 20px;
        margin: 10px 0;

        li {
          margin: 5px 0;
          position: relative;
          border-radius: 8px;
          padding: 10px;
          transition: transform 0.2s ease;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 1rem var(--main-color);
          }
        }
      }
    }

    a {
      display: inline-block;
      margin-top: 15px;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s ease;
      color: var(--main-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledExperience;
