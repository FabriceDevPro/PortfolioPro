// About.js
import { ProfilImage } from "../../assets/images";
import LogoPHP from "../../assets/img/skills-perso/php.webp";
import LogoReact from "../../assets/img/skills-formation/react.webp";

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
        <p>
          {`Bonjour, je suis Fabrice MAGNAN de BELLEVUE. Avec 15 ans d'expérience en informatique, ma reconversion professionnelle en Intégrateur Web via OpenClassrooms a consolidé ma passion pour le développement.`}
        </p>
        
        <p>
          {`Autodidacte, j'ai acquis des compétences en `}<strong>Front-end et Back-end</strong>, {`développé une application de gestion comptable et géré un serveur NAS pour l'hébergement web.`}
        </p>
        
        <p>
          {`Le projet spécifique que j'ai réalisé pour mon dernier employeur, un éditeur de logiciels pour le secteur de l'immobilier, était un questionnaire en ligne en `}<strong>PHP/JS</strong> {`, aujourd'hui utilisé par ses clients.`}
        </p>
        
        <p>
          {`Cette réalisation souligne ma capacité à créer des solutions web efficaces et adaptées aux besoins spécifiques des secteurs.`}
        </p>
      </div>
    </div>
  </>
);

export default About;