// useContactModal.js
import { useContext } from 'react';
import ContactModalContext from './ContactModalContext';

export const useContactModal = () => useContext(ContactModalContext);
