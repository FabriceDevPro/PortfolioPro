import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importez useTranslation
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'; // Assuming you have this icon

const Results = ({ results }) => {
    const { t } = useTranslation();

    const renderResults = (resultsKeys) => {
        return (
            <ul>
                {resultsKeys.map((resultsKeys, index) => (
                    <li key={index}>
                        <IoMdCheckmarkCircleOutline className="bullet-icon" /> {t(`projectpersonal:${resultsKeys}`)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
           <div className="description-section__card">
                <h2 className="section-title">{t('projects.personal.resultsTitle')}</h2>
                <div>{renderResults(results)}</div>
            </div>
        </>
    );
};

Results.propTypes = {
    results: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default Results;