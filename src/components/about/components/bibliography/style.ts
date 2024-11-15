import styled from "styled-components";

export const StyledBibliography = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 10%;
  gap: 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--main-color);
  }

  .container__bibliography {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .img__bibliography {
      flex: 1;
      max-width: 200px;
      box-shadow: 0 0 1rem var(--main-color);

      img {
        width: 100%;
        border-radius: 8px;
      }
    }

    .details__bibliography {
      flex: 2;
      line-height: 1.6;
      font-size: 1rem;
    }
  }
`;
