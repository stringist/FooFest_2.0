import { useState } from "react";

import menuStyles from "/sass/modules/_Menu.module.scss";

import MenuLink from "./MenuLink";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleToggle = () => {
    menuOpen ? setIsOpening(true) : setIsClosing(true);
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className={menuStyles.navBar}>
        <button onClick={handleToggle}>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
            </svg>
          )}
        </button>
        <ul className={`${menuStyles.menuNav} ${menuOpen ? menuStyles.showMenu : null} ${isOpening ? menuStyles.showingMenu : null} ${isClosing ? menuStyles.closingMenu : null}`}>
          <MenuLink link="/" title="Home" setMenuOpen={setMenuOpen} />
          <MenuLink link="/tickets" title="Tickets" setMenuOpen={setMenuOpen} />
          <MenuLink link="/program" title="Program" setMenuOpen={setMenuOpen} />
          <MenuLink link="/artists" title="Artists" setMenuOpen={setMenuOpen} />
        </ul>
      </nav>
    </header>
  );
}
