import styled from "styled-components";

export const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: var(--main-color);
  }

  .skill__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 0.5rem;

    li {
      display: flex;
      width: 8rem;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid var(--main-color);
      box-shadow: 0 4px 8px var(--main-color);

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 2rem var(--main-color);
      }

      h2 {
        font-size: 1rem;
      }

      img {
        width: 50px;
        height: 50px;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
