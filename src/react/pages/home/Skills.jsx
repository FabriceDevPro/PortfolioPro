// Skills.js
import { useState, useEffect } from 'react';
import SkillCard from './SkillCard'; // Assurez-vous que le chemin vers SkillCard.js est correct
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoSwagger,LogoRedux,LogoGit, LogoGitHub, LogoKanban, LogoAgile } from "../../../assets/images-skills-formation";
import { LogoMySql, LogoPHP, LogoLaravel, LogoPhpmyadmin } from "../../../assets/images-skills-perso";
import useScrollToHash from "../../hooks/useScrollToHash";
import { useSkills } from '../../hooks/useSkills';
import { NavLink } from 'react-router-dom';
import { FaAward, FaGraduationCap } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import formationProjects from '../../data/formationProjects';
import personalProjects from '../../data/personalProjects';

const Skills = () => {
  const { setActiveSkill } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState(null);
  useScrollToHash(100);

  // Utilisez un état pour stocker le compte des projets par compétence
  const [projectCounts, setProjectCounts] = useState({});

  // Utilisez useEffect pour calculer le nombre de projets par compétence au montage du composant
  useEffect(() => {
    // Vérifiez d'abord si les données personalProjects et formationProjects sont définies
    if (personalProjects && formationProjects) {
      const initialCounts = formationProjects.reduce((acc, project) => {
        project.languages.forEach(language => {
          const languageName = language.name.toUpperCase();
          if (!acc[languageName]) acc[languageName] = { formation: 0, personal: 0 };
          acc[languageName].formation += 1;
        });
        return acc;
      }, {});

      personalProjects.forEach(project => {
        project.languages.forEach(language => {
          const languageName = language.name.toUpperCase();
          if (!initialCounts[languageName]) initialCounts[languageName] = { formation: 0, personal: 0 };
          initialCounts[languageName].personal += 1;
        });
      });

      setProjectCounts(initialCounts);
    }
  }, []);

  const frontendSkills = [
    { name: 'HTML', logo: LogoHTML,altText: 'HTML' },
    { name: 'CSS', logo: LogoCss,altText: 'CSS' },
    { name: 'SASS', logo: LogoSass,altText: 'SASS' },
    { name: 'JS', logo: LogoJS,altText: 'JS' },
    { name: 'REACT', logo: LogoReact,altText: 'React' },
    { name: 'VITE.JS', logo: LogoVite,altText: 'VITE.JS' },
    { name: 'REDUX', logo: LogoRedux,altText: 'REDUX' },
  ];

  const backendSkills = [
    { name: 'API', logo: LogoApi,altText: 'Rest API' },
    { name: 'SWAGGER', logo:LogoSwagger,altText: 'SWAGGER'},
    { name: 'PHP', logo: LogoPHP,altText: 'PHP' },
    { name: 'LARAVEL', logo: LogoLaravel,altText: 'Framework LARAVEL' },
  ];

  const databaseSkills = [
    { name: 'MySql', logo: LogoMySql,altText: 'MySql' },
    { name: 'Phpmyadmin', logo: LogoPhpmyadmin,altText: 'Phpmyadmin' },
  ];

  const kanbanSkills = [
    { name: 'KANBAN', logo: LogoKanban,altText: 'Kanban' },
    { name: 'AGILE', logo: LogoAgile,altText: 'Methode Agile' },
  ];

  const gitSkills = [
    { name: 'GIT', logo: LogoGit,altText: 'GIT' },
    { name: 'GITHUB', logo: LogoGitHub,altText: 'GITHUB' },
  ];

  const handleSkillSelect = (skillName) => {
    setActiveSkill(skillName);
    setSelectedSkill(skillName);
  };

  // Fonction pour réinitialiser le filtre sélectionné
  const handleFilterReset = () => {
    setSelectedSkill(null); // Réinitialise le filtre
    setActiveSkill(null); // Si vous souhaitez également réinitialiser l'état global du skill actif
  };

  return (
    <>
      <h2 className="section-title" id="skills">Mes Compétences</h2>
      <div className="skill-container">
        <div className="skills-group">
          <h3>Frontend {selectedSkill && <FaFilter className="filter-icon" onClick={handleFilterReset} title="Supprimer le filtre"/>}</h3>
          <div className="skill-set">
            {frontendSkills.map((skill, index) => {
              const skillNameUpper = skill.name.toUpperCase();
              const projectCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation + projectCounts[skillNameUpper].personal : undefined;
              const formationCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation : undefined;

              // console.log('Skill Name:', skill.name);
              // console.log('Project Count:', projectCount);
              // console.log('Formation Count:', formationCount);

              return (
                <SkillCard
                  key={index}
                  skill={skill}
                  isSelected={selectedSkill === skill.name}
                  onSkillSelect={handleSkillSelect}
                  projectCount={projectCount}
                  formationCount={formationCount}
                  hasTooltip={true} // Ajoutez cette ligne pour définir hasTooltip sur true
                />
              );
            })}
          </div>
        </div>
        <div className="skills-group">
          <h3>Backend</h3>
          <div className="skill-set">
            {backendSkills.map((skill, index) => {
              const skillNameUpper = skill.name.toUpperCase();
              const projectCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation + projectCounts[skillNameUpper].personal : undefined;
              const formationCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation : undefined;

              // console.log('Skill Name:', skill.name);
              // console.log('Project Count:', projectCount);
              // console.log('Formation Count:', formationCount);

              return (
                <SkillCard
                  key={index}
                  skill={skill}
                  isSelected={selectedSkill === skill.name}
                  onSkillSelect={handleSkillSelect}
                  projectCount={projectCount}
                  formationCount={formationCount}
                  hasTooltip={true} // Ajoutez cette ligne pour définir hasTooltip sur true
                />
              );
            })}
          </div>
        </div>
        <div className="skills-group">
          <h3>Base de données</h3>
          <div className="skill-set">
            {databaseSkills.map((skill, index) => {
              const skillNameUpper = skill.name.toUpperCase();
              const projectCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation + projectCounts[skillNameUpper].personal : undefined;
              const formationCount = projectCounts[skillNameUpper] ? projectCounts[skillNameUpper].formation : undefined;

              // console.log('Skill Name:', skill.name);
              // console.log('Project Count:', projectCount);
              // console.log('Formation Count:', formationCount);

              return (
                <SkillCard
                  key={index}
                  skill={skill}
                  isSelected={selectedSkill === skill.name}
                  onSkillSelect={handleSkillSelect}
                  projectCount={projectCount}
                  formationCount={formationCount}
                  hasTooltip={true} // Ajoutez cette ligne pour définir hasTooltip sur true
                />
              );
            })}
          </div>
        </div>
        <div className="skills-group">
          <h3>Gestion de Projet</h3>
          <div className="skill-set">
            {kanbanSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onSkillSelect={handleSkillSelect}
                hasTooltip={false}
              />
            ))}
          </div>
        </div>
        <div className="skills-group">
          <h3>Versionning</h3>
          <div className="skill-set">
            {gitSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onSkillSelect={handleSkillSelect}
                hasTooltip={false}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='certifications-button'>
        <NavLink to="/certifications">
          <button className="project-view-button">
            <FaAward className="icon button-icon" />
            Voir mes certifications
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Skills;
