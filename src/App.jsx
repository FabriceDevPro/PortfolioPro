import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { basename } from "./config";
import ReactModal from "react-modal";
import Home from "./react/pages/Home";
import Header from "./react/components/Header";
import Footer from "./react/components/Footer";

// Configuration de React Modal
ReactModal.setAppElement("#root");

function App() {
  return (
    <Router basename={basename}>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
