import ReactToPrint from 'react-to-print';
import PropTypes from 'prop-types';
import { BsPrinter } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const CVPrintButton = ({ contentRef }) => {
    const { i18n } = useTranslation();

    return (
        <div className="cv-download">
            <ReactToPrint
                trigger={() => 
                    <button className="project-view-button">
                        <BsPrinter className="icon button-icon" />
                        {i18n.t('cv.PrintButton')}
                    </button>}
                content={() => contentRef.current}
            />
        </div>    
    );
};

// propTypes pour la validation des props
CVPrintButton.propTypes = {    
    contentRef: PropTypes.object.isRequired,
  };

export default CVPrintButton;