import Banner from "../../components/Banner";
import bannerData1 from "../../data/bannerData1"; // Assurez-vous que le chemin est correct
import bannerData2 from "../../data/bannerData2";
import bannerData3 from "../../data/bannerData3";

const BannerContainer = () => {
  return (
    <section className="Banner">
      <div id="banner-container">
        <Banner slides={bannerData1} bannerId="banner1" />
        <Banner slides={bannerData2} bannerId="banner2" />
        <Banner slides={bannerData3} bannerId="banner3" />
      </div>
    </section>
  );
};

export default BannerContainer;
