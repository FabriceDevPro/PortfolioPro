// Home.js
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import About from "./home/About";
import { LogoImage } from "../assets/images";
import { SkillsContext } from '../context/SkillsContext';
import Skills from "./home/skill/Skills";
import Projects from './home/Projects';
import personalProjects from '../data/personalProjects';
import formationProjects from '../data/formationProjects';
import TechnicsSkills from './home/skill-technics/TechnicsSkills';
import { FaRegFilePdf } from "react-icons/fa";
import { basename } from '../config';

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
      <>
        {/* <section className="about-section" id="about">
          <div className="about-section__logo-container">
            <img src={LogoImage} alt="Logo FAB WEB PROJECT" className="about-section__logo" />
          </div>
          <About />
        </section> */}
        <section className="skills-section" id="skills">
            <Skills />
        </section>
        {/* <section className="projects-section" id="projects">
          <Projects 
            personalProjects={personalProjects} 
            formationProjects={filteredProjects} 
          />  
        </section>
        <section className="technics-skills-section" id="technics-skills">
          <TechnicsSkills />
        </section>
        <section className="curriculumvitae-section" id="download-cv">          
          <button 
            className="project-view-button" 
            onClick={() => {
              const link = document.createElement('a');
              link.href = `${basename}cv-Magnanfabrice.pdf`;
              link.download = 'cv-Magnanfabrice.pdf';
              link.style.display = 'none'; // Assurez-vous que le lien n'est pas visible
              document.body.appendChild(link); // Ajoute le lien à la page
              link.click(); // Déclenche le téléchargement
              document.body.removeChild(link); // Supprime le lien de la page
            }}
          >
            <FaRegFilePdf className="icon button-icon" />
            Télécharger mon CV
          </button>
        </section> */}
      </>
    );
};

export default Home;
