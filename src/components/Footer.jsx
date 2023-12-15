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
      {copyrightText}
      <Link to="/mentions-legales" className="legal-link">
        Mentions Légales
      </Link>
    </footer>
  );
};

export default Footer;
