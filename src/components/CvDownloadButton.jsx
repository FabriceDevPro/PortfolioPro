import { FaRegFilePdf } from "react-icons/fa";
import { basename } from '../config';

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

  return (
    <div className="cv-download">
      <button className="project-view-button" onClick={handleDownload}>
        <FaRegFilePdf className="icon button-icon" />
        Télécharger mon CV
      </button>
    </div>
  );
};

export default CvDownloadButton;
