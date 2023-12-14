import Social from "../../components/Social";
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi } from "../../assets/images";

const ProjetFormation = () => {
  const projects = [
    {
      name: "Riding Cities",
      theme: "Premiers pas sur le langage HTML",
      brief: "Ce projet a pour but de faire découvrir le langage HTML.",
      mission:
        "Vous rejoignez l’agence Webonzaï pour un stage en tant que développeur junior. Romain, votre maître de stage et CTO, est en déplacement professionnel la semaine de votre arrivée. Pour vous permettre d’avancer sans lui, il vous confie par e-mail votre première mission : mettre à jour la page Internet de Riding Cities, une association sportive qui promeut le skate en région.",
      languages: [{ name: "HTML", logo: LogoHTML }],
      url: "https://fabwebprojects.fr/Riding_Cities/index.html",
    },
    {
      name: "Booki",
      theme: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS ",
      brief: "Ce projet a pour but de développer les compétences sur le HTML et de découvrir le CSS avec l'utilisation de flexbox et le Responsive.",
      mission:
        "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS.",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
      ],
      url: "https://fabwebprojects.fr/Booki/index.html",
    },
    {
      name: "OhMyFood",
      theme: "Améliorez l'interface d'un site mobile avec des animations CSS ",
      brief: "Ce projet a pour but de développer les compétences sur le HTML, le CSS, d'apprendre à utiliser le SASS, apprendre les animations en CSS.",
      mission:
        "Votre tâche consiste à développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
      ],
      url: "https://fabwebprojects.fr/OhMyFood/index.html",
    },
    {
      name: "Print It",
      theme: "Premiers pas sur le langage JavaScript",
      brief: "Ce projet a pour but de vous faire découvrir le langage JavaScript en mettant en place notre premier carroussel.",
      mission: "Votre tâche consiste à rendre un site statique dynamique avec la mise en place d'un carroussel",
      languages: [{ name: "JS", logo: LogoJS }],
      url: "https://fabwebprojects.fr/Print_It/index.html",
    },
    {
      name: "Portfolio Architecte - Sophie Bluel",
      theme: "Créez une page web dynamique avec JavaScript ",
      brief: "Ce projet a pour but de réaliser le portfolio d'un architecte en le rendant dynamique avec une API Rest.",
      mission:
        "Votre tâche consiste à rendre dynamique le portfolio d'un architecte en le reliant à une API, permettant une connexion à une interface admin, la gestion des travaux (Ajout-Suppression) à travers un modal. ",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "JS", logo: LogoJS },
        { name: "API", logo: LogoApi },
      ],
      url: "https://fabwebprojects.fr/Sophie-bluel/index.html",
    },
    {
      name: "Kasa",
      theme: "Créez une application web de location immobilière avec React ",
      brief: "Ce projet a pour but de créer notre premier application en react.",
      mission: "Votre tâche consiste à faire une refonte totale de l'application web actuelle en la passant en stack complète JavaScript avec NodeJS coté back-end et React coté Front-end.",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "JS", logo: LogoJS },
        { name: "REACT", logo: LogoReact },
        { name: "VITE.JS", logo: LogoVite },
      ],
      url: "https://fabwebprojects.fr/Kasa",
    },
    // Ajoutez d'autres projets ici
  ];
  return (
    <div className="Container">
      <section className="Projet-Formation">
        <h1>Mes Projets réalisés en Formation OpenClassroom</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <div className="project-theme">
              <h3 className="project-title">
                Projet {index + 1} : {project.name}
              </h3>
              <p className="project-subtitle">{project.theme}</p>
            </div>
            <p className="project-brief">{project.brief}</p>
            <p className="project-mission">
              <strong>Mission : </strong>
              {project.mission}
            </p>
            <h3 className="technologies-used">Technologies utilisées :</h3>
            <div className="project-languages">
              {project.languages.map((lang, langIndex) => (
                <img key={langIndex} src={lang.logo} alt={`${lang.name} Logo`} />
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="bouton-projet">
              Voir le projet
            </a>
          </div>
        ))}
      </section>
      <Social />
    </div>
  );
};

export default ProjetFormation;
