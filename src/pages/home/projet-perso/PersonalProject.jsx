import PropTypes from 'prop-types';
import PersonalProjectCard from './PersonalProjectCard'; // Assurez-vous d'ajuster le chemin d'importation

const PersonalProject = ({ title, projects  }) => {
  return (
    <>
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="personal-projects-collection">
        {projects.map((project) => (
          <PersonalProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

PersonalProject.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          titre: PropTypes.string.isRequired,
          nomimage: PropTypes.string.isRequired,
        })
      ).isRequired,
      fonctionnalites: PropTypes.arrayOf(PropTypes.string),
      detailsEcritures: PropTypes.arrayOf(PropTypes.string),
      demonstration: PropTypes.string,
      lienProjet: PropTypes.string,
    })
  ).isRequired,
};

export default PersonalProject;