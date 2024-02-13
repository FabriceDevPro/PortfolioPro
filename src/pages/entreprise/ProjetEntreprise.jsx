import Social from "../../components/Social";
import { LogoHTML, LogoCss, LogoJS, LogoMySql, LogoPHP, LogoVba, LogoPhpmyadmin } from "../../assets/images";

const ProjetEntreprise = () => {
  const projects = [
    {
      name: "Questionnaire en Ligne",
      theme: "Mise en forme d'un questionnaire en ligne au format web",
      description:
        "Ma mission a consisté à créer une interface web utilisateur pour remplir un questionnaire métier et ainsi permette l'intégration en automatique dans une application interne utilisant la technologie vb.net",
      languages: [
        { name: "HTML", logo: LogoHTML },
        { name: "CSS", logo: LogoCss },
        { name: "JS", logo: LogoJS },
        { name: "PHP", logo: LogoPHP },
        { name: "MYSQL", logo: LogoMySql },
        { name: "LogoPhpmyadmin", logo: LogoPhpmyadmin },
      ],
      url: "https://portfolio.fabwebprojects.fr/Riding_Cities/index.html",
    },
    {
      name: "ComparAdis",
      theme: "Création d'un outil en VBA Excel pour automatiser des tâches de contrôles comptables",
      description:
        "Ma mission a consisté à créer une interface web utilisateur pour remplir un questionnaire métier et ainsi permette l'intégration en automatique dans une application interne utilisant la technologie vb.net",
      languages: [{ name: "VBA", logo: LogoVba, isLarge: true }],
      url: "https://portfolio.fabwebprojects.fr/Riding_Cities/index.html",
    },
  ];
  return (
    <div className="Container">
      <section className="project-enterprise-section">
        <h1>{"Mes Projets réalisés en Entreprise"}</h1>
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <h2 className="project-title">
              Projet {index + 1} : {project.name}
            </h2>
            <p className="project-theme">{project.theme}</p>
            <p className="project-description">{project.description}</p>
            <h3 className="technologies-used">Technologie(s) utilisée(s) :</h3>
            <div className="project-technologies">
              {project.languages.map((lang, langIndex) => (
                <img key={langIndex} src={lang.logo} alt={`${lang.name} Logo`} className={`technology-logo ${lang.isLarge ? "large-technology-logo" : ""}`} />
              ))}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-view-button">
              Voir le projet
            </a>
          </div>
        ))}
      </section>
      <Social />
    </div>
  );
};

export default ProjetEntreprise;
