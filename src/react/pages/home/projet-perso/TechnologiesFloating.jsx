import { useState } from 'react';
import PropTypes from 'prop-types';
import imagesSkillsFormation from "@/assets/images-skills-formation";
import imagesSkillsPerso from "@/assets/images-skills-perso";
const imagesSkills = { ...imagesSkillsFormation, ...imagesSkillsPerso };
const TechnologiesFloating = ({ technologies }) => {
  // Supprimez l'état de hoverEffect car nous allons l'appliquer individuellement par technologie.
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseMove = (index) => {
    // Appelez cette fonction lorsque la souris est sur l'élément
    setHoveredId(index);
  };

  const handleMouseLeave = () => {
    // Réinitialisez l'état lorsque la souris quitte l'élément
    setHoveredId(null);
  };

  return (
    <div className="technologies-container">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="technology"
          onMouseEnter={() => handleMouseMove(index)} // Utilisez onMouseEnter au lieu de onMouseMove
          onMouseLeave={handleMouseLeave}
          style={{
            // Appliquez l'effet de survol uniquement à l'élément survolé
            transform: hoveredId === index ? 'scale(1.1)' : 'scale(1.0)',
            transition: 'transform 0.3s ease', // Assurez-vous d'avoir une transition lisse
          }}
        >
          <img src={imagesSkills[`${tech.name.toLowerCase()}.webp`]} alt={tech.name} className="languages-card__logo" />
        </div>
      ))}
    </div>
  );
};

TechnologiesFloating.propTypes = {
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TechnologiesFloating;