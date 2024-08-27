// Home.js
import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LogoImage } from "@/assets/images";
import { SkillsContext } from '@/react/context/SkillsContext';
import CvDownloadButton from '@/react/components/CvDownloadButton';
import CvRedirectButton from '@/react/components/CvRedirectButton';
import Skills from "./home/skill/Skills";
import About from "./home/About";
import Projects from './home/Projects';
import personalProjects from '@/react/data/personalProjects';
import formationProjects from '@/react/data/formationProjects';

import TechnicsSkills from './home/skill-technics/TechnicsSkills';
import Certifications from './home/certifications/Certifications';
import AttestationsSection from './home/attestations/AttestationsSection';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  // Déplacez cette ligne à l'intérieur de la fonction `Home` pour utiliser le contexte correctement
  const { activeSkill, setActiveSkill } = useContext(SkillsContext);

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

  // Fonction pour réinitialiser le filtre
  const handleFilterReset = () => {
    setActiveSkill(null);
    // Naviguer vers la page et ensuite faire défiler jusqu'à l'id `#projects`.
    navigate('/#skills');

    // Faire défiler la vue pour que l'élément avec l'id `projects` soit au sommet de la fenêtre.
    // Ceci est nécessaire pour gérer le défilement si la navigation n'entraîne pas de rafraîchissement de la page.
    window.scrollTo({
      top: document.querySelector('#projects').offsetTop,
      behavior: 'smooth',
    });
  };

  // Déterminez si le filtre est actif en vérifiant si `activeSkill` n'est pas nul
  const isFilterActive = Boolean(activeSkill);

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
          isFiltered={isFilterActive}
          activeSkill={activeSkill}
          onFilterReset={handleFilterReset}
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
        {/* <CvRedirectButton /> */}
      </section>
      <section className="attestations-section">
        <AttestationsSection/>
      </section>
    </>
  );
};

export default Home;
