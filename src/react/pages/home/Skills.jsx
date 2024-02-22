// Skills.js
import { useState } from 'react';
import SkillCard from './SkillCard'; // Assurez-vous que le chemin vers SkillCard.js est correct
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoRedux } from "../../../assets/images-skills-formation";
import { LogoMySql, LogoPHP, LogoLaravel, LogoPhpmyadmin } from "../../../assets/images-skills-perso";
import useScrollToHash from "../../hooks/useScrollToHash";
import { useSkills } from '../../hooks/useSkills';

const Skills = () => {
  const { setActiveSkill } = useSkills();
  const [selectedSkill, setSelectedSkill] = useState(null);
  useScrollToHash(100);

  const frontendSkills = [
    { name: 'HTML', logo: LogoHTML },
    { name: 'CSS', logo: LogoCss },
    { name: 'SASS', logo: LogoSass },
    { name: 'JS', logo: LogoJS },
    { name: 'REACT', logo: LogoReact },
    { name: 'VITE.JS', logo: LogoVite },
    { name: 'REDUX', logo: LogoRedux },
  ];
  
  const backendSkills = [
    { name: 'API', logo: LogoApi },
    { name: 'PHP', logo: LogoPHP },
    { name: 'LARAVEL', logo: LogoLaravel },
  ];
  
  const databaseSkills = [
    { name: 'MySql', logo: LogoMySql },
    { name: 'Phpmyadmin', logo: LogoPhpmyadmin },
  ];
  
  const handleSkillSelect = (skillName) => {
    setActiveSkill(skillName);
    setSelectedSkill(skillName);
  };

  return (
    <>
      <h2 className="section-title" id="skills">Mes Compétences</h2>
      <div className="skill-container">        
        <div className="skills-group">
          <h3>Frontend</h3>
          <div className="skill-set">
            {frontendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onSkillSelect={handleSkillSelect}
              />
            ))}
          </div>
        </div>        
        <div className="skills-group">
          <h3>Backend</h3>
          <div className="skill-set">
            {backendSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onSkillSelect={handleSkillSelect}
              />
            ))}
          </div>
        </div>                
        <div className="skills-group">
          <h3>Base de données</h3>
          <div className="skill-set">
            {databaseSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                isSelected={selectedSkill === skill.name}
                onSkillSelect={handleSkillSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
