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
  if (!isVisible) {
    setCurrentProgress(0);
    return;
  }

  const duration = 3000; // 3 segundos
  const startTime = performance.now();
  let animationFrameId;

  const updateNumber = (now) => {
    const elapsedTime = now - startTime;
    const progressFraction = Math.min(elapsedTime / duration, 1);
    
    setCurrentProgress(Math.floor(progressFraction * targetProgress));

    if (progressFraction < 1) {
      // Sigue el bucle si no ha terminado
      animationFrameId = requestAnimationFrame(updateNumber);
    } else {
      setCurrentProgress(targetProgress); // Asegura el número final exacto
    }
  };

  // Arranca la animación en el siguiente frame libre
  animationFrameId = requestAnimationFrame(updateNumber);

  //  Si el componente cambia o se desmonta, apaga el bucle de inmediato
  return () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  };
}, [isVisible, targetProgress]); // Agregamos dependencias limpias
 return (
    <div className="progress-box" ref={elementRef}>
      <h3>
        <div className="skill-name">
          {icon}
          {skillName}
        </div>
        <span>{currentProgress}%</span>
      </h3>
      <div className="bar">
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