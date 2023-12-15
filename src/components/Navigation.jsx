import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaInfoCircle, FaLaptopCode } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const navLinks = [
  { to: "/", label: "Accueil", Icon: FaHome },
  { to: "/about", label: "À Propos", Icon: FaInfoCircle },
  { to: "/contact", label: "Contact", Icon: MdContactMail },
  { to: "/personnel/ProjetPerso", label: "Projet Perso", Icon: FaLaptopCode },
  { to: "/formation/ProjetFormation", label: "Projets Formation", Icon: FaLaptopCode },
  { to: "/entreprise/ProjetEntreprise", label: "Projets Entreprise", Icon: FaLaptopCode },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderLinkClass = ({ isActive }) => (isActive ? "bouton-projet nav-active" : "bouton-projet");

  return (
    <nav className="navbar">
      <button className="burger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars />
      </button>
      <ul className={isMobileMenuOpen ? "nav-links mobile" : "nav-links"}>
        {navLinks.map(({ to, label, Icon }) => (
          <li key={to}>
            <NavLink to={to} className={renderLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
              <Icon className="nav-icon" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
