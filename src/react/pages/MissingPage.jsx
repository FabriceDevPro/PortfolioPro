import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
      <section className="missing-section">
        <h1 className="error-section">404</h1>
        <p>{"Oups! La page que vous demandez n'existe pas."}</p>
        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </section>
  );
};

export default MissingPage;
