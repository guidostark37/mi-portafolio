import React, { useEffect, useState, useRef } from 'react';

export default function Resume(){
   const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef(null);

   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setIsVisible(true);
         } else {
           setIsVisible(false); // Reinicia el estado al salir de la sección para scroll continuo
         }
       },
       { threshold: 0.1 } // Se activa al asomarse el 10% de la sección
     );

     if (sectionRef.current) observer.observe(sectionRef.current);
     return () => {
       if (sectionRef.current) observer.unobserve(sectionRef.current);
     };
   }, []);

   return (
     <section id="resume" ref={sectionRef}>
        <h1 className="heading">Resume</h1>
        <div className="divider"></div>
        <p className="parrafo2">
          Resumen detallado de mi formación académica y trayectoria profesional, enfocado en la 
          creación de soluciones eficientes, arquitectura de software moderna y automatización de procesos.
        </p>

        {/* Añadimos dinámicamente 'animate-row' cuando entra en el viewport */}
        <div className={`resume-row ${isVisible ? 'animate-row' : ''}`}>

            {/* Columna Izquierda: Resumen y Educación */}
            <div className="resume-cols">
                <h2>Summary</h2>
                <div className="my-info card-1">
                    <h3>Guido Banquet</h3>
                    <p>
                      Desarrollador Full-Stack dedicado a traducir requerimientos y flujos lógicos en aplicaciones 
                      web, móviles y de escritorio atractivas y funcionales. Especialista en la optimización de tareas 
                      mediante programación orientada a datos y automatización avanzada.
                    </p>
                    <ul>
                        <li>Fonseca - La Guajira, Colombia</li>
                        <li>(+57) 300 553 5249</li>
                        <li>bguido10@gmail.com</li>
                    </ul>
                </div>

                <h2>Education</h2>
                <div className="my-edu card-2">
                    <h3>TECNÓLOGO en Análisis y Desarrollo de Sistemas</h3>
                    <span className="sp-box">2022-2024</span>
                    <p>Centro Agroempresarial Y Acuicola Sena</p>
                    <p>
                      Formación integral enfocada en el ciclo de vida del software, diseño de bases de datos relacionales, 
                      recolección de requerimientos, algoritmia y buenas prácticas de codificación.
                    </p>
                </div>
            </div>

            {/* Columna Derecha: Experiencia Profesional */}
            <div className="resume-cols">
                <h2>Professional Experience</h2>
                
                <div className="pro-exp card-3"> 
                    <h3>Desarrollador  (Freelance)</h3>
                    <span className="sp-box">2024-Presente</span>
                    <ul>
                        <li>Diseño, desarrollo y migración de aplicaciones web utilizando arquitecturas modernas con React.js, Vite y maquetación en Tailwind CSS.</li>
                        <li>Construcción e integración de lógicas backend eficientes y APIs estructuradas empleando frameworks como Laravel.</li>
                        <li>Control de versiones riguroso y despliegue continuo de aplicaciones mediante Git, GitHub y plataformas en la nube como Vercel.</li>
                    </ul>
                </div>

                <div className="pro-exp card-4"> 
                    <h3>Especialista en Automatización & VBA</h3>
                    <span className="sp-box">2024-Presente</span>
                    <ul>
                        <li>Desarrollo de macros complejas en VBA, automatización de eventos dinámicos (`Worksheet_Change`) y diseño de UserForms interactivos.</li>
                        <li>Creación de plantillas de facturación estructuradas, formatos automatizados y sistemas lógicos de validación para control administrativo.</li>
                        <li>Análisis de datos e interconexión de lógica de negocio rápida para la resolución de flujos de trabajo administrativos complejos.</li>
                    </ul>
                </div>
               
            </div>

        </div>
     </section>
   );
}