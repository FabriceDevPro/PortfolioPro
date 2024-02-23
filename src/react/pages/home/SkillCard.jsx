// SkillCard.js
import PropTypes from 'prop-types';

const SkillCard = ({ skill, isSelected, onSkillSelect, projectCount, formationCount }) => {
  // La fonction qui sera appelée lorsque l'utilisateur cliquera sur la carte
  const handleClick = () => {
    onSkillSelect(skill.name);
  };

  // Créez un objet pour conditionnellement ajouter l'attribut data-tooltip
  const tooltipProps = (projectCount !== undefined && formationCount !== undefined) ? 
    { 'data-tooltip': `Projets réalisés : ${projectCount} dont ${formationCount} en formation` } : {};

  return (
    <div
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      {...tooltipProps}
    >
      <img src={skill.logo} alt={skill.name} className="skill-logo" />
      {isSelected && <div className="skill-overlay"></div>}
    </div>
  );
};

// propTypes pour la validation des props
SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSkillSelect: PropTypes.func.isRequired,
  projectCount: PropTypes.number, // Vous pouvez spécifier que projectCount et formationCount sont facultatifs
  formationCount: PropTypes.number,
};

export default SkillCard;

