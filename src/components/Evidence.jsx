import React, { useState, useEffect } from 'react';

// Estructura de datos completamente traducida al español
const evidenceData = [
  {
    id: 1,
    image: "/assets/aprendiendo-mobile.jpg",
    title: "Desarrollo Full-Stack y Móvil",
    desc: "Integración de lógica de servidor con interfaces móviles responsivas en tiempo real."
  },
  {
    id: 2,
    image: "/assets/codigo-react.jpg",
    title: "Código Limpio y Arquitectura",
    desc: "Escritura de código modular, limpio y mantenible bajo estándares modernos de React."
  },
  {
    id: 3,
    image: "/assets/siscan-vc.jpg",
    title: "Sistemas Empresariales",
    desc: "Despliegue y gestión de la plataforma SISCAN-VC en entornos de producción real corporativa."
  },
  {
    id: 4,
    image: "/assets/maquetacion.jpg",
    title: "Arquitectura UI/UX",
    desc: "Maquetación estructural y flujos de usuario enfocados en la usabilidad y estética del software."
  },
  {
    id: 5,
    image: "/assets/trabajoexcel.jpg",
    title: "Inteligencia de Datos y Automatización",
    desc: "Automatización de reportes y optimización de flujos administrativos mediante análisis de datos."
  }
];

export default function WorkingEvidence() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === evidenceData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? evidenceData.length - 1 : prevIndex - 1
    );
  };

  // --- LÓGICA DE AUTOPLAY EXCLUSIVA PARA MÓVILES (ADAPTADA A 850PX) ---
  useEffect(() => {
    // Sincronizado con el resto de tus secciones responsive a 850px
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    
    let intervalId = null;

    const handleAutoplay = () => {
      if (mediaQuery.matches) {
        // Si es tamaño móvil/tablet, activa el intervalo de 4 segundos
        intervalId = setInterval(() => {
          nextSlide();
        }, 4000);
      } else {
        // Si es pantalla grande, limpia cualquier intervalo activo
        if (intervalId) clearInterval(intervalId);
      }
    };

    // Ejecuta la comprobación al montar el componente
    handleAutoplay();

    // Escucha si el usuario cambia el tamaño de la pantalla
    mediaQuery.addEventListener('change', handleAutoplay);

    // Limpieza al desmontar el componente para evitar fugas de memoria
    return () => {
      if (intervalId) clearInterval(intervalId);
      mediaQuery.removeEventListener('change', handleAutoplay);
    };
  }, [currentIndex]); // Se ejecuta cada vez que cambia el slide para mantener el tiempo limpio

  return (
    <section id="evidence" className="evidence-section">
      {/* Título de la sección traducido */}
      <h1 className="evidence-title">
        Evidencia de <span className="gold-text">Trabajo</span>
      </h1>
      <div className="evidence-divider"></div>

      <div className="slider-wrapper">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {evidenceData.map((item) => (
            <div key={item.id} className="slide-item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="slide-image" 
                loading="lazy" 
              />
              <div className="slide-overlay">
                <h3 className="slide-card-title">{item.title}</h3>
                <p className="slide-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación interna */}
        <button onClick={prevSlide} className="slider-arrow arrow-left" aria-label="Diapositiva anterior">&#10094;</button>
        <button onClick={nextSlide} className="slider-arrow arrow-right" aria-label="Siguiente diapositiva">&#10095;</button>

        {/* Indicadores de posición inferiores traducidos para lectores de pantalla */}
        <div className="slider-dots">
          {evidenceData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot-btn ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}