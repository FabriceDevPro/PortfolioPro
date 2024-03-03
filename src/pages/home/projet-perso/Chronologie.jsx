import { useState } from 'react';
import PropTypes from 'prop-types';
import images_projet_perso from '../../../assets/images-projet-perso';
import imagesSkillsFormation from "../../../assets/images-skills-formation";
import imagesSkillsPerso from "../../../assets/images-skills-perso";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// Combinaison des deux ensembles d'images
const imagesSkills = { ...imagesSkillsFormation, ...imagesSkillsPerso };

const Chronologie = ({ chronologie }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [index]: !prevExpanded[index],
    }));
  };

  const compareVersions = (a, b) => {
    const versionA = a.version.match(/\d+/g).map(Number);
    const versionB = b.version.match(/\d+/g).map(Number);

    for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
      if ((versionA[i] || 0) > (versionB[i] || 0)) return -1;
      if ((versionA[i] || 0) < (versionB[i] || 0)) return 1;
    }
    return 0;
  };

  const sortedChronologie = [...chronologie].sort(compareVersions);

  return (
    <>
      <div className="section-title">Chronologie du projet</div>
      <div className="timeline-wrapper">
        <div className="timeline">
          {sortedChronologie.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 !== 0 ? 'inverse' : ''}`}>
              <div className="timeline-content card">
                {item.images.map((img, imgIndex) => (
                  <div className="image-wrapper" key={imgIndex}>
                    <img src={images_projet_perso[img.nomimage]} alt={img.titre || 'Image de la chronologie'} className="timeline-image" />
                  </div>
                ))}
                <div className="timeline-header">
                  <h3>{item.version} - {item.titre}</h3>
                </div>
                  <div className={`description ${expanded[index] ? 'expanded' : ''}`}>
                    <div className="description-title">
                      <h4>Description :</h4>
                    </div>
                    <div className='description-text'>                    
                      {item.description}
                    </div>
                    <div className="languages">
                      <div className="languages-title">
                        <h4>Langages utilisés à ce niveau du projet :</h4>
                      </div>
                      <div className="languages-container">
                        {item.languages.map((lang, langIndex) => (
                          <div key={langIndex} className="languages-card">
                            <img src={imagesSkills[`${lang.name.toLowerCase()}.webp`]} alt={lang.name} className="languages-card__logo" />
                            <div className="languages-card__alt-text">{lang.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                <span className="read-more" onClick={() => toggleExpand(index)}>
                  {expanded[index] ? 'Lire moins' : 'Lire plus'}
                  {expanded[index] ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div className="timeline-point"></div>
              <div className="timeline-date">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Chronologie.propTypes = {
  chronologie: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      titre: PropTypes.string.isRequired,
      nomimage: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default Chronologie;
