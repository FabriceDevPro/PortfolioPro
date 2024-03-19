// Home.js
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LogoImage } from "@/assets/images";
import { SkillsContext } from '@/react/context/SkillsContext';
import CvDownloadButton from '@/react/components/CvDownloadButton';
import Skills from "./home/skill/Skills";
import About from "./home/About";
import Projects from './home/Projects';
import personalProjects from '@/react/data/personalProjects';
import formationProjects from '@/react/data/formationProjects';

import TechnicsSkills from './home/skill-technics/TechnicsSkills';
import Certifications from './home/certifications/Certifications';
import AttestationsSection from './home/attestations/AttestationsSection';

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
        <section className="about-section" id="about">
          <div className="about-section__logo-container">
            <img src={LogoImage} alt="Logo FAB WEB PROJECT" className="about-section__logo" />
          </div>
          <About />
        </section>
        <section className="skills-section" id="skills">
          <Skills />
        </section>
        <section className="projects-section" id="projects">
          <Projects 
            personalProjects={personalProjects} 
            formationProjects={filteredProjects} 
          />  
        </section>
        <section className="certifications-section" id="certifications">
          <Certifications />
        </section>
        <section className="technics-skills-section" id="technics-skills">
          <TechnicsSkills />
        </section>        
        <section className="curriculumvitae-section" id="cv">
          <CvDownloadButton />
        </section>
        <section className="attestations-section">          
          <AttestationsSection 
            projectName="Développement d'outil de contrôle et comparaison de données"
            role="Développeur"
            tasks="Développement complet de l'outil, automatisation des processus de migration."
            languages={["VBA", "Excel"]}
          />
        {/* Autres attestations si nécessaire */}
        </section>
      </>
    );
};

export default Home;
