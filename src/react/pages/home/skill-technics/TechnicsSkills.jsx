import { NASLogo, SynologyLogo, OvhLogo } from "@/assets/images-skills-technics";
import { useTranslation } from 'react-i18next';
const TechnicsSkills = () => {
  const { t } = useTranslation();
    return (
      <>
        <div className="technics-skills-section__title-container">
          <h2 className="technics-skills-section__section-title">{t('skillsTechnical.title')}</h2>
        </div>
        <div className="technics-skills-section__card">
          <h3>{t('skillsTechnical.subtitle')}</h3>
          <p>{t('skillsTechnical.hostingSection.synologyServer')}</p>
          <p>{t('skillsTechnical.hostingSection.ovhDomain')}</p>
          <p>{t('skillsTechnical.hostingSection.separateInfrastructure')}</p>
          <div className="technics-skills-section__logos-container">
            <img src={NASLogo} alt="NAS Synology" className="technics-skills-section__logo-image" />
            <img src={SynologyLogo} alt="Synology DSM" className="technics-skills-section__logo-image" />
            <img src={OvhLogo} alt="OVH" className="technics-skills-section__logo-image" />
          </div>
        </div>
      </>
    );
};


export default TechnicsSkills;