// About.js
import { ProfilImage } from "../../assets/images";
import LogoPHP from "../../assets/img/skills-perso/php.webp";
import LogoReact from "../../assets/img/skills-formation/react.webp";
import { FaCode } from 'react-icons/fa';

const About = () => (
  <>
    <div className="about-section__header">
      <h1 className="about-section__title">Développeur Web Full Stack</h1>
      <div className="about-section__logos">
        <div className="about-section__logo-card">
          <img src={LogoReact} alt="React Logo" className="about-section__card__logo"/>
        </div>
        <div className="about-section__logo-card">
          <img src={LogoPHP} alt="PHP Logo" className="about-section__card__logo"/>
        </div>
      </div>
    </div>
    <div className="about-section__content">
      <img src={ProfilImage} alt="Fabrice MAGNAN de BELLEVUE" className="about-section__photo" />
      <div className="about-section__description">
        <p><strong>Fabrice MAGNAN de BELLEVUE</strong></p>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>Expérience Professionnelle :</strong> {`Plus de 15 ans dans l'informatique, avec une spécialisation récente en développement web suite à une reconversion professionnelle via OpenClassrooms.`}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>Compétences :</strong> {`Expertise en `}<strong>{`Front-end et Back-end`}</strong>{`, avec un parcours autodidacte complété par une formation certifiante.`}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>Projets Personnels :</strong> {`Développement d'une application de gestion comptable et gestion d'un serveur NAS pour l'hébergement web, illustrant ma capacité à initier et à réaliser des projets complexes.`}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>Projets Marquants :</strong> {`Conception d'un questionnaire en ligne en `}<strong>{`PHP/JS`}</strong> {`pour un éditeur de logiciels immobiliers, aujourd'hui largement utilisé par ses clients, démontrant ma capacité à développer des solutions web sur-mesure.`}</span>
          </div>
            <div className="about-section__item">
              <FaCode className="about-section__icon" />
              <span><strong>Passion :</strong> {`Une passion renforcée pour le développement web, illustrée par mon engagement constant dans l'apprentissage et l'application pratique des compétences techniques.`}</span>
          </div>
      </div>
    </div>
  </>
);

export default About;