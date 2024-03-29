import { Link } from "react-router-dom";
import { Config } from '../config';
import Social from "./Social";
const Footer = () => {
  const anneeActuelle = new Date().getFullYear();
  const anneeDebut = 2023;
  let copyrightText = `© ${anneeDebut}`;

  if (anneeActuelle > anneeDebut) {
    copyrightText += ` - ${anneeActuelle}`;
  }
  copyrightText += ` Fabrice Magnan de Bellevue | FabWebProjects.fr | Tous droits réservés | Version : ${Config.version} | `;

  return (
    <footer id="contact">
      <div className="footer-social-links">
        <Social />
      </div>
      <div className="footer-info">
        <p>
          {copyrightText}
          <Link to="/mentions-legales#legal-mentions" className="legal-link">
            Mentions Légales
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
