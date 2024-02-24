// FormationProject.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import FormationProjectCard from './FormationProjectCard';
import FormationProjectModal from './FormationProjectModal';
import imagesSkillsFormation from "../../../assets/images-skills-formation";
import imagesProjetFormation from "../../../assets/images-projet-formation";
import { useSkills } from '../../../hooks/useSkills';
import { TbArrowsDownUp } from "react-icons/tb";

const FormationProject = ({ projects, title }) => {
  const { activeSkill } = useSkills();
  const [isAscOrder, setIsAscOrder] = useState(true);

  const toggleOrder = () => {
    setIsAscOrder(!isAscOrder);
  };

  const getProjectImage = (imageName) => imagesProjetFormation[imageName] || null;

  const getLanguageLogo = (languageName) => {
    const logoKey = `${languageName.toLowerCase()}.png`;
    const logo = imagesSkillsFormation[logoKey];
    return logo || null;
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject({
      ...project,
      img: getProjectImage(project.img), // Ajustez cette ligne si nécessaire
      languages: project.languages.map(lang => ({
        ...lang,
        logo: getLanguageLogo(lang.name)
      }))
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  const sortProjects = (projects, ascending) => projects.sort((a, b) => ascending ? a.id - b.id : b.id - a.id);

  const filteredProjects = activeSkill
    ? projects.filter((project) => project.languages.some(lang => lang.name === activeSkill))
    : projects;

  const sortedProjects = sortProjects([...filteredProjects], isAscOrder);

  return (
    <>
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
        <div className="sort-buttons">
          <button className="icon-button" onClick={toggleOrder} title={isAscOrder ? 'Tri croissant' : 'Tri décroissant'}>
            <TbArrowsDownUp />
          </button>
        </div>
      </div>
      <div className="formation-projects-collection">
        {sortedProjects.map((project) => (
          <FormationProjectCard
            key={project.id}
            project={{
              ...project,
              imgcard: getProjectImage(project.img), // Notez l'utilisation de img pour obtenir l'image du projet
              languages: project.languages.map(lang => ({
                ...lang,
                logo: getLanguageLogo(lang.name)
              }))
            }}
            onOpenModal={() => openModal(project)}
          />
        ))}
      </div>
      {isModalOpen && <FormationProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  );
};

FormationProject.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          logo: PropTypes.string, // Optionnel, peut être ajouté si vous stockez les chemins des logos dans les projets
        })
      ).isRequired,
      img: PropTypes.string, // img représente le nom de l'image dans votre objet imagesProjetFormation
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default FormationProject;
