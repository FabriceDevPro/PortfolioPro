/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <section className="social-section">
      <h2 className="social-section__title">Retrouvez-moi sur les réseaux sociaux :</h2>
      <div className="social-section__icons-container">
        <a href="https://github.com/Fabrice-Perso/" title="Profil GitHub" target="_blank" className="social-section__icon">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" title="Profil LinkedIn" target="_blank" className="social-section__icon">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Social;
