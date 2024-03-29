import { FaRegFilePdf } from "react-icons/fa";
import { basename } from '@config';
import { useTranslation } from 'react-i18next';

const CvDownloadButton = () => {
  const { i18n } = useTranslation(); // Utilisez i18n pour accéder à la langue actuelle

  const handleDownload = () => {
    // Récupérez le code de langue actuel
    const language = i18n.language;

    // Définissez le nom du fichier en fonction de la langue actuelle
    const filename = language === 'en' ? 'resume-Magnanfabrice.pdf' : 'cv-Magnanfabrice.pdf';

    // Créez le lien de téléchargement
    const link = document.createElement('a');
    link.href = `${basename}${filename}`;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-download">
      <button className="project-view-button" onClick={handleDownload}>
        <FaRegFilePdf className="icon button-icon" />
        {i18n.t('cv.DownloadButton')} {/* Utilisez i18n.t pour accéder à la traduction */}
      </button>
    </div>
  );
};

export default CvDownloadButton;