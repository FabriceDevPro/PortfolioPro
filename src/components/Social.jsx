import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Assurez-vous que l'importation des icônes est correcte
import { useContactModal } from '../context/ContactModal';

import Modal from 'react-modal';
import ContactForm from './Contact';

const Social = () => {
  // Utilisez le contexte pour contrôler l'ouverture et la fermeture du modal
  const { isModalOpen, openModal, closeModal } = useContactModal();

  return (    
    <>
      <h2 className="footer-social__title">Pour une collaboration ou un échange, restons en contact :</h2>
      <div className="footer-social__icons-container">
        <a href="https://github.com/Fabrice-Perso/" title="Mon profil GitHub" target="_blank" rel="noopener noreferrer" className="footer-social__icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" title="Mon profil LinkedIn" target="_blank" rel="noopener noreferrer" className="footer-social__icon">
          <FaLinkedin />
        </a>
        {/* Utilisez directement openModal du contexte */}
        <button onClick={openModal} title="Contactez-moi" className="footer-social__icon">
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
