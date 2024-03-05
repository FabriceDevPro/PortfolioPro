import { useState } from 'react';
import imagesCertifFormation from '../../../assets/images-certif-formation';
import PropTypes from 'prop-types';
import ImagePreviewModal from './ImagePreviewModal'; // Assurez-vous que le chemin d'importation est correct

const CertificationCard = ({ certification }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="certification-card">
      <img
        src={imagesCertifFormation[certification.img]}
        alt={certification.name}
        className="certification-image"
        onClick={openModal}
      />
      <h3 className="certification-title">{certification.name}</h3>

      <ImagePreviewModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageSrc={imagesCertifFormation[certification.img]}
        altText={certification.name}
        documentUrl={certification.url}
      />
    </div>
  );
};

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default CertificationCard;
