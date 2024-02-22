/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <section className="Social">
      <h2>Retrouvez-moi sur les réseaux sociaux :</h2>
      <div className="social-icons">
        <a href="https://github.com/Fabrice-Perso/" title="Profil GitHub" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/fabrice-magnan-de-bellevue" title="Profil LinkedIn" target="_blank">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Social;
