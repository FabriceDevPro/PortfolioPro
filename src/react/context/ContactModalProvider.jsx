// ContactModalProvider.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import ContactModalContext from './ContactModalContext';

export const ContactModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ContactModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

ContactModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactModalProvider;

