import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import de l'icône FaBars pour le menu burger
import { useTranslation } from 'react-i18next';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const { t, i18n } = useTranslation();
    const isFr = i18n.language === 'fr';

    // Cette fonction sera appelée lorsque l'utilisateur cliquera sur le toggle de langue
    const handleToggleClick = () => {
        i18n.changeLanguage(isFr ? 'en' : 'fr');
    };

    // Fonction pour fermer le menu burger
    const closeNav = () => setIsNavVisible(false);

    return (
        <header>
            <button className="burger-menu" onClick={() => setIsNavVisible(!isNavVisible)} aria-label="Menu">
                <FaBars /> {/* Utilisation de l'icône FaBars ici */}
            </button>
            <nav className={isNavVisible ? 'nav-visible' : ''}>
                <Link to="/#about" onClick={closeNav}>{t('menu.about')}</Link>
                <Link to="/#skills" onClick={closeNav}>{t('menu.skills')}</Link>
                <Link to="/#projects" onClick={closeNav}>{t('menu.projects')}</Link>
                <Link to="/#certifications" onClick={closeNav}>{t('menu.certifications')}</Link>
                <Link to="/curriculum-vitae#cv" className="cv-link" onClick={closeNav}>{t('menu.cv')}</Link>
                <Link to="#cv" className="cv-download" onClick={closeNav}>{t('menu.download_cv')}</Link>
                <Link to="/#contact" onClick={closeNav}>{t('menu.contact')}</Link>                
            </nav>
            {/* Toggle de langue */}
            <div className="lang-toggle" onClick={handleToggleClick}>
                    <span className="lang-text fr-text">FR</span>
                    <div className={`slider ${isFr ? '' : 'en'}`}></div>
                    <span className="lang-text en-text">EN</span>
                </div>
        </header>
    );
}

export default Header;
