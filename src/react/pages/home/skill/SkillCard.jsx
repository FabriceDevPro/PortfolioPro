// SkillCard.js
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SkillCard = ({ skill, isSelected, onSkillSelect, projectCount, formationCount }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  // La fonction qui sera appelée lorsque l'utilisateur cliquera sur la carte
  const handleClick = () => {    
    onSkillSelect(skill.name);
    // Naviguer vers la page et ensuite faire défiler jusqu'à l'id `#projects`.
    navigate('/#projects');

    // Faire défiler la vue pour que l'élément avec l'id `projects` soit au sommet de la fenêtre.
    // Ceci est nécessaire pour gérer le défilement si la navigation n'entraîne pas de rafraîchissement de la page.
    window.scrollTo({
      top: document.querySelector('#projects').offsetTop,
      behavior: 'smooth',
    });
  };

  // Créez un objet pour conditionnellement ajouter l'attribut data-tooltip
  const tooltipProps = (projectCount !== undefined && formationCount !== undefined) ? 
    { 'data-tooltip': t('skills.Card.projectTooltip', { projectCount, formationCount }) } : {};
  return (
    <div
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...tooltipProps}
    >
      <div className="skill-card-content">
        <img src={skill.logo} alt={skill.name} className="skill-card__logo" />
        {isSelected && (
          <>
            <div className="skill-card__overlay"></div>
            <div className="badge">Filtrer</div>
          </>
        )}      
        
        {isHovered && (
          <>
            <div className="badge">Filtrer</div>
            <div className="skill-card__alt-text">Cliquez pour filtrer les projets ci-dessous</div>
            {/* <div className="skill-card__alt-text">Voir les projets avec {skill.altText}</div> */}
          </>  
        )}      
      </div>
    </div>
  );
};

// propTypes pour la validation des props
SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    altText: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSkillSelect: PropTypes.func.isRequired,
  projectCount: PropTypes.number, // Vous pouvez spécifier que projectCount et formationCount sont facultatifs
  formationCount: PropTypes.number,
};

export default SkillCard;