import axios from 'axios';
import { apiUrl } from '@/apiConfig';

/**
 * Envoie les données du formulaire de contact à l'API Laravel et envoie un email.
 *
 * @param {Object} contactData - Les données du formulaire de contact.
 * @param {string} contactData.firstName - Le prénom.
 * @param {string} contactData.lastName - Le nom.
 * @param {string} contactData.email - L'email.
 * @param {string} contactData.phone - Le téléphone.
 * @param {string} contactData.subject - Le sujet.
 * @param {string} contactData.message - Le message.
 * @param {boolean} contactData.consent - Consentement.
 * @returns {Promise<Object>} Une promesse résolue avec la réponse de l'API.
 */
const sendContactForm = async (contactData) => {
  const contactUrl = `${apiUrl}contact`;

  try {
    const response = await axios.post(contactUrl, contactData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError && error.response) {
      console.error("Failed to send contact form:", error.response.data || error.message);
      throw new Error(error.response.data?.message || error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error('An unexpected error occurred');
    }
  }
};

export default sendContactForm;
