import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 1rem 9%;
  background: var(--bg-color);
  justify-content: space-between;
  align-items: center;

  .logo {
    color: var(--white-color);
    font-size: 2rem;
    font-weight: 700;
  }

  .header__nav a {
    font-size: 1rem;
    color: var(--white-color);
    font-weight: 500;
    margin-left: 3.5rem;
    transition: 0.5s;
  }

  .header__nav a:hover {
    color: var(--main-color);
  }
`;
