import { Link } from "react-router-dom";

const Footer = () => {
  const anneeActuelle = new Date().getFullYear();
  const anneeDebut = 2023;
  let copyrightText = `© ${anneeDebut}`;

  if (anneeActuelle > anneeDebut) {
    copyrightText += ` - ${anneeActuelle}`;
  }

  copyrightText += ` Fabrice Magnan de Bellevue | FabWebProjects.fr | Tous droits réservés | `;

  return (
    <footer>
      <p>
      {copyrightText}
      <Link to="/mentions-legales#legal-mentions" className="legal-link">
        Mentions Légales
      </Link>
      </p>
    </footer>
  );
};

export default Footer;
