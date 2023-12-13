import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import MissingPage from "./pages/MissingPage";

function App() {
  return (
    <div className="Page">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Navigate to="/APropos" replace />} />
            <Route path="/APropos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personnel/ProjetPerso" element={<Navigate to="/ProjetPerso" replace />} />
            <Route path="/ProjetPerso" element={<ProjetPerso />} />
            <Route path="/formation/ProjetFormation" element={<Navigate to="/ProjetFormation" replace />} />
            <Route path="/ProjetFormation" element={<ProjetFormation />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/error404" element={<MissingPage />} />
            {/* Redirection vers `/error404` pour tout autre chemin non reconnu */}
            <Route path="*" element={<Navigate to="/error404" replace />} />
          </Route>
        </Routes>
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
