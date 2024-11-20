import { useState } from "react";
import { StyledHeader } from "./style";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <StyledHeader showMenu={showMenu}>
      <a href="#" className="logo">
        Wilson Alves
      </a>

      <i className="bx bx-menu" id="menu__icon" onClick={toggleMenu}></i>

      <nav className={`header__nav ${showMenu ? "visible" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#sobre" onClick={closeMenu}>
          Sobre
        </a>
        <a href="#projetos" onClick={closeMenu}>
          Projetos
        </a>
        <a href="#contato" onClick={closeMenu}>
          Contato
        </a>
      </nav>
    </StyledHeader>
  );
}

export default Header;
