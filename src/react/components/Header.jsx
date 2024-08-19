import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa'; // Import de l'icône FaBars pour le menu burger
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import ContactForm from './Contact';
import { useContactModal } from '@/react/context/ContactModal';

function Header() {
    const { isModalOpen, openModal, closeModal } = useContactModal();

    const [isNavVisible, setIsNavVisible] = useState(false);
    const { t, i18n } = useTranslation();
    const isFr = i18n.language === 'fr';

    // Cette fonction sera appelée lorsque l'utilisateur cliquera sur le toggle de langue
    const handleToggleClick = () => {
        i18n.changeLanguage(isFr ? 'en' : 'fr');
    };

    // Fonction pour fermer le menu burger
    const closeNav = () => setIsNavVisible(false);

    // Fonction pour ouvrir le modal de contact
    const handleContactClick = () => {
        closeNav(); // Fermer le menu de navigation si ouvert
        openModal(); // Ouvrir le modal de contact
    };

    // Fonction pour ajouter l'effet ripple
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        // Supprime l'élément après l'animation
        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };
    return (
        <header>
            <button 
                className="burger-menu" 
                onClick={(e) => {
                    setIsNavVisible(!isNavVisible)
                    createRipple(e);
                }}
                aria-label="Menu"
                style={{ transform: isNavVisible ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
                {isNavVisible ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={isNavVisible ? 'nav-visible' : ''}>
                <Link to="/#about" onClick={closeNav}>{t('menu.about')}</Link>
                <Link to="/#skills" onClick={closeNav}>{t('menu.skills')}</Link>
                <Link to="/#projects" onClick={closeNav}>{t('menu.projects')}</Link>
                <Link to="/#certifications" onClick={closeNav}>{t('menu.certifications')}</Link>
                <Link to="/curriculum-vitae#cv" className="cv-link" onClick={closeNav}>{t('menu.cv')}</Link>
                {/* <a 
                    href="https://my-resume.fabwebprojects.fr/" 
                    className="cv-link" 
                    onClick={closeNav} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    {t('menu.cv')}
                </a> */}
                <Link to="#cv" className="cv-download" onClick={closeNav}>{t('menu.download_cv')}</Link>
                <Link to="/#contact" onClick={handleContactClick}>{t('menu.contact')}</Link>
                {/* onClick={closeNav} */}
            </nav>
            {/* Toggle de langue */}
            <div className="lang-toggle" onClick={handleToggleClick}>
                <span className="lang-text fr-text">FR</span>
                <div className={`slider ${isFr ? '' : 'en'}`}></div>
                <span className="lang-text en-text">EN</span>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Contact Form Modal"
                className="contact-modal"
                overlayClassName="contact-modal-overlay"
            >
                <ContactForm closeModal={closeModal} />
            </Modal>
        </header>
        
    );
}

export default Header;
