/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa6";
import { useState } from 'react';

import Modal from 'react-modal';
import ContactForm from './Contact';

const Social = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="social-section" id="contact">
      <h2 className="social-section__title">Retrouvez-moi sur les réseaux sociaux :</h2>
      <div className="social-section__icons-container">
        <a href="https://github.com/Fabrice-Perso/" title="Profil GitHub" target="_blank" className="social-section__icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" title="Profil LinkedIn" target="_blank" className="social-section__icon">
          <FaLinkedin />
        </a>
        <a onClick={openModal} className="social-section__icon">
        <FaEnvelope />
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="contact-modal"
        overlayClassName="contact-modal-overlay"
      >
        <ContactForm closeModal={closeModal} />
      </Modal>
      </div>
    </section>
  );
};

export default Social;
