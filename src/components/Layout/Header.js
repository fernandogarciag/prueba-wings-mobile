function Header() {
  return (
    <header className="header">
      <a className="header-img" href="/">
        <img src="./logo_full.png" alt="Logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li className="header-item">
            <a href="/nuevo">Nueva tarea</a>
          </li>
          <li className="header-item">
            <a href="/historial">Historial</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
