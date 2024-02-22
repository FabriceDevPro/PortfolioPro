import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <header className="header">
            <button className="burger-menu" onClick={() => setIsNavVisible(!isNavVisible)}>☰</button>
            <nav className={isNavVisible ? 'nav-visible' : ''}>
                <Link to="/#about">A propos</Link>
                <Link to="/#skills">Compétences</Link>
                <Link to="/#projectsformation">CV</Link>
                <Link to="/#projectsformation">Projets en Formation</Link>
                <Link to="/#projectsformation">Projets en Entreprise</Link>
                <Link to="/#projectsperso">Projet Personnel</Link>
                <Link to="/Contact#contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
