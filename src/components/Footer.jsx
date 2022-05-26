import footerStyles from "/sass/modules/_Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <nav>
        <a href="/">
          <img src="/img/logo.svg" alt="Foofest logo" />
        </a>
        <ul>
          <li>
            <a href="#">Tickets</a>
          </li>
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">Volunteer</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Sustainability</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
        </ul>
        <ul className={footerStyles.some}>
          <li>
            <a href="#">
              <img src="/img/facebook.svg" alt="facebook icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/instagram.svg" alt="instagram icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/img/youtube.svg" alt="youtube icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
