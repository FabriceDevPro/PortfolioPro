import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useState } from "react";
import useScrollToHash from "@/react/hooks/useScrollToHash";
import { useTranslation } from 'react-i18next';
import { Mail, User, MessageSquare, Phone } from "lucide-react";
import sendContactForm from '@/services/contactApi';

const MAX_MESSAGE_LENGTH = 500;

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
  const [messageLength, setMessageLength] = useState(0);

  const onSubmit = async (data) => {
    const formDataWithSite = { ...data, namewebsite: "https://portfolio.fabwebprojects.fr" };

    try {
      const result = await sendContactForm(formDataWithSite);
      console.log("SUCCESS!", result);
      setConfirmationMessage(t('contact.form.successMessage'));
      setConfirmationMessageType("success");
      reset(); // Réinitialise le formulaire après envoi réussi
    } catch (err) {
      console.log("FAILED...", err);
      setConfirmationMessage(t('contact.form.errorMessage'));
      setConfirmationMessageType("error");
    }
  };

  // Fonction pour mettre à jour le compteur de caractères
  const handleInputChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= MAX_MESSAGE_LENGTH) {
      setMessageLength(inputText.length);
    }
  };

  useScrollToHash(100);

  return (
    <>
      <h2>{t('contact.form.title')}</h2>
      <button className="close-modal-button" onClick={closeModal}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="labelform">
              {t('contact.form.firstName')} :
            </label>
            <div className="input-icon-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                {...register("firstName", { required: true, minLength: 2 })}
                placeholder={t('contact.form.placeholderfirstname')}
                required
              />
            </div>
            {errors.firstName && <p className="error-message">{t('contact.form.errorfirstname')}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="labelform">
              {t('contact.form.lastName')} :
            </label>
            <div className="input-icon-wrapper">
              <User className="input-icon" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                {...register("lastName", { required: true, minLength: 2 })}
                placeholder={t('contact.form.placeholderlastname')}
                required
              />
            </div>
            {errors.lastName && <p className="error-message">{t('contact.form.errorlastname')}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email" className="labelform">
              {t('contact.form.email')} :
            </label>
            <div className="input-icon-wrapper">
              <Mail className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                placeholder={t('contact.form.placeholderemail')}
                required
              />
            </div>
            {errors.email && <p className="error-message">{t('contact.form.erroremail')}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="labelform">
              {t('contact.form.phone')} :
            </label>
            <div className="input-icon-wrapper">
              <Phone className="input-icon" />
              <input
                type="tel"
                id="phone"
                name="phone"
                {...register("phone", { required: true, minLength: 10 })}
                placeholder={t('contact.form.placeholderphone')}
                required
              />
            </div>
            {errors.phone && <p className="error-message">{t('contact.form.errorphone')}</p>}
          </div>
        </div>

        <div className="form-row form-group-full">
          <div className="form-group">
            <label htmlFor="subject" className="labelform">
              {t('contact.form.subject')} :
            </label>
            <div className="input-icon-wrapper">
              <MessageSquare className="input-icon" />
              <input
                type="text"
                id="subject"
                name="subject"
                {...register("subject", { required: true, minLength: 2 })}
                placeholder={t('contact.form.placeholdersubject')}
                required
              />
            </div>
            {errors.subject && <p className="error-message">{t('contact.form.errorsubject')}</p>}
          </div>
        </div>

        <div className="form-row form-group-full">
          <div className="form-group">
            <label htmlFor="message" className="labelform">
              {t('contact.form.message')} :
            </label>
            <textarea
              id="message"
              name="message"
              {...register("message", {
                required: true,
                minLength: 10,
                maxLength: MAX_MESSAGE_LENGTH,
              })}
              placeholder={t('contact.form.placeholdermessage')}
              onChange={handleInputChange} // Appel de la fonction pour mettre à jour le compteur
              required
            />
            {errors.message && <p className="error-message">{t('contact.form.errormessage')}</p>}
            <p className="character-count">
              {messageLength}/{MAX_MESSAGE_LENGTH} caractères
            </p>
          </div>
        </div>

        <div className="consent-section">
          <div className="consent-row">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              {...register("consent", { required: true })}
              className="styled-checkbox"
            />
            <label htmlFor="consent" className="consent-label">
              {t('contact.form.consent')}
            </label>
          </div>
          {errors.consent && <p className="consent-error">{t('contact.form.errorconsent')}</p>}
        </div>

        <div className="submit-button-wrapper">
          <button type="submit" className="submit-button">
            {t('contact.form.send')}
          </button>
        </div>
      </form>
      {confirmationMessage && (
        <p className={`confirmation-message ${confirmationMessageType}`}>
          {confirmationMessage}
        </p>
      )}
    </>
  );
};

Contact.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Contact;
