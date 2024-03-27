import PropTypes from "prop-types";
import Modal from "react-modal";
import { useTranslation } from 'react-i18next';

const ImagePreviewModal = ({ isOpen, onClose, imageSrc, altText, documentUrl }) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Preview"
      ariaHideApp={false}
      className="modal-preview" // Appliquez ou ajustez votre classe CSS pour le style du modal
      overlayClassName="custom-overlay" // Classe CSS pour l'arrière-plan du modal
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={imageSrc} alt={altText} className="modal-image" />
        {/* Ajouter la phrase et le lien en bas */}
        <div className="modal-footer">
          <p>{t('certifications.comment')}</p>
          {documentUrl && (
            <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="certification-link">{t('certifications.titlecomment')}</a>
          )}
        </div>
      </div>
    </Modal>
  );
};

// Prop types
ImagePreviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  documentUrl: PropTypes.string.isRequired,
};

export default ImagePreviewModal;
