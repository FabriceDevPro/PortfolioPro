import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const Description = ({ project, description }) => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className="description-section__title-container">
                <h1 className="description-section__section-title">{t(`projectpersonal:${project}`)}</h1>
            </div>
             
            <div className="description-section__card">
                <h2 className="section-title">{t('projects.personal.descriptionTitle')}</h2>
                <div>{(t(`projectpersonal:${description}`))}</div>
            </div>
        </>
    );
};

Description.propTypes = {
    project: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object // Si `project` est un objet, ajustez selon votre structure de données.
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default Description;