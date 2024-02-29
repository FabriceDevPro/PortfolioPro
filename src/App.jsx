import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { basename } from "./config";
import { useEffect, useState } from 'react';
import { SkillsProvider } from "./context/SkillsContext";
import ReactModal from "react-modal";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Social from "./components/Social";
import LegalMentions from "./pages/LegalMentions";
import MissingPage from "./pages/MissingPage";
import Certifications from "./pages/Certifications";
import CurriculumVitae from "./pages/CurriculumVitae";
import PersonalProjectView from './pages/home/projet-perso/PersonalProjectView';

// Configuration de React Modal
ReactModal.setAppElement("#root");

function AppWrapper() {
  const [showSocial, setShowSocial] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  let location = useLocation();

  useEffect(() => {
    // Cache le composant Social sur la page d'erreur 404 et les mentions légales    
    setShowSocial(location.pathname !== "/error404" && location.pathname !== "/mentions-legales" && location.pathname !== "/certifications" && location.pathname !== "/curriculum-vitae");
    setShowFooter(location.pathname !== "/error404" &&location.pathname !== "/curriculum-vitae");
  }, [location]);

  return (
    <>
      {showSocial && <Social />}
      {showFooter && <Footer />}
    </>
  );
}

function App() {

  return (
    <SkillsProvider>      
      <Router basename={basename}>        
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<><Home /><AppWrapper /></>} />
            <Route path="/personal-project/:id" element={<PersonalProjectView />} />
            <Route path="/certifications" element={<><Certifications /><AppWrapper /></>} />
            <Route path="/curriculum-vitae" element={<><CurriculumVitae /><AppWrapper /></>} />
            <Route path="/mentions-legales" element={<><LegalMentions /><AppWrapper /></>} />
            <Route path="/error404" element={<MissingPage />} />
            <Route path="*" element={<><MissingPage /><AppWrapper /></>} />
          </Routes>
        </main>
        <AppWrapper />
        <ScrollToTop />
      </Router>
    </SkillsProvider>
  );
}

export default App;
