import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const Problem = ({ problem }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="description-section__card">
                <h2 className="section-title">{t('projects.personal.problemTitle')}</h2>
                <div>{(t(`projectpersonal:${problem}`))}</div>
            </div>
        </>
    );
};

Problem.propTypes = {
    problem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default Problem;