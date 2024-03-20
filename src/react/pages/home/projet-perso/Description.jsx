import PropTypes from 'prop-types';
import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'; // Assuming you have this icon

const Description = ({ project, description, title }) => {
    const renderDescription = (desc) => {
        if (Array.isArray(desc)) {
            return (
                <ul>
                    {desc.map((item, index) => (
                        <li key={index}>
                            <IoMdCheckmarkCircleOutline  className="bullet-icon" /> {item}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return desc.split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                    {line}
                    {index !== array.length - 1 && <br />}
                </React.Fragment>
            ));
        }
    };

    return (
        <>
            {project?.name && (
                <div className="description-section__title-container">
                    <h1 className="description-section__section-title">{project}</h1>
                </div>
             )}
            <div className="description-section__card">
                <h2 className="section-title">{title}</h2>
                <div>{renderDescription(description)}</div>
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
    title: PropTypes.string.isRequired
};

export default Description;