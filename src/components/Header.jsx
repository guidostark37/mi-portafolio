import { useState, useEffect } from 'react';
import { 
  FaInstagram, FaGithub, FaLinkedinIn, FaHome, FaUser, 
  FaFileAlt, FaBook, FaServer, FaEnvelope, FaBars, FaTimes,
  FaBriefcase, FaCamera 
} from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const currentYear = new Date().getFullYear();

  // 🎨 CONFIGURACIÓN DE LA PALETA DE COLORES
  const colores = [
    { name: 'dorado', hex: '#b97d10' },
    { name: 'azul', hex: '#00d2ff' },
    { name: 'verde', hex: '#2ecc71' },
    { name: 'morado', hex: '#9b59b6' }
  ];

  // Estado para rastrear el color activo del tema
  const [colorActivo, setColorActivo] = useState('#b97d10');

  // Función para inyectar el color elegido en la raíz de CSS
  const cambiarColorAcento = (hexColor) => {
    setColorActivo(hexColor);
    document.documentElement.style.setProperty('--themeColor', hexColor);
    localStorage.setItem('userThemeColor', hexColor); // Persistencia al recargar
  };

  // Cargar el color preferido del usuario si ya existe
  useEffect(() => {
    const colorGuardado = localStorage.getItem('userThemeColor');
    if (colorGuardado) {
      cambiarColorAcento(colorGuardado);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector('body').classList.toggle('mobile-nav-active');
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (!element) return;

    const topOffset = sectionId === 'home' 
      ? 0 
      : element.getBoundingClientRect().top + window.scrollY - 20;

    if (menuOpen) {
      setMenuOpen(false);
      document.querySelector('body').classList.remove('mobile-nav-active');

      setTimeout(() => {
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }, 350);
    } else {
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  // --- INTERSECTION OBSERVER ---
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'resume', 'evidence', 'portfolio', 'servicios', 'contactos'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header-sidebar">
      {/* Redes superiores originales del perfil */}
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
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'home')}>
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'about')}>
              <FaUser /> About Me
            </a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'skills')}>
              <FaFileAlt /> Skills
            </a>
          </li>
          <li>
            <a href="#resume" className={activeSection === 'resume' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'resume')}>
              <FaBook /> Resume
            </a>
          </li>
          <li>
            <a href="#evidence" className={activeSection === 'evidence' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'evidence')}>
              <FaCamera /> Evidencias
            </a>
          </li>
          <li>
            <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'portfolio')}>
              <FaServer /> Portfolio
            </a>
          </li>
          <li>
            <a href="#servicios" className={activeSection === 'servicios' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'servicios')}>
              <FaBriefcase /> Servicios
            </a>
          </li>
          <li>
            <a href="#contactos" className={activeSection === 'contactos' ? 'active' : ''} onClick={(e) => handleLinkClick(e, 'contactos')}>
              <FaEnvelope /> Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* ➡️ MINI-FOOTER MODIFICADO SIN REDES REPETIDAS */}
      <div className="sidebar-footer">
        
        {/* Selector de colores interactivo para el cliente */}
        <div className="color-picker-container">
          <p className="picker-title">Personalizar acento:</p>
          <div className="color-palette">
            {colores.map((color) => (
              <button
                key={color.name}
                className={`color-dot ${colorActivo === color.hex ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => cambiarColorAcento(color.hex)}
                title={`Tema ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Insignia de estado disponible */}
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <p>Disponible para Proyectos</p>
        </div>
        
        <p className="sidebar-copyright">
          &copy; {currentYear} | <span>Guido Banquet</span>
        </p>
      </div>
    </header>
  );
}