import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <main> 
      <div className="MissingPage">
        <h1 className="error">404</h1>
        <p>{"Oups! La page que vous demandez n'existe pas."}</p>
        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
};

export default MissingPage;