/* eslint-disable react/no-unescaped-entities */
import { ProfilImage } from "../../assets/images";
const AboutContainer = () => {
  return (
    <section className="About">
      <img src={ProfilImage} alt="Votre Photo de Profil" className="profile-photo" />
      <p className="About_Me">
        {"Bonjour, je m'appelle Fabrice MAGNAN de BELLEVUE."} <br />
        <br />
        {"Après plus de 15 ans dans le monde du travail sur des postes de supports clients/techniciens ou migrateur de données, j'ai choisi de faire une reconversion professionnelle pour devenir"}{" "}
        <strong>Développeur Web</strong>.
      </p>
    </section>
  );
};

export default AboutContainer;
