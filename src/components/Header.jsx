import { useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaHome, FaUser, FaFileAlt, FaBook, FaServer, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector('body').classList.toggle('mobile-nav-active');
  };

  return (
    <header>
        
      <div className="perfil">
        <img src="imagenes/fondo2.jpg" alt="Perfil" />
        <h1>Guido Banquet</h1>
        <div className="redes">
          <a href="https://www.instagram.com/guido_banqueth/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://github.com/guidostark37" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Botón de menú móvil */}
      <div id="menubtn" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#home" className="active"><FaHome /> Home</a></li>
          <li><a href="#about"><FaUser /> About Me</a></li>
          <li><a href="#skills"><FaFileAlt /> Skills</a></li>
          <li><a href="#resume"><FaBook /> Resume</a></li>
          <li><a href="#portfolio"><FaServer /> Portfolio</a></li>
          <li><a href="#contactos"><FaEnvelope /> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}