// Home.js
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import About from "./home/About";
import { LogoImage } from "../../assets/images";
import { SkillsContext } from '../context/SkillsContext';
import Skills from "./home/Skills";
import PersonalProjectCard from './home/PersonalProjectCard';
import personalProjects from '../data/personalProjects';
import ProjectList from './home/formation/ProjectList';
import formationProjects from '../data/formationProjects';
import TechnicsSkills from './home/TechnicsSkills';

const Home = () => {
    const location = useLocation();
    // Déplacez cette ligne à l'intérieur de la fonction `Home` pour utiliser le contexte correctement
    const { activeSkill } = useContext(SkillsContext);

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView();
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, [location]);
    
    // Filtrez les projets ici, à l'intérieur de la fonction `Home`
    const filteredProjects = activeSkill
        ? formationProjects.filter(project => project.languages.some(lang => lang.name === activeSkill))
        : formationProjects;

    return (
      <main>
          <section className="About" id="about">
              <div className="logo-container">
                  <img src={LogoImage} alt="Logo FAB WEB PROJECT" className="logo" />
              </div>
              <About />
          </section>
          <section className="Skills" id="skills">
              <Skills />
          </section>
          <section className="project-list-container" id="projects">
            <div className="project-list-title">
                <PersonalProjectCard 
                    title="Mes projets personnels"
                    projects={personalProjects} 
                />
            </div>
            <div className="project-list-title">
                <ProjectList 
                    title="Mes projets de formation"
                    projects={filteredProjects} // Utilisez les projets filtrés ici
                />
            </div>            
          </section>
          <section className="TechnicsSkills" id="TechnicsSkills">
            <TechnicsSkills />
          </section>
      </main>
    );
};

export default Home;
