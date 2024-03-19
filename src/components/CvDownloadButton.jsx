import { FaRegFilePdf } from "react-icons/fa";
import { basename } from '../config';
import { useTranslation } from 'react-i18next';
const CvDownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${basename}cv-Magnanfabrice.pdf`;
    link.download = 'cv-Magnanfabrice.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const { t } = useTranslation();

  return (
    <div className="cv-download">
      <button className="project-view-button" onClick={handleDownload}>
        <FaRegFilePdf className="icon button-icon" />
        {t('cv.DownloadButton')}
      </button>
    </div>
  );
};

export default CvDownloadButton;
