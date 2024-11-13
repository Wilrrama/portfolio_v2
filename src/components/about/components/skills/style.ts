import styled from "styled-components";

export const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  h2 {
    margin-top: 0.5rem;
    font-size: 1rem;
    text-align: center;
    color: var(--white-color);
  }

  .skill__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 1rem;

    li {
      display: flex;
      width: 8rem;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid var(--white-color);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }

      img {
        width: 50px;
        height: 50px;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
