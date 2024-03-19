import { Link } from "react-router-dom";
import { Config } from '../config';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const anneeActuelle = new Date().getFullYear();
  const anneeDebut = 2023;
  let copyrightText = `© ${anneeDebut}`;

  if (anneeActuelle > anneeDebut) {
    copyrightText += ` - ${anneeActuelle}`;
  }
  copyrightText += ` Fabrice Magnan de Bellevue | FabWebProjects.fr | ${t('contact.rightsReserved')} | Version : ${Config.version} | `;

  return (
    <footer>
      <p>
      {copyrightText}
      <Link to="/mentions-legales#legal-mentions" className="legal-link">
        {t('contact.legalMentionsLink')}
      </Link>
      </p>
    </footer>
  );
};

export default Footer;
