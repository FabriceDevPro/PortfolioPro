import { useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollToHash from "@/react/hooks/useScrollToHash";
import { FaMobileAlt,FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaDatabase, FaTerminal,FaGitAlt,FaSass,FaLaravel,FaReact,FaGithub, FaGlobe, FaHeart, FaMotorcycle, FaFilm } from 'react-icons/fa';
import { FaGraduationCap,FaCogs,FaRegLightbulb,FaLaptopCode,FaBriefcase,FaLinkedin,FaCircle } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { SiMysql } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { ProfilImage } from "@/assets/images";
import { FaFolderOpen } from 'react-icons/fa';
import CvDownloadButton from "@/react/components/CvDownloadButton";
import { Trans,useTranslation,getI18n  } from 'react-i18next';
import CVPrintButton from '../components/CVPrintButton';

const CurriculumVitae = () => {
    const componentRef = useRef();
    const location = useLocation();
    const { t } = useTranslation();
    const language = getI18n().language; // Obtenez la langue actuelle

    // Classe conditionnelle basée sur la langue
    const hobbiesClass = `cv-hobbies ${language === 'en' ? 'hobbies-en' : 'hobbies-fr'}`;

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
        <section className="curriculumvitae-section" id="cv" ref={componentRef}>
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
                            <div className="cv-contact-text"><FaMobileAlt size={15}/><span>+33 6 78 61 47 00</span></div>
                            <div className="cv-contact-text"><IoIosMail size={15}/><span>magnan.fabrice@gmail.com</span></div>
                            <div className="cv-contact-text">
                            <FaFolderOpen size={20}/>
                                <a href="https://portfolio.fabwebprojects.fr/" target="_blank" rel="noopener noreferrer"><span className="no-print">{t('cv.PortfolioTitle')}</span> <span className="print">https://portfolio.fabwebprojects.fr/</span></a>
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
                        <h2><FaGraduationCap size={30} />{t('cv.DiplomesTitle')}</h2>
                        <ul>
                            <li><strong>2024 :</strong> {t('cv.2024Diploma')}</li>
                            <li><strong>2018 :</strong> {t('cv.2018SQLTraining')}</li>
                            <li><strong>2018 :</strong> {t('cv.2018VBATraining')}</li>
                            <li><strong>2008 :</strong> {t('cv.2008Degree')}</li>
                        </ul>
                    </div>                   
                    <div className="cv-section cv-languages">
                        <h2><FaGlobe size={30}/>{t('cv.LanguagesTitle')}</h2>
                        <ul>
                            <li><strong>{t('cv.MotherLanguageTitle')} :</strong> {t('cv.MotherLanguage')}</li>
                            <li><strong>{t('cv.ProLanguageTitle')} :</strong> {t('cv.ProLanguage')}</li>
                        </ul>
                    </div>
                    <div className={`cv-section ${hobbiesClass}`}>
                        <h2><FaHeart size={30}/> {t('cv.Hobbies.Title')}</h2>
                        <ul>
                            <li><FaLaptopCode size={20}/> {t('cv.Hobbies.WebProjects')}</li>
                            <li><FaMotorcycle size={20}/> {t('cv.Hobbies.Motorcycling')}</li>
                            <li><FaFilm size={20}/> {t('cv.Hobbies.Cinema')}</li>
                        </ul>
                    </div>
                    <div className="cv-section cv-interests">
                        <CvDownloadButton />
                        <CVPrintButton contentRef={componentRef}/>
                    </div>
                </div>
                <div className="cv-right-column">
                    <h1>Fabrice MAGNAN de BELLEVUE</h1>
                    <h2>{t('cv.title')}</h2>
                    <div className="cv-section cv-introduction">
                        <h2>{t('cv.IntroductionTitle')}</h2>
                        <p><Trans i18nKey="cv.Introduction" components={[<span key="0" />, <strong key="1" />]} /></p>
                    </div>

                    <div className="cv-section cv-experience">
                        <h2><FaBriefcase size={30} />{t('cv.ExperienceTitle')}</h2>
                        <div className="timeline">
                            {t('cv.Experiences', { returnObjects: true }).map((experience, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                <div className="experience-content">
                                <h3>{experience.Company || experience.Title}</h3>
                                <h4>{experience.Period}</h4>
                                <ul>
                                    {experience.Tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                    // <li key={taskIndex}><Trans i18nKey="task" components={[<span key="0" />, <strong key="1" />]} /></li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                    <div className="cv-section cv-skills">
                        <h2><FaCogs size={30} />{t('cv.SkillsTitle')}</h2>
                        <div className="skills-container">
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaHtml5  color="#E34F26" /> <span>HTML</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaCss3Alt  color="#1572B6" /><span>CSS</span> 
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaSass  color="#1e3758" /> <span>SASS</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaJsSquare  color="#F0DB4F" /> <span>JavaScript</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaReact  color="#61DAFB" /> <span>React.js</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaGitAlt  color="#F05032" /> <span>Git</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaGithub  color="#1e3758" /> <span>GitHub</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <TbBrandVscode  color="#1e3758" /> <span>VsCode</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaTerminal  color="#1e3758" /> <span>Terminal</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaPhp  color="#8892BF" /> <span>PHP</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaLaravel  color="#1e3758" /> <span>Laravel</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <FaDatabase  color="#4479A1" /> <span>SQL</span>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-logo">
                                    <SiMysql size={25} color="#00758F" /> <span>MySQL</span>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className="cv-section cv-soft-skills">
                         <h2><FaRegLightbulb size={30} /> {t('cv.SoftSkills.Title')}</h2>
                        <ul className="soft-skills-list">
                            <li><FaCircle className="bullet-icon" />{t('cv.SoftSkills.CollaborationAndCommunication')}</li>
                            <li><FaCircle className="bullet-icon" />{t('cv.SoftSkills.AdaptabilityAndInnovation')}</li>
                            <li><FaCircle className="bullet-icon" />{t('cv.SoftSkills.CreativeProblemSolving')}</li>
                            <li><FaCircle className="bullet-icon" />{t('cv.SoftSkills.CuriosityAndPassionForTech')}</li>
                        </ul>
                    </div>
                </div>
            </div>            
        </section>
    </>
    );
};

export default CurriculumVitae;
