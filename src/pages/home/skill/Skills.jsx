// Skills.js
import { useState, useEffect } from 'react';
import SkillCard from './SkillCard';
import imagesSkillsFormation from "../../../assets/images-skills-formation";
import imagesSkillsPerso from "../../../assets/images-skills-perso";
import useScrollToHash from "../../../hooks/useScrollToHash";
import { useSkills } from '../../../hooks/useSkills';
import { NavLink } from 'react-router-dom';
import { FaAward, FaFilter } from 'react-icons/fa';
import formationProjects from '../../../data/formationProjects';
import personalProjects from '../../../data/personalProjects';

const Skills = () => {
  const { setActiveSkill } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState(null);
  useScrollToHash(100);

  const [projectCounts, setProjectCounts] = useState({});

  useEffect(() => {
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
  }, []);

  const handleFilterReset = () => {
    setSelectedSkill(null);
    setActiveSkill(null);
  };

  const allSkills = [
    { name: 'HTML', altText: 'HTML', category: 'Frontend', source: 'formation' },
    { name: 'CSS', altText: 'CSS', category: 'Frontend', source: 'formation' },
    { name: 'SASS', altText: 'SASS', category: 'Frontend', source: 'formation' },
    { name: 'JS', altText: 'JavaScript', category: 'Frontend', source: 'formation' },
    { name: 'REACT', altText: 'React', category: 'Frontend', source: 'formation' },
    { name: 'VITE', altText: 'Vite.js', category: 'Frontend', source: 'formation' },
    { name: 'REDUX', altText: 'Redux', category: 'Frontend', source: 'formation' },
    { name: 'API', altText: 'API', category: 'Backend', source: 'formation' },
    { name: 'SWAGGER', altText: 'Swagger', category: 'Backend', source: 'formation' },
    { name: 'PHP', altText: 'PHP', category: 'Backend', source: 'perso' },
    { name: 'LARAVEL', altText: 'Laravel', category: 'Backend', source: 'perso' },
    { name: 'MySql', altText: 'MySQL', category: 'Base de Données', source: 'perso' },
    { name: 'Phpmyadmin', altText: 'phpMyAdmin', category: 'Base de Données', source: 'perso' },
    { name: 'KANBAN', altText: 'Kanban', category: 'Gestion de Projets', source: 'formation' },
    { name: 'AGILE', altText: 'Methode Agile', category: 'Gestion de Projets', source: 'formation' },
    { name: 'GIT', altText: 'Git', category: 'Versioning', source: 'formation' },
    { name: 'GITHUB', altText: 'GitHub', category: 'Versioning', source: 'formation' },
  ].map(skill => ({
    ...skill,
    logo: skill.source === 'formation' ? imagesSkillsFormation[`${skill.name.toLowerCase()}.png`] : imagesSkillsPerso[`${skill.name.toLowerCase()}.png`],
  }));

  const handleSkillSelect = (skillName) => {
    setActiveSkill(skillName);
    setSelectedSkill(skillName);
  };

  return (
    <>
      <h2 className="skills-section__section-title" id="skills">Mes Compétences</h2>
      <FaFilter className="skills-section__filter-reset" onClick={handleFilterReset} title="Réinitialiser le filtre"/>
      <div className="skills-section__skill-container">
        {['Frontend', 'Backend', 'Base de Données', 'Gestion de Projets', 'Versioning'].map(category => (
          <div key={category} className="skills-section__skills-group">
            <h3>{category}</h3>
            <div className="skills-section__skill-set">
              {allSkills.filter(skill => skill.category === category).map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                  isSelected={selectedSkill === skill.name}
                  onSkillSelect={() => handleSkillSelect(skill.name)}
                  projectCount={projectCounts[skill.name.toUpperCase()] ? projectCounts[skill.name.toUpperCase()].personal + projectCounts[skill.name.toUpperCase()].formation : 0}
                  formationCount={projectCounts[skill.name.toUpperCase()] ? projectCounts[skill.name.toUpperCase()].formation : 0}
                  hasTooltip={true}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-section__certifications-button">
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
