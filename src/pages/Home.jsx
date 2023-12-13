import Langage from "../components/Langage";
import Loader from "../components/Loader";
import Social from "../components/Social";
import AboutContainer from "./container/AboutContainer";
import BannerContainer from "./container/BannerContainer";

const Home = () => {
  return (
    <div className="Container">
      <Loader />
      <AboutContainer />
      <Langage />
      <BannerContainer />
      <Social />
    </div>
  );
};

export default Home;
