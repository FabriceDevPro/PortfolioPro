import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollToHash from "@/react/hooks/useScrollToHash";
import CvDownloadButton from "@/react/components/CvDownloadButton";
import { Trans, useTranslation, getI18n } from 'react-i18next';
import CVPrintButton from '../components/CVPrintButton';
import { ProfilImage } from "@/assets/images";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaLinkedin, FaGithub } from 'react-icons/fa';
const CurriculumVitae = () => {
    const componentRef = useRef();
    const location = useLocation();
    const { t } = useTranslation();
    const language = getI18n().language;

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    useScrollToHash(100);

    return (
        <>                
            <section className="curriculumvitae-section" id="cv" ref={componentRef}>
                <div className="cv-container">
                    <div className="cv-left-column">
                        {/* Colonne gauche */}
                        <div className="cv-profile-pic">
                            <img src={ProfilImage} alt="Fabrice Magnan de Bellevue" />
                        </div>
                        <div className="cv-contact">
                            <div className="cv-contact-info">
                                <div className="cv-contact-text">
                                    <FaMapMarkerAlt style={{ color: '#FF1493' }} />
                                    <span>Région de Toulouse</span>
                                </div>
                                <div className="cv-contact-text">
                                    <FaPhoneAlt style={{ color: '#FF4500' }} />
                                    <span>06 78 61 47 00</span>
                                </div>
                                <div className="cv-contact-text">
                                    <FaEnvelope style={{ color: '#000000' }} />
                                    <span>magnan.fabrice@gmail.com</span>
                                </div>
                                <div className="cv-contact-text">
                                    <FaGlobe style={{ color: '#1E90FF' }} />
                                    <a href="https://portfolio.fabwebprojects.fr/" target="_blank" rel="noopener noreferrer">https://portfolio.fabwebprojects.fr</a>
                                </div>
                                <div className="cv-contact-text">
                                    <FaLinkedin style={{ color: '#0077B5' }} />
                                    <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" target="_blank" rel="noopener noreferrer">in/fabrice-magnan-de-bellevue</a>
                                </div>
                                <div className="cv-contact-text">
                                    <FaGithub style={{ color: '#000000' }} />
                                    <a href="https://github.com/Fabrice-Perso" target="_blank" rel="noopener noreferrer">Fabrice-Perso</a>
                                </div>
                            </div>
                        </div>

                        <div className="cv-section cv-introduction">
                            <h2>{t('cv.IntroductionTitle')}</h2>
                            <p><Trans i18nKey="cv.Introduction" components={[<span key="0" />, <strong key="1" />]} /></p>
                        </div>

                        <div className="cv-section cv-diplome">
                            <h2>{t('cv.DiplomesTitle')}</h2>
                            <ul>
                                <li>2024 :<strong>{t('cv.2024DiplomaTitle')}</strong> {t('cv.2024DiplomaOrganism')}</li>
                                <li>2018 :<strong>{t('cv.2018SQLTrainingTitle')}</strong> {t('cv.2018SQLTrainingOrganism')}</li>
                                <li>2018 :<strong>{t('cv.2018VBATrainingTitle')}</strong> {t('cv.2018VBATrainingOrganism')}</li>
                                <li>2008 :<strong>{t('cv.2008DegreeTitle')}</strong> {t('cv.2008DegreeOrganism')}</li>
                            </ul>
                        </div>                   

                        <div className="cv-section cv-certifications">
                            <h2>{t('cv.CertificationsTitle')}</h2>
                            <ul>
                                {t('cv.Certifications', { returnObjects: true }).map((certification, index) => (
                                    <li key={index}>
                                        {certification.Year} : <strong>{certification.Certification}</strong>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="cv-section cv-languages">
                            <p><strong>{t('cv.LanguagesTitle')} : </strong>{t('cv.ProLanguageTitle')} {t('cv.ProLanguage')}</p>
                        </div>
                        <div className="cv-section cv-softskills">
                            <p><strong>{t('cv.SoftSkillsTitle')} : </strong>{t('cv.SoftSkillsDetails')}</p>
                        </div>
                        <div className="cv-section cv-interests">
                            <CvDownloadButton />
                            <CVPrintButton contentRef={componentRef}/>
                        </div>
                    </div>

                    <div className="cv-right-column">
                        <div className="cv-header">
                            <h1>Fabrice MAGNAN de BELLEVUE</h1>
                            <h2>{t('cv.title')}</h2>
                        </div>

                        <div className="cv-content">
                            <div className="cv-section cv-skills">
                                <h2>{t('cv.SkillsTitle')}</h2>
                                <ul>
                                    {t('cv.Skills', { returnObjects: true }).map((skill, index) => (
                                        <li key={index}>
                                            <strong>{skill.Category} :</strong> {skill.Details}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="cv-section cv-experience">
                                <h2>{t('cv.ExperienceTitle')}</h2>
                                <div className="experience-content">
                                    {t('cv.Experiences', { returnObjects: true }).map((experience, index) => {
                                        const title = experience.Title;
                                        const details = [experience.Company, experience.Period].filter(Boolean).join(' | ');

                                        return (
                                            <div className="experience-item" key={index}>
                                                <h3>
                                                    {title}
                                                    {details && (
                                                        <span style={{ fontSize: 'smaller', marginLeft: '8px' }}>
                                                            | {details}
                                                        </span>
                                                    )}
                                                </h3>
                                                <ul>
                                                    {experience.Tasks.map((task, taskIndex) => (
                                                        <li key={taskIndex}>
                                                            {typeof task === 'string' ? (
                                                                task
                                                            ) : (
                                                                <span>
                                                                    <strong>Impact :</strong> {task.Impact}
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CurriculumVitae;
