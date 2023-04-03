import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header bg-body-secondary">
      <nav className="navbar navbar-expand-lg  container d-flex ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link to="/home" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quem-sou" className="nav-link">
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
