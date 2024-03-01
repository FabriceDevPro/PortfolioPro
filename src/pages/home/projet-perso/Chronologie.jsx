import PropTypes from 'prop-types';

const Chronologie = ({ chronologie }) => {
    return (
      <>
        <h2 className="section-title">Chronologie du projet</h2>
        <div className="timeline">
          {chronologie.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-content">
                {index % 2 === 0 ? ( // Si la carte est à gauche
                  <>
                    <div className="date-right">{item.title}</div>
                    <h2>{item.cardTitle}</h2>
                  </>
                ) : ( // Si la carte est à droite
                  <>
                    <h2>{item.cardTitle}</h2>
                    <div className="date-left">{item.title}</div>
                  </>
                )}
                <p>{item.cardSubtitle}</p>
                {item.languages.map((lang, langIndex) => (
                  <span key={langIndex} className="language">{lang.name}</span>
                ))}
                {item.images.map((img, imgIndex) => (
                  <img key={imgIndex} src={img.nomimage} alt={img.titre} />
                ))}
                <span className="arrow"></span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  

Chronologie.propTypes = {
  chronologie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardSubtitle: PropTypes.string.isRequired,
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
