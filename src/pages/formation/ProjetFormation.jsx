import { useState } from "react";
import Social from "../../components/Social";
import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoApi, LogoNode, LogoRedux, ProjetF2, ProjetF3, ProjetF4, ProjetF5, ProjetF6, ProjetF8,ProjetF9, ProjetF11 } from "../../assets/images";
import ProjectModal from "./ProjectModal";
const ProjetFormation = () => {
  const [projects] = useState([
    {
      id: 2,
      name: "Projet 2 - Riding Cities",
      theme: "Premiers pas sur le langage HTML",
      brief: "Ce projet a pour but de faire découvrir le langage HTML.",
      mission:
        "Vous rejoignez l’agence Webonzaï pour un stage en tant que développeur junior. Romain, votre maître de stage et CTO, est en déplacement professionnel la semaine de votre arrivée. Pour vous permettre d’avancer sans lui, il vous confie par e-mail votre première mission : mettre à jour la page Internet de Riding Cities, une association sportive qui promeut le skate en région.",
      languages: [{ name: "HTML", logo: LogoHTML }],
      url: "https://fabwebprojects.fr/Riding_Cities/index.html",
      imgcard: ProjetF2,
      img: ProjetF2,
    },
    {
      id: 3,
      name: "Projet 3 - Booki",
      theme: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS ",
      brief: "Ce projet a pour but de développer les compétences sur le HTML et de découvrir le CSS avec l'utilisation de flexbox et le Responsive.",
      mission:
        "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS.",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
      ],
      url: "https://fabwebprojects.fr/Booki/index.html",
      imgcard: ProjetF3,
      img: ProjetF3,
    },
    {
      id: 4,
      name: "Projet 4 - OhMyFood",
      theme: "Améliorez l'interface d'un site mobile avec des animations CSS ",
      brief: "Ce projet a pour but de développer les compétences sur le HTML, le CSS, d'apprendre à utiliser le SASS, apprendre les animations en CSS.",
      mission:
        "Votre tâche consiste à développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "NODE", logo: LogoNode },
      ],
      url: "https://fabwebprojects.fr/OhMyFood/index.html",
      imgcard: ProjetF4,
      img: ProjetF4,
    },
    {
      id: 5,
      name: "Projet 5 - Print It",
      theme: "Premiers pas sur le langage JavaScript",
      brief: "Ce projet a pour but de vous faire découvrir le langage JavaScript en mettant en place notre premier carroussel.",
      mission: "Votre tâche consiste à rendre un site statique dynamique avec la mise en place d'un carroussel",
      languages: [{ name: "JS", logo: LogoJS }],
      url: "https://fabwebprojects.fr/Print_It/index.html",
      imgcard: ProjetF5,
      img: ProjetF5,
    },
    {
      id: 6,
      name: "Projet 6 - Portfolio Architecte - Sophie Bluel",
      theme: "Créez une page web dynamique avec JavaScript ",
      brief: "Ce projet a pour but de réaliser le portfolio d'un architecte en le rendant dynamique avec une API Rest.",
      mission:
        "Votre tâche consiste à rendre dynamique le portfolio d'un architecte en le reliant à une API, permettant une connexion à une interface admin, la gestion des travaux (Ajout-Suppression) à travers un modal. ",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "NODE", logo: LogoNode },
        { name: "JS", logo: LogoJS },
        { name: "API", logo: LogoApi },
      ],
      url: "https://fabwebprojects.fr/Sophie-bluel/index.html",
      imgcard: ProjetF6,
      img: ProjetF6,
    },
    {
      id: 8,
      name: "Projet 8 - Kasa",
      theme: "Créez une application web de location immobilière avec React ",
      brief: "Ce projet a pour but de créer notre premier application en react.",
      mission: "Votre tâche consiste à faire une refonte totale de l'application web actuelle en la passant en stack complète JavaScript avec NodeJS coté back-end et React coté Front-end.",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "NODE", logo: LogoNode },
        { name: "JS", logo: LogoJS },
        { name: "REACT", logo: LogoReact },
        { name: "VITE.JS", logo: LogoVite },
      ],
      url: "https://fabwebprojects.fr/Kasa",
      imgcard: ProjetF8,
      img: ProjetF8,
    },    
    {
      id: 9,
      name: "Projet 9 - Nina Carducci",
      theme: "Optimisez le référencement d'un site de photographe ",
      brief: "Ce projet a pour but d'optimiser le référencement d'un site",
      mission: "Votre tâche consiste à faire ...",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
      ],
      url: "https://fabwebprojects.fr/NinaCarducci/",
      imgcard: ProjetF9,
      img: ProjetF9,
    },
    {
      id: 11,
      name: "Projet 11 - ArgentBank",
      theme: "Implémentez le front-end d'une application bancaire avec React + Redux",
      brief: "Mise en place d'un dahsboard et restriction d'accès avec une authentification utilisateur",
      mission: "Votre tâche consiste à créer le dashboard de l'application bancaire en utilisatn React + Redux.",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "SASS", logo: LogoSass },
        { name: "NODE", logo: LogoNode },
        { name: "JS", logo: LogoJS },
        { name: "REACT", logo: LogoReact },
        { name: "VITE.JS", logo: LogoVite },
        { name: "REDUX", logo: LogoRedux },
        { name: "API", logo: LogoApi },
      ],
      url: "https://fabwebprojects.fr/ArgentBank/",
      imgcard: ProjetF11,
      img: ProjetF11,
    },
    // Ajoutez d'autres projets ici
  ]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterLang, setFilterLang] = useState("Tous");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' ou 'desc'

  // Fonction de filtrage par langage
  const filterByLanguage = (language) => {
    setFilterLang(language);
    if (language === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.languages.some((lang) => lang.name === language)));
    }
  };

  // Fonction de tri par ID
  const sortByID = () => {
    const sortedProjects = [...filteredProjects].sort((a, b) => {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    });
    setFilteredProjects(sortedProjects);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Récupérez tous les langages uniques pour les boutons de filtrage
  const allLanguages = ["Tous", ...new Set(projects.flatMap((project) => project.languages.map((lang) => lang.name)))];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Pour ouvrir un modal
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Pour fermer un modal
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="projet-formation-container">
        <h1>Mes Projets réalisés en Formation OpenClassroom</h1>
        <div className="filter-buttons">
          {allLanguages.map((language) => (
            <button key={language} onClick={() => filterByLanguage(language)} className={filterLang === language ? "active" : ""}>
              {language}
            </button>
          ))}
          <button onClick={sortByID} className="sort-button">
            Tri par ID {sortOrder === "asc" ? "↑" : "↓"}
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.imgcard} alt={`Aperçu de ${project.name}`} className="project-image" />
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.name}</h2>
                <p className="project-brief">{project.brief}</p>
                <div className="project-languages">
                  {project.languages.map((lang) => (
                    <img key={lang.name} src={lang.logo} alt={lang.name} className="language-logo" />
                  ))}
                </div>
                <div className="project-view">
                  <button onClick={() => openModal(project)} className="project-view-button">
                    Voir Plus
                  </button>
                </div>
              </div>
            </div>
          ))}
          {isModalOpen && <ProjectModal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />}
        </div>
      </div>
      <Social />
    </div>
  );
};

export default ProjetFormation;
