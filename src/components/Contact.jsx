import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import useScrollToHash from "../hooks/useScrollToHash";
import { useTranslation } from 'react-i18next';

const Contact = ({ closeModal }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [confirmationMessageType, setConfirmationMessageType] = useState("");

  const onSubmit = (data) => {
    emailjs
      .send("service_ekrqbpd", "template_4kibzvk", data, "AbDAfXz8sfGa2-H6-")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setConfirmationMessage(t('contact.form.successMessage'));
        setConfirmationMessageType("success");
        reset(); // Réinitialise le formulaire après envoi réussi
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setConfirmationMessage(t('contact.form.errorMessage'));
        setConfirmationMessageType("error");
      });
  };

  // Appel du hook avec la hauteur de l'en-tête si nécessaire.
  useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe
  
  return (
    <>
      <h2>{t('contact.form.title')}</h2>
      <button className="close-modal-button" onClick={closeModal}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="from_name" className="labelform">
          {t('contact.form.name')} :
        </label>
        <input type="text" id="from_name" name="from_name" {...register("from_name", { required: true })} placeholder={t('contact.form.placeholdername')} required />
        {errors.from_name && <p>{t('contact.form.errorname')}</p>}

        <label htmlFor="subject" className="labelform">
        {t('contact.form.subject')} :
        </label>
        <input type="text" id="subject" name="subject" {...register("subject", { required: true })} placeholder={t('contact.form.placeholdersubject')} required />
        {errors.subject && <p>{t('contact.form.placeholdersubject')}</p>}

        <label htmlFor="email" className="labelform">
        {t('contact.form.email')} :
        </label>
        <input type="email" id="email" name="email" {...register("email", { required: true })} placeholder={t('contact.form.placeholderemail')} required />
        {errors.email && <p>{t('contact.form.placeholderemail')}</p>}

        <label htmlFor="message" className="labelform">
        {t('contact.form.message')} :
        </label>
        <textarea id="message" name="message" {...register("message", { required: true })} placeholder={t('contact.form.placeholdermessage')} required />
        {errors.message && <p>{t('contact.form.placeholdermessage')}</p>}

        <button type="submit" className="submit-button">{t('contact.form.send')}</button>
      </form>
      {confirmationMessage && <p className={`confirmation-message ${confirmationMessageType}`}>{confirmationMessage}</p>}
    </>
  );
};

// Définir les propTypes
Contact.propTypes = {
  closeModal: PropTypes.func.isRequired, // closeModal doit être une fonction requise
};

export default Contact;
