import { StyledHeader } from "./style";
function Header() {
  return (
    <StyledHeader>
      <a href="#" className="logo">
        Wilson Alves
      </a>

      <i className="bx bx-menu" id="menu__icon"></i>

      <nav className="header__nav">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Resume</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </nav>
    </StyledHeader>
  );
}

export default Header;
