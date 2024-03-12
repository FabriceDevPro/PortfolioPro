import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollToHash from "../hooks/useScrollToHash";
import { FaMobileAlt,FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaDatabase, FaTerminal,FaGitAlt,FaSass,FaLaravel,FaReact,FaGithub } from 'react-icons/fa';
import { FaGraduationCap,FaChalkboardTeacher,FaCogs,FaRegLightbulb,FaLaptopCode,FaBriefcase,FaLinkedin,FaCircle } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { DiGitBranch } from 'react-icons/di';
import { ProfilImage } from "../assets/images";
import { FaFolderOpen } from 'react-icons/fa';
import CvDownloadButton from '../components/CvDownloadButton';

const CurriculumVitae = () => {
    const location = useLocation();

    useEffect(() => {
      // Si l'URL contient un hash, on tente de faire défiler vers l'élément correspondant.
      if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          // Utiliser 'scrollIntoView' pour déplacer la vue vers l'élément.
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]); // Les crochets indiquent que l'effet doit s'exécuter à chaque changement de 'location'.
    
      // Appel du hook avec la hauteur de l'en-tête si nécessaire.
      useScrollToHash(100); // 100px est un exemple, remplacez par la hauteur de votre en-tête fixe
    return (
    <>                
        <section className="curriculumvitae-section" id="cv">
            <div className="cv-container">
                <div className="cv-left-column">
                    <div className="cv-profile-pic">
                        <img src={ProfilImage} alt="Fabrice Magnan de Bellevue" />
                    </div>
                    <div className="cv-contact">
                        <div className="cv-contact-info">
                            <div className="cv-contact-text cv-address"><span>12 rue des Violettes</span><span>31570 BOURG SAINT BERNARD</span></div>
                            <div className="cv-contact-text"><span>Permis B, Véhiculé</span></div>
                            <div className="cv-contact-text"><span>Né le 26 décembre 1984 </span></div>
                            <div className="cv-contact-text"><FaMobileAlt size={15}/><span>06 78 61 47 00</span></div>
                            <div className="cv-contact-text"><IoIosMail size={15}/><span>magnan.fabrice@gmail.com</span></div>
                            <div className="cv-contact-text">
                            <FaFolderOpen size={20}/>
                                <a href="https://portfolio.fabwebprojects.fr/" target="_blank" rel="noopener noreferrer">Mon Portfolio</a>
                            </div>
                            <div className="cv-contact-text">
                            <FaLinkedin size={20}/>
                                <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" target="_blank" rel="noopener noreferrer">fabrice-magnan-de-bellevue</a>
                            </div>
                            <div className="cv-contact-text">
                                <FaGithub size={20}/>
                                <a href="https://github.com/Fabrice-Perso" target="_blank" rel="noopener noreferrer">Fabrice-Perso</a>
                            </div>
                        </div>                    
                    </div>

                    <div className="cv-section cv-diplome">
                        <h2><FaGraduationCap size={30} />Diplôme</h2>
                        <ul>
                            <li><strong>2024 :</strong> {`Formation "Intégrateur Web", OpenClassroom (en cours)`}</li>
                            <li><strong>2008 :</strong> D.U.T Gestion Entreprise Administration, Option Finance-Comptabilité, Perpignan</li>
                            <li><strong>2004 :</strong> Baccalauréat série STT, Option Informatique de Gestion</li>
                        </ul>
                    </div>
                    <div className="cv-section cv-formation">
                        <h2><FaChalkboardTeacher size={30} />Formation</h2>
                        <ul>
                            <li><strong>2023-2024 :</strong> {`Formation "Intégrateur Web" de 9 mois, OpenClassroom (en cours)`}</li>
                            <li><strong>2018 :</strong> Formation SQL Server, Programmation SQL, Orsys Formation</li>
                            <li><strong>2018 :</strong> Formation VBA EXCEL, FortimeLp</li>
                        </ul>
                    </div>
                    <div className="cv-section cv-projects">
                        <h2><FaLaptopCode size={30}/> Projets de Développement (Autodidacte)</h2>
                        <ul>
                            <li><strong>Comparadis : </strong> Programme en VBA Excel pour automatiser des contrôles comptables.</li>
                            <li><strong>Gestion des Comptes Personnels : </strong> Application en VBA Excel pour la gestion de comptes bancaires, avec une base de données ACCESS.</li>
                            <li><strong>Mon Budget Perso : </strong>{`Transformation de l'outil Gestion des Comptes Personnels en format web pour mettre en pratique mes nouvelles compétences web`}</li>
                        </ul>
                    </div>
                    <div className="cv-section cv-soft-skills">
                        <h2><FaRegLightbulb size={30} /> Soft Skills</h2>
                        <ul className="soft-skills-list">
                            <li><FaCircle className="bullet-icon" />{`Travail en équipe`}</li>
                            <li><FaCircle className="bullet-icon" />{`Adaptabilité`}</li>
                            <li><FaCircle className="bullet-icon" />{`Autonomie`}</li>                            
                            <li><FaCircle className="bullet-icon" />{`Gestion de projet`}</li>
                            <li><FaCircle className="bullet-icon" />{`Résolution créative de problèmes`}</li>
                            <li><FaCircle className="bullet-icon" />{`Communication efficace`}</li>
                            <li><FaCircle className="bullet-icon" />{`Curiosité et passion pour la technologie`}</li>                            
                        </ul>
                    </div>
                    
                </div>
                <div className="cv-right-column">
                    <h1>Fabrice MAGNAN de BELLEVUE</h1>
                    <h2>Développeur Web Full Stack</h2>
                    <div className="cv-section cv-introduction">                        
                        <h2>Introduction</h2>
                        <p>{`Passionné par le développement web, je me suis engagé dans une reconversion professionnelle enrichissante qui m'a permis de renforcer mes compétences en front-end et en back-end. Autodidacte déterminé, j'ai développé une application comptable complète et participé à divers projets qui témoignent de ma capacité à répondre efficacement aux besoins spécifiques des utilisateurs et des entreprises. Mon expérience chez un éditeur de logiciels pour le secteur immobilier, notamment à travers la création d'un questionnaire en ligne en PHP/JS, souligne mon engagement et ma polyvalence dans le domaine du développement web.`}</p>
                    </div>

                    <div className="cv-section cv-experience">
                        <h2><FaBriefcase size={30} />Expériences Professionnelles</h2>
                        <div className="timeline">
                            {/* Septeo ADB Experience */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <h3>Septeo ADB (Groupe Septeo)</h3>
                                    <h4>09/2016 à 07/2023 - Technicien Migration, Référent Technique, Rédacteur Procédure, Développeur</h4>
                                    <ul>
                                        <li>Développement en VBA Excel pour automatiser des contrôles comptables liés aux tâches de migrateurs.</li>
                                        <li>{`Création d'outils en VB.NET pour améliorer les processus internes.`}</li>
                                        <li>{`Développement d'un site web pour la saisie et l'intégration de questionnaires de paramétrage en HTML/PHP/JS lié à une BDD sous MySQL. Mise en production réalisée par moi-même et configuration du fichier.ini.`}</li>
                                        <li>{`Rédacteur de procédures, documents techniques`}</li>
                                    </ul>
                                    <h4>11/2018 à 09/2016 - Technicien Support</h4>
                                    <ul>
                                        <li>Mission de support métiers et techniques aux utilisateurs sur différentes gammes de logiciels immobiliers.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* ComputaCenter Experience */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <h3>ComputaCenter</h3>
                                    <h4>11/2010 à 09/2016 - Technicien Support</h4>
                                    <ul>
                                        <li>Mission de support métiers et techniques aux utilisateurs sur différentes gammes de logiciels immobiliers.</li>                                        
                                    </ul>
                                </div>
                            </div>
                            {/* SCC Experience */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <h3>SCC</h3>
                                    <h4>08/2010 à 11/2010 - Technicien Support</h4>
                                    <ul>
                                        <li>Mission de support métiers et techniques aux utilisateurs sur différentes gammes de logiciels immobiliers.</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Magnus Experience */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                    <h3>Magnus (Groupe Berger Levrault)</h3>
                                    <h4>10/2008 à 05/2010 - Technicien Support</h4>
                                    <ul>
                                        <li>Mission de support métiers et techniques aux utilisateurs sur différentes gammes de logiciels immobiliers.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                   

                    <div className="cv-section cv-skills">
                        <h2><FaCogs size={30} />Compétences</h2>
                        <div className="skills-container">
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaHtml5 size={20} color="#E34F26" /> <span>HTML</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaCss3Alt size={20} color="#1572B6" /><span>CSS</span> 
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaSass size={20} color="#1e3758" /> <span>SASS</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaJsSquare size={20} color="#F0DB4F" /> <span>JavaScript</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaReact size={20} color="#61DAFB" /> <span>React.js</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                <DiGitBranch size={20} color="#555" /> <span>Git Branch</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaGitAlt size={20} color="#F05032" /> <span>Git</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaGithub size={20} color="#1e3758" /> <span>GitHub</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <TbBrandVscode size={20} color="#1e3758" /> <span>VsCode</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaTerminal size={20} color="#1e3758" /> <span>Terminal</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaPhp size={20} color="#8892BF" /> <span>PHP</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaLaravel size={20} color="#1e3758" /> <span>Laravel</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaDatabase size={20} color="#4479A1" /> <span>SQL</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <SiMysql size={20} color="#00758F" /> <span>MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <CvDownloadButton />
        </section>
    </>
    );
};

export default CurriculumVitae;
