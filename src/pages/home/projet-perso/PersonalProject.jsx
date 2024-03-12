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
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    long_description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      nomimage: PropTypes.string.isRequired,
    })).isRequired,
    fonctionnalites: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    detailsEcritures: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
    demonstration: PropTypes.string.isRequired,
    lienProjet: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      lien: PropTypes.string.isRequired,
    })),
    lienGitHub: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      estPublic: PropTypes.bool,
      lien: PropTypes.string,
    })),
  })).isRequired,
};

export default PersonalProject;