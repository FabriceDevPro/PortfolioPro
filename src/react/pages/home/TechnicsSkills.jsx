import { NASLogo, SynologyLogo, OvhLogo } from "../../../assets/images-skills-technics";

const TechnicsSkills = () => {
    return (
      <div className="technicsSkillsSection">
        <h2>Compétences Techniques</h2>
        <div className="technicsSkillsCard">
          <h3>Hébergement Autonome de Mon Portfolio</h3>
          <p>
            {`Pour l'hébergement de mon portfolio, j'ai choisi un serveur NAS Synology, largement apprécié pour sa robustesse et son accessibilité, propulsé par DiskStation Manager (DSM). DSM, un système d'exploitation basé sur Linux et spécifiquement conçu pour la gestion des NAS, offre une interface utilisateur graphique intuitive qui simplifie la configuration des serveurs, la gestion des fichiers et l'accès aux divers services NAS. Cette plateforme me permet d'installer et de gérer des paquets pour des fonctionnalités supplémentaires, telles que la gestion de base de données avec phpMyAdmin et l'hébergement web via WebStation, renforçant ainsi la flexibilité et l'efficacité de mon environnement d'hébergement.`}
          </p>
          <p>
            {`En choisissant OVH pour le domaine, un fournisseur réputé non seulement pour sa fiabilité mais aussi pour son origine française, j'ai souligné ma préférence pour des solutions d'hébergement locales de haute qualité. Cette décision s'aligne avec mon approche méticuleuse de la configuration du DNS pour pointer vers mon adresse IP publique, l'installation de certificats SSL pour renforcer la sécurité de mon domaine et des sous-domaines, et la mise en œuvre de règles de redirection et d'ouverture de ports pour garantir une accessibilité optimale et sécurisée.`}
          </p>
          <p>
            {`Cette infrastructure distincte pour l'hébergement, illustre mon engagement à maintenir une présence en ligne sécurisée et performante.`}
          </p>
          <div className="logosContainer">
            <img src={NASLogo} alt="NAS Synology" className="logoImage" />
            <img src={SynologyLogo} alt="Synology DSM" className="logoImage" />
            <img src={OvhLogo} alt="OVH" className="logoImage" />
          </div>
        </div>
      </div>
    );
};


export default TechnicsSkills;