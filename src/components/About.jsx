import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      },
      { threshold: 0.1 } // Se activa cuando se ve el 10% de la sección
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="reveal-fade">
      {/* 1. Título principal en español */}
      <h1 className="heading">Sobre Mí</h1>
      <div className="divider"></div>
      
      {/* Corrección de 'mobiles' por 'móviles' en el texto */}
      <p className="parraf">
        Soy un desarrollador profesional especializado en la creación y mantenimiento de sitios web, aplicaciones para web,
        escritorio y móviles.<br></br>
        Mi función principal es traducir las ideas y requerimientos de un cliente o empresa en código informático, 
        permitiendo que estas ideas se materialicen en páginas web, programas de escritorio y aplicaciones móviles funcionales y atractivas!.
      </p>

      <div className="about-col">
        <div className="img-col">
          <img src="imagenes/image.png" alt="Guido Banquet"></img>
        </div>
        <div className="info-col">
          <h2>Desarrollador</h2>
          <p>
            Desde que comencé mi trayectoria como desarrollador tengo una confianza silenciosa,
            una curiosidad natural y trabajo constantemente para mejorar mis habilidades!.
          </p>
          
          <div className="icon-list-col">
            {/* 2. Primera columna de datos en español */}
            <div className="icon-list">
              <ul>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Cumpleaños : </strong><span>1 de mayo 1985</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Sitio Web : </strong><span>www.gbc.com</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Teléfono : </strong><span>3005535249</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Ciudad : </strong><span>Fonseca - La Guajira, Colombia.</span>
                </li>
              </ul>
            </div>
            
            {/* 3. Segunda columna de datos en español */}
            <div className="icon-list">
              <ul>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Edad : </strong><span>41</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Nivel : </strong><span>Semi-Junior</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Correo : </strong><span>bguido10@gmail.com</span>
                </li>
                <li>
                  <FaAngleRight className="about-icon" /><strong>Freelance : </strong><span>Disponible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}