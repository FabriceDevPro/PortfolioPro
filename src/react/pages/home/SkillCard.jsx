// SkillCard.js
import PropTypes from 'prop-types';

const SkillCard = ({ skill, isSelected, onSkillSelect }) => {
  // La fonction qui sera appelée lorsque l'utilisateur cliquera sur la carte
  const handleClick = () => {
    onSkillSelect(skill.name);
  };

  return (
    <div
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
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
};

export default SkillCard;
