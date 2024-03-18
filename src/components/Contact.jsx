import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import useScrollToHash from "../hooks/useScrollToHash";

const Contact = ({ closeModal }) => {
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
        setConfirmationMessage("Votre message a été envoyé avec succès !");
        setConfirmationMessageType("success");
        reset(); // Réinitialise le formulaire après envoi réussi
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setConfirmationMessage("Échec de l'envoi du message, veuillez réessayer.");
        setConfirmationMessageType("error");
      });
  };

  // Appel du hook avec la hauteur de l'en-tête si nécessaire.
  useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe

  return (
    <>
      <h2>Formulaire de Contact</h2>
      <button className="close-modal-button" onClick={closeModal}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="from_name" className="labelform">
          Votre nom :
        </label>
        <input type="text" id="from_name" name="from_name" {...register("from_name", { required: true })} placeholder="Votre nom" required />
        {errors.from_name && <p>Le nom est requis</p>}

        <label htmlFor="subject" className="labelform">
          Sujet :
        </label>
        <input type="text" id="subject" name="subject" {...register("subject", { required: true })} placeholder="Sujet de votre mail" required />
        {errors.subject && <p>Le sujet est requis</p>}

        <label htmlFor="email" className="labelform">
          Email :
        </label>
        <input type="email" id="email" name="email" {...register("email", { required: true })} placeholder="Votre email" required />
        {errors.email && <p>Email requis</p>}

        <label htmlFor="message" className="labelform">
          Message :
        </label>
        <textarea id="message" name="message" {...register("message", { required: true })} placeholder="Votre message" required />
        {errors.message && <p>Message requis</p>}

        <button type="submit" className="submit-button">Envoyer</button>
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
