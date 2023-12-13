import Social from "../../components/Social";

const ProjetFormation = () => {
  const projects = [
    {
      name: "Riding Cities",
      description: "Description à venir...",
      url: "https://fabwebprojects.fr/Riding_Cities/index.html",
    },
    {
      name: "Booki",
      description: "Description à venir...",
      url: "https://fabwebprojects.fr/Booki/index.html",
    },
    {
      name: "OhMyFood",
      description: "Description à venir...",
      url: "https://fabwebprojects.fr/OhMyFood/index.html",
    },
    {
      name: "Print It",
      description: "Description à venir...",
      url: "https://fabwebprojects.fr/Print_It/index.html",
    },
    {
      name: "Portfolio Architecte - Sophie Bluel",
      description: "Description à venir... Un Backend est necessaire pour voir le projet complet",
      url: "https://fabwebprojects.fr/Sophie-bluel/index.html",
    },
    {
      name: "Kasa",
      description: "Description à venir...",
      url: "https://fabwebprojects.fr/Kasa",
    },
    // Ajoutez d'autres projets ici
  ];
  return (
    <div className="Container">
      <section className="Projet">
        <h1>{"Mes Projets réalisés en Formation OpenClassroom"}</h1>
        {projects.map((project, index) => (
          <div key={index}>
            <ol className="chronology">
              <li>
                <span className="version">
                  Projet {index + 1} : {project.name}
                </span>
              </li>
            </ol>
            <ul className="features">
              <li>{project.description}</li>
            </ul>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="bouton-projet">
              Cliquez-ici
            </a>
          </div>
        ))}
      </section>
      <Social />
    </div>
  );
};

export default ProjetFormation;
