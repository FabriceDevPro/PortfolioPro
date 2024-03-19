import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import useScrollToHash from "@/react/hooks/useScrollToHash";
import { FaPaperclip } from 'react-icons/fa';

const ContactAttachement = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [confirmationMessageType, setConfirmationMessageType] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  const onSubmit = (data) => {
    // Créer un objet JSON contenant les données du formulaire
    const emailData = {
      from_name: data.from_name,
      subject: data.subject,
      email: data.email,
      message: data.message,
    };
  
    // Ajouter le fichier joint s'il est présent
    if (data.file) {
      emailData.file = data.file[0];
    }
  
    // Envoyer l'e-mail avec emailjs
    emailjs
      .send("service_ekrqbpd", "template_ajt5qpd", emailData, "AbDAfXz8sfGa2-H6-")
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

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Ajoutez une classe pour indiquer le survol
    e.target.classList.add('hover');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Supprimez la classe de survol
    e.target.classList.remove('hover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Supprimez la classe de survol
    e.target.classList.remove('hover');
    // Récupérez le fichier déposé
    const file = e.dataTransfer.files[0];
    // Enregistrez le fichier dans le state pour afficher le nom du fichier
    setAttachedFile(file);
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024; // Taille du fichier en Mo
    const maxFileSize = 5; // Limite de taille en Mo
  
    if (fileSize > maxFileSize) {
      // Afficher un message d'erreur si le fichier dépasse la limite de taille
      console.log("Fichier trop volumineux. Veuillez sélectionner un fichier de moins de 5 Mo.");
      return;
    }
  
    // Enregistrez le fichier dans le formulaire
    register('file').onChange(file);
    // Enregistrez également le fichier dans le state pour afficher le nom du fichier
    setAttachedFile(file);
  };

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
        <input type="text" name="from_name" {...register("from_name", { required: true })} placeholder="Votre nom" required />
        {errors.from_name && <p>Le nom est requis</p>}

        <label htmlFor="subject" className="labelform">
          Sujet :
        </label>
        <input type="text" name="subject" {...register("subject", { required: true })} placeholder="Sujet de votre mail" required />
        {errors.subject && <p>Le sujet est requis</p>}

        <label htmlFor="email" className="labelform">
          Email :
        </label>
        <input type="email" name="email" {...register("email", { required: true })} placeholder="Votre email" required />
        {errors.email && <p>Email requis</p>}

        <div className="file-upload-container">
          <div className="drop-zone" 
              onClick={() => document.getElementById('file-upload').click()}
              onDragOver={(e) => e.preventDefault()} 
              onDragEnter={handleDragEnter} 
              onDragLeave={handleDragLeave} 
              onDrop={handleDrop}>
            <FaPaperclip />
            {attachedFile ? <p>{attachedFile.name}</p> : <p>Faites glisser et déposez un fichier ici ou cliquez pour choisir un fichier</p>}
          </div>
          <input type="file" id="file-upload" className="file-upload-input" onChange={handleFileChange} {...register("file")} />
        </div>

        <label htmlFor="message" className="labelform">
          Message :
        </label>
        <textarea name="message" {...register("message", { required: true })} placeholder="Votre message" required />
        {errors.message && <p>Message requis</p>}

        <button type="submit" className="submit-button">Envoyer</button>
      </form>
      {confirmationMessage && <p className={`confirmation-message ${confirmationMessageType}`}>{confirmationMessage}</p>}
    </>
  );
};

// Définir les propTypes
ContactAttachement.propTypes = {
  closeModal: PropTypes.func.isRequired, // closeModal doit être une fonction requise
};

export default ContactAttachement;
