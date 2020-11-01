import RedirectButtom from "../RedirectButtom";

function Header() {
  return (
    <header className="header">
      <a className="header-img" href="/">
        <img src="./logo_full.png" alt="Logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li className="header-item">
            <RedirectButtom href="/nuevo">Nueva tarea</RedirectButtom>
          </li>
          <li className="header-item">
            <RedirectButtom href="/historial">Historial</RedirectButtom>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
