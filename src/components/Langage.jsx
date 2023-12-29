import { LogoHTML, LogoCss, LogoSass, LogoJS, LogoReact, LogoVite, LogoRedux, LogoMySql, LogoPHP, LogoApi, LogoNode, LogoPhpmyadmin } from "../assets/images";

const Langage = () => {
  return (
    <section className="Langage">
      <p>Je réalise ce site pendant ma formation diplômante (BAC+2) chez OpenClassroom.</p>
      <p>Il vous permettra à terme de découvrir mon portfolio, mon CV, ainsi que mes réalisations en tant que développeur web. Vous pourrez explorer mes compétences dans les langages suivant :</p>
      <div className="logo-langage">
        <img src={LogoHTML} alt="Logo HTML" />
        <img src={LogoCss} alt="Logo CSS" />
        <img src={LogoSass} alt="Logo SASS" />
        <img src={LogoJS} alt="Logo JS" />
        <img src={LogoApi} alt="Logo API" />
        <img src={LogoNode} alt="Logo NODE" />
        <img src={LogoReact} alt="Logo REACT" />
        <img src={LogoVite} alt="Logo VITE" />
        <img src={LogoRedux} alt="Logo REDUX" />
        <img src={LogoMySql} alt="Logo MYSQL" />
        <img src={LogoPHP} alt="Logo PHP" />
        <img src={LogoPhpmyadmin} alt="Logo PhpMyAdmin" />
      </div>
      <p>et en savoir plus sur mon parcours professionnel. Revenez bientôt pour découvrir mon travail !</p>
    </section>
  );
};

export default Langage;
