import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Assurez-vous que l'importation des icônes est correcte
import { useContactModal } from '@/react/context/ContactModal';
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';
import ContactForm from './Contact';
import MaltIcon from "@/react/components/MaltIcon";

const Social = () => {
  // Utilisez le contexte pour contrôler l'ouverture et la fermeture du modal
  const { isModalOpen, openModal, closeModal } = useContactModal();
  const { t } = useTranslation();
  return (    
    <>
      <h2 className="footer-social__title">{t('contact.title')} : </h2>
      <div className="footer-social__icons-container">
        <a href="https://github.com/FabriceDevPro/" title={t('contact.gitHub')} target="_blank" rel="noopener noreferrer" className="footer-social__icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" title={t('contact.linkedIn')} target="_blank" rel="noopener noreferrer" className="footer-social__icon">
          <FaLinkedin />
        </a>
        <a href="https://www.malt.fr/profile/fabricemagnandebellevue" target="_blank" rel="noopener noreferrer" className="footer-social__icon">
          <MaltIcon background />
        </a>
        {/* Utilisez directement openModal du contexte */}
        <button onClick={openModal} title={t('contact.contact')} className="footer-social__icon">
          <FaEnvelope />
        </button>
      </div>
      <Modal
        isOpen={isModalOpen} // Assurez-vous que cette variable correspond à l'état du modal
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="contact-modal"
        overlayClassName="contact-modal-overlay"
      >
        <ContactForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default Social;
