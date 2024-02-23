import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { basename } from "./config";
import { useEffect, useState } from 'react';
import ReactModal from "react-modal";
import Home from "./react/pages/Home";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";
import ScrollToTop from "./react/components/ScrollToTop";
import Social from "./react/components/Social";
import LegalMentions from "./react/pages/LegalMentions";
import MissingPage from "./react/pages/MissingPage";
import Certifications from "./react/pages/Certifications";

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
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /><AppWrapper /></>} />
        <Route path="/certifications" element={<><Certifications /><AppWrapper /></>} />
        <Route path="/mentions-legales" element={<><LegalMentions /><AppWrapper /></>} />
        <Route path="/error404" element={<MissingPage />} />
        <Route path="*" element={<><MissingPage /><AppWrapper /></>} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
