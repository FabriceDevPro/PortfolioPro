import PropTypes from 'prop-types';
import React from 'react';

const Description = ({ project,description }) => {
        // Divise la description par '\n' et utilise 'map' pour créer des paragraphes ou des éléments avec des sauts de ligne        
        const descriptionWithLineBreaks = description.split('\n').map((line, index, array) => (
            // Utilise un fragment pour éviter les erreurs de clé et vérifie si c'est la dernière ligne pour éviter un <br /> supplémentaire
            <React.Fragment key={index}>
                {line}
                {index !== array.length - 1 && <br />}
            </React.Fragment>
        ));
    return (
        <>
            <div className="description-section__title-container">
                <h1 className="description-section__section-title">{project}</h1>
            </div>
            <div className="description-section__card">
                <h2 className="section-title">Description</h2>
                <p>{descriptionWithLineBreaks}</p>
            </div>
        </>
    );
};

Description.propTypes = {
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Description;