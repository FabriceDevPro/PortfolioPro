import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const Context = ({ context }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="description-section__card">
                <h2 className="section-title">{t('projects.personal.contextTitle')}</h2>
                <div>{t(`projectpersonal:${context}`)}</div>
            </div>
        </>
    );
};

Context.propTypes = {
    context: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default Context;