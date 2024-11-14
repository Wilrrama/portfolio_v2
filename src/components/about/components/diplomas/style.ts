import styled from "styled-components";

export const StyledDiplomas = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .diplomas__list {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid var(--main-color);
      border-radius: 8px;
      box-shadow: 0 4px 8px var(--main-color);
      max-width: 300px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 2rem var(--main-color);
      }

      img {
        width: 200px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 0.75rem;
      }

      h2 {
        font-size: 1.1rem;
        margin: 0.5rem 0;
        text-align: center;
      }

      p {
        font-size: 0.9rem;
        text-align: center;
      }
    }
  }
`;
