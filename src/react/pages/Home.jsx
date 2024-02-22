import About from "./home/About";
import { LogoImage } from "../../assets/images";

const Home = () => {
    return (
        <main>            
            <section className="About" id="about">
                <div className="logo-container">
                    <img src={LogoImage} alt="Logo FAB WEB PROJECT" className="logo" />
                </div>
                <About />
            </section>
        </main>    
      
    );
};

export default Home;