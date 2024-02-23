import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { basename } from "./config";
import { useEffect, useState } from 'react';
import { SkillsProvider } from "./react/context/SkillsContext";
import ReactModal from "react-modal";
import Home from "./react/pages/Home";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";
import ScrollToTop from "./react/components/ScrollToTop";
import Social from "./react/components/Social";
import LegalMentions from "./react/pages/LegalMentions";
import MissingPage from "./react/pages/MissingPage";
import Certifications from "./react/pages/Certifications";
import Curriculum from "./react/pages/Curriculum";

// Configuration de React Modal
ReactModal.setAppElement("#root");

function AppWrapper() {
  const [showSocial, setShowSocial] = useState(true);
  let location = useLocation();

  useEffect(() => {
    // Cache le composant Social sur la page d'erreur 404 et les mentions légales    
    setShowSocial(location.pathname !== "/error404" && location.pathname !== "/mentions-legales");
  }, [location]);

  return (
    <>
      {showSocial && <Social />}
    </>
  );
}

function App() {
  return (
    <SkillsProvider>
      <Router basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><AppWrapper /></>} />
          <Route path="/certifications" element={<><Certifications /><AppWrapper /></>} />
          <Route path="/curriculum" element={<><Curriculum /><AppWrapper /></>} />
          <Route path="/mentions-legales" element={<><LegalMentions /><AppWrapper /></>} />
          <Route path="/error404" element={<MissingPage />} />
          <Route path="*" element={<><MissingPage /><AppWrapper /></>} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </SkillsProvider>
  );
}

export default App;
