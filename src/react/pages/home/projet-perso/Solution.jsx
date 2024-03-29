import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importez useTranslation
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'; // Assuming you have this icon

const Solution = ({ solution }) => {
    const { t } = useTranslation();

    const renderSolution = (solutionsKeys) => {
        return (
            <ul>
                {solutionsKeys.map((solutionKey, index) => (
                    <li key={index}>
                        <IoMdCheckmarkCircleOutline className="bullet-icon" /> {t(`projectpersonal:${solutionKey}`)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
           <div className="description-section__card">
                <h2 className="section-title">{t('projects.personal.solutionTitle')}</h2>
                <div>{renderSolution(solution)}</div>
            </div>
        </>
    );
};

Solution.propTypes = {
    solution: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default Solution;