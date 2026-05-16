import React, { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaLaravel, FaFileExcel } from "react-icons/fa";


// Componente secundario para animar el número individualmente
const AnimatedProgress = ({ skillName, icon, targetProgress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        // Al salir de la sección, reiniciamos los estados para que se pueda volver a animar
        setIsVisible(false);
        setCurrentProgress(0); 
      }
    },
    { threshold: 0.1 } // Activa/desactiva cuando se ve el 10% de la barra
  );

  if (elementRef.current) observer.observe(elementRef.current);
  return () => {
    if (elementRef.current) observer.unobserve(elementRef.current);
  };
}, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animación del número contador que va de 0 al objetivo
    let start = 0;
    const duration = 3000; // 3 segundos en total igual que la barra
    const increment = targetProgress / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetProgress) {
        clearInterval(timer);
        setCurrentProgress(targetProgress);
      } else {
        setCurrentProgress(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetProgress]);

  return (
    <div className="progress-box" ref={elementRef}>
      <h3>
        <div className="skill-name">
          {icon}
          {skillName}
        </div>
        {/* El número subirá dinámicamente */}
        <span>{currentProgress}%</span>
      </h3>
      <div className="bar">
        {/* La barra crecerá gracias al CSS transition y al ancho dinámico */}
        <div 
          className="progress" 
          style={{ width: isVisible ? `${targetProgress}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="heading">Skills</h1>
      <div className="divider"></div>
      <p className="parraf">
        A lo largo de mi carrera como desarrollador e instructor, he adquirido un conjunto sólido de habilidades 
        técnicas enfocadas en el desarrollo frontend, backend y la automatización de procesos, permitiéndome 
        entregar soluciones de software completas y eficientes.
      </p>

      <div className="skills-row">
        {/* Columna Izquierda */}
        <div className="skills-col">
          <AnimatedProgress 
            skillName={<em>HTML</em>} 
            icon={<FaHtml5 className="skill-icon html-icon" />} 
            targetProgress={85} 
          />
          <AnimatedProgress 
            skillName={<em>Javascript</em>} 
            icon={<FaJsSquare className="skill-icon js-icon" />} 
            targetProgress={65} 
          />
          <AnimatedProgress 
            skillName={<em>React.js</em>} 
            icon={<FaReact className="skill-icon react-icon" />} 
            targetProgress={90} 
          />
        </div>

        {/* Columna Derecha */}
        <div className="skills-col">
          <AnimatedProgress 
            skillName={<em>CSS</em>} 
            icon={<FaCss3Alt className="skill-icon css-icon" />} 
            targetProgress={85} 
          />
          <AnimatedProgress 
            skillName={<em>Laravel</em>} 
            icon={<FaLaravel className="skill-icon laravel-icon" />} 
            targetProgress={85} 
          />
          <AnimatedProgress 
            skillName={<em>Excel & VBA</em>} 
            icon={<FaFileExcel className="skill-icon excel-icon" />} 
            targetProgress={95} 
          />
        </div>
      </div>
    </section>
  );
}