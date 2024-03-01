import PropTypes from 'prop-types';

const Description = ({ project,description }) => {

    return (
        <>
            <div className="description-section__title-container">
                <h1 className="description-section__section-title">{project}</h1>
            </div>
            <div className="description-section__card">
                <h3>Description</h3>
                <p>{description}</p>
            </div>
        </>
    );
};

Description.propTypes = {
    project: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Description;