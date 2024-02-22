// About.js

import { ProfilImage } from "../../../assets/images";

const About = () => (
  <>
    <h2 className="section-title">Développeur Web</h2>
    <div className="about-content">
      <img src={ProfilImage} alt="Fabrice MAGNAN de BELLEVUE" className="profile-photo" />
      <p className="About_Me">
        {`Bonjour, je suis Fabrice MAGNAN de BELLEVUE. Fort de 15 ans d’expérience dans le secteur informatique, englobant à la fois les services et l’édition de logiciels, j’ai parcouru un chemin diversifié allant de la hotline à la migration de données, jusqu'à me consacrer pleinement au développement web.`}

        <br /><br />

        {`En autodidacte passionné, j'ai enrichi mes compétences techniques par des projets personnels, dont la réalisation d'un portfolio hébergé sur mon serveur NAS.`}

        <br /><br />

        {`Spécialisé dans le développement de solutions web sur mesure, je combine ma maîtrise technique avec une forte compréhension des enjeux métiers pour concevoir des applications efficaces et innovantes. Mon objectif ? Transformer les idées en réalités digitales qui répondent précisément aux besoins des utilisateurs et des entreprises.`}

      </p>
    </div>
  </>
);

export default About;