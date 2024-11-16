import { StyledHeader } from "./style";
function Header() {
  return (
    <StyledHeader>
      <a href="#" className="logo">
        Wilson Alves
      </a>

      <i className="bx bx-menu" id="menu__icon"></i>

      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#">Contato</a>
      </nav>
    </StyledHeader>
  );
}

export default Header;
