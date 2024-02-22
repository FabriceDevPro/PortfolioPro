// ProjectList.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoRedux } from "../../../../assets/images-skills-formation";
import { LogoMySql,LogoPHP,LogoLaravel,LogoPhpmyadmin } from "../../../../assets/images-skills-perso";
import { viewp2,viewp3,viewp4, viewp5,viewp6,viewp8,viewp9,viewp11 } from "../../../../assets/images-projet-formation";
import { useSkills } from '../../../hooks/useSkills';

const ProjectList = ({ projects, title }) => {
  const { activeSkill } = useSkills();

  const getProjectImage = (id) => {
    switch (id) {
      case 2: return viewp2;
      case 3: return viewp3;
      case 4: return viewp4;
      case 5: return viewp5;
      case 6: return viewp6;
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
  const filteredProjects = activeSkill
    ? projects.filter((project) => project.languages.some(lang => lang.name === activeSkill))
    : projects;
    console.log("isModalOpen:", isModalOpen);
    console.log("projects:", projects);
    return (
    <>
    <h2 className="section-title">{title}</h2>
    <div className="projects-grid">
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
