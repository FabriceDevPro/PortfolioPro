import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import de l'icône FaBars pour le menu burger

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    // Fonction pour fermer le menu burger
    const closeNav = () => setIsNavVisible(false);

    return (
        <header className="header">
            <button className="burger-menu" onClick={() => setIsNavVisible(!isNavVisible)}>
                <FaBars /> {/* Utilisation de l'icône FaBars ici */}
            </button>
            <nav className={isNavVisible ? 'nav-visible' : ''}>
                <Link to="/#about" onClick={closeNav}>A propos</Link>
                <Link to="/#skills" onClick={closeNav}>Compétences</Link>
                <Link to="/#projects" onClick={closeNav}>Mes Projets</Link>
                <Link to="/curriculum-vitae#cv" className="cv-link" onClick={closeNav}>CV</Link>
                <Link to="/#contact" onClick={closeNav}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
