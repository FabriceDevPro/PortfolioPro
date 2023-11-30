import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LegalMentions from "./components/LegalMentions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjetPerso from "./pages/personnel/ProjetPerso";
import ProjetFormation from "./pages/formation/ProjetFormation";

function App() {
  return (
    <div className="Page">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personnel/ProjetPerso" element={<ProjetPerso />} />
            <Route path="/formation/ProjetFormation" element={<ProjetFormation />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
