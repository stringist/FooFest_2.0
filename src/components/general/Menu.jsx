import { useState } from "react";
import createUID from "create-unique-id";
import { AiFillHome } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCalendar2DayFill } from "react-icons/bs";
import { BsMusicPlayerFill } from "react-icons/bs";
import menuStyles from "/sass/modules/_Menu.module.scss";
// import guitar_icon from "../../../img/guitar_icon.svg";

import MenuLink from "./MenuLink";

export default function Menu(props) {
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
        <div className={menuStyles.logo}>
          <img src="/img/ff_logo.svg" alt="Foofest logo" />
        </div>
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
        <ul
          className={`${menuStyles.menuNav} ${
            menuOpen ? menuStyles.showMenu : null
          } ${isOpening ? menuStyles.showingMenu : null} ${
            isClosing ? menuStyles.closingMenu : null
          }`}
        >
          {props.user === "" ? (
            <MenuLink
              link="/profile"
              title="Sign in"
              setMenuOpen={setMenuOpen}
              icon={<FaSignInAlt />}
            />
          ) : (
            <MenuLink
              link="/profile"
              title="Profile"
              setMenuOpen={setMenuOpen}
              key={createUID(4)}
              icon={<BsFillPersonFill />}
            />
          )}
          <MenuLink
            link="/"
            title="Home"
            setMenuOpen={setMenuOpen}
            key={createUID(4)}
            icon={<AiFillHome />}
          />
          <MenuLink
            link="/tickets"
            title="Tickets"
            setMenuOpen={setMenuOpen}
            key={createUID(4)}
            icon={<FaTicketAlt />}
          />
          <MenuLink
            link="/program"
            title="Program"
            setMenuOpen={setMenuOpen}
            key={createUID(4)}
            icon={<BsFillCalendar2DayFill />}
          />
          <MenuLink
            link="/artists"
            title="Artists"
            setMenuOpen={setMenuOpen}
            key={createUID(4)}
            icon={<BsMusicPlayerFill />}
          />
        </ul>
      </nav>
    </header>
  );
}
