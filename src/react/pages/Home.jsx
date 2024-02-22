import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from "./home/About";
import { LogoImage } from "../../assets/images";
import { SkillsProvider } from '../context/SkillsContext';
import Skills from "./home/Skills";
import PersonalProjectCard from './home/PersonalProjectCard';
import personalProjects from '../data/personalProjects';
import ProjectList from './home/formation/ProjectList';
import formationProjects from '../data/formationProjects';

const Home = () => {
   
    const location = useLocation();

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
    return (
        <SkillsProvider>
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
                <section className="project-list-container">
                  <div className="project-list-title">
                    <PersonalProjectCard 
                    title="Mes projets personnels"
                    project={personalProjects.name} 
                    images={personalProjects.images} 
                    description={personalProjects.description}
                    />
                  </div>
                  <div className="project-list-title">
                    <ProjectList projects={formationProjects} title="Mes projets de formation"/>
                  </div>
                </section>
            </main>
        </SkillsProvider>    
      
    );
};

export default Home;