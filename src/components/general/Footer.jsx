import footerStyles from "/sass/modules/_Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <nav>
        <Link to={"/"}>
          <img src="/img/ff_logo.svg" alt="Foofest logo" />
        </Link>

        <ul>
          <li>
            <Link to={"/tickets"}>Tickets</Link>
          </li>
          <li>
            <Link to={"/program"}>Program</Link>
          </li>
          <li>
            <a href="/">Volunteer</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Sustainability</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
        </ul>
        <ul className={footerStyles.some}>
          <li>
            <a href="/">
              <img src="/img/facebook.svg" alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/img/instagram.svg" alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/img/youtube.svg" alt="youtube icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
