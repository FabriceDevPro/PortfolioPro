import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import useScrollToHash from "../hooks/useScrollToHash";

const Contact = () => {
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
      .send("service_ekrqbpd", "template_ajt5qpd", data, "AbDAfXz8sfGa2-H6-")
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
    <main>
    <section className="Contact" id="Contact">
      <h2>Formulaire de Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="from_name" className="labelform">
          {" "}
          Votre nom :
        </label>
        <input type="text" name="from_name" {...register("from_name", { required: true })} placeholder="Votre nom" required />
        {errors.name && <p>name requis</p>}

        <label htmlFor="subject" className="labelform">
          {" "}
          Sujet :
        </label>
        <input type="text" name="subject" {...register("subject", { required: true })} placeholder="Sujet de votre mail" required />
        {errors.subject && <p>subject requis</p>}

        <label htmlFor="email" className="labelform">
          Email :
        </label>
        <input type="email" name="email" {...register("email", { required: true })} placeholder="Votre email" required />
        {errors.email && <p>Email requis</p>}

        <label htmlFor="message" className="labelform">
          Message :
        </label>
        <textarea name="message" {...register("message", { required: true })} placeholder="Votre message" required />
        {errors.message && <p>message requis</p>}

        <button type="submit">Envoyer</button>
      </form>
      {confirmationMessage && <p className={`confirmation-message ${confirmationMessageType}`}>{confirmationMessage}</p>}
    </section>
    </main>
  );
};

export default Contact;
