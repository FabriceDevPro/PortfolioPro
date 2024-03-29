import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { basename } from "@config";
import { useEffect, useState } from 'react';
import { SkillsProvider } from "@/react/context/SkillsContext";
import ReactModal from "react-modal";
import {Header,Footer,ScrollToTop} from "@/react/components";
import { ContactModalProvider } from "@/react/context/ContactModal";
import {Home,LegalMentions,MissingPage,CurriculumVitae} from "@/react/pages";
import PersonalProjectView from '@/react/pages/home/projet-perso/PersonalProjectView';
import '@/i18n';

// Configuration de React Modal
ReactModal.setAppElement("#root");

function AppWrapper() {
  const [showFooter, setShowFooter] = useState(true);
  let location = useLocation();

  useEffect(() => {
    // Cache le composant Social sur la page d'erreur 404 et les mentions légales    
    setShowFooter(location.pathname !== "/error404" &&location.pathname !== "/curriculum-vitae" );
  }, [location]);

  return (
    <>
      {showFooter && <Footer />}
    </>
  );
}

function App() {

  return (
    <SkillsProvider>
    <ContactModalProvider>
      <Router basename={basename}>
      <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-project/:id" element={<PersonalProjectView />} />
            <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/error404" element={<MissingPage />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </main>
        <AppWrapper />
        <ScrollToTop/>
      </Router>
    </ContactModalProvider>
    </SkillsProvider>
  );
}

export default App;