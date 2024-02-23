// ProjectList.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoRedux } from "../../../../assets/images-skills-formation";
import { LogoMySql,LogoPHP,LogoLaravel,LogoPhpmyadmin } from "../../../../assets/images-skills-perso";
import { viewp2,viewp3,viewp4, viewp5,viewp6,viewp8,viewp9,viewp11 } from "../../../../assets/images-projet-formation";
import { useSkills } from '../../../hooks/useSkills';
import { TbArrowsDownUp } from "react-icons/tb";

const ProjectList = ({ projects, title }) => {
  const { activeSkill } = useSkills();
  const [isAscOrder, setIsAscOrder] = useState(true);

  // Fonction pour inverser l'ordre de tri
  const toggleOrder = () => {
    setIsAscOrder(!isAscOrder);
  };

  const getProjectImage = (id) => {
    switch (id) {
      case 2: return viewp2;
      case 3: return viewp3;
      case 4: return viewp4;
      case 5: return viewp5;
      case 6: return viewp6;
      case 7: return viewp6;
      case 8: return viewp8;
      case 9: return viewp9;
      case 11: return viewp11;
      default: return null;
    }
  };
  const getLanguageLogo = (languageName) => {
    switch (languageName) {
      case 'HTML': return LogoHTML;
      case 'CSS': return LogoCss;
      case 'SASS': return LogoSass;
      case 'JS': return LogoJS;
      case 'REACT': return LogoReact;
      case 'VITE.JS': return LogoVite;
      case 'API': return LogoApi;
      case 'REDUX': return LogoRedux;
      case 'MYSQL': return LogoMySql;
      case 'PHP': return LogoPHP;
      case 'LARAVEL': return LogoLaravel;
      case 'PHPMYADMIN': return LogoPhpmyadmin;
      default: return null;
    }
  };
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject({
      ...project,
      img: getProjectImage(project.id), // Assurez-vous d'ajouter cette ligne
      imgcard: getProjectImage(project.id),
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

// Définissez une fonction de tri pour les projets
const sortProjects = (projects, ascending) => {
  const sortedProjects = [...projects]; // Créez une copie des projets pour ne pas modifier l'original
  sortedProjects.sort((a, b) => {
    // Comparez les ids des projets pour trier en fonction de l'ordre croissant ou décroissant
    return ascending ? a.id - b.id : b.id - a.id;
  });
  return sortedProjects;
};

// Utilisez la fonction de tri dans filteredProjects
const filteredProjects = activeSkill
  ? sortProjects(
      projects.filter((project) => project.languages.some(lang => lang.name === activeSkill)),
      isAscOrder
    )
  : sortProjects(projects, isAscOrder);
  
    return (
    <>
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
        {/* Boutons pour le tri */}
        <div className="sort-buttons">
          <button
            className="icon-button"
            onClick={toggleOrder}
            title={isAscOrder ? 'Tri croissant' : 'Tri décroissant'}
          >
            <TbArrowsDownUp title={isAscOrder ? 'Tri croissant' : 'Tri décroissant'}/>
          </button>
        </div>
      </div>
      {/* La grille de projets */}
      <div className="projects-grid">
        {/* Affichage des cartes de projet filtrées */}
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={{
              ...project,
              imgcard: getProjectImage(project.id),
              languages: project.languages.map(lang => ({
                ...lang,
                logo: getLanguageLogo(lang.name)
              }))
            }}
            onOpenModal={openModal}
          />
        ))}
      </div>
      {/* Modal pour afficher les détails du projet sélectionné */}
      {isModalOpen && <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgcard: PropTypes.string,
      name: PropTypes.string.isRequired,
      brief: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectList;
