import React from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';

// Mantengo exactamente tus mismos nombres de propiedades (image, link) para que no rompa nada
const proyectos = [
  {
    id: 1,
    title: "Juego de Memoria",
    desc: "Aplicación web interactiva y dinámica desarrollada en React para el estímulo de la agilidad mental.",
    image: "imagenes/port.png", 
    link: "https://github.com/guidostark37/juego-memoria"
  },
  {
    id: 2,
    title: "Sistema de Automatización Excel VBA",
    desc: "Formularios de facturación profesionales integrando UserForms dinámicos y automatización con macros avanzadas.",
    image: "imagenes/port.png",
    link: "#"
  },
  {
    id: 3,
    title: "Formulario por Pasos (Multi-Step Form)",
    desc: "Sistema de registro optimizado en React con TypeScript para segmentación inteligente de tipos de suscriptores.",
    image: "imagenes/port.png",
    link: "https://github.com/guidostark37/proyecto-React"
  },
  {
    id: 4,
    title: "Simulador de Brazo Robótico",
    desc: "Script interactivo de simulación lógica en Python aplicando cinemática para control de movimientos básicos.",
    image: "imagenes/port.png",
    link: "#"
  },
  {
    id: 5,
    title: "Plataforma de Clases en Vivo",
    desc: "Estructuración de flujos lógicos y setup técnico para transmisiones streaming de aprendizaje de código.",
    image: "imagenes/port.png",
    link: "#"
  },
  {
    id: 6,
    title: "Portafolio Web Profesional",
    desc: "Migración completa de arquitectura estática a un entorno modular moderno con React.js, Vite y Tailwind CSS.",
    image: "imagenes/port.png",
    link: "https://mi-portafolio-lime-eight.vercel.app/"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      {/* 🌟 CAMBIO VISUAL: Título público en español */}
      <h1 className="heading">Proyectos</h1>
      <div className="divider"></div>
      <p className="parrafo3">
        Una muestra selecta de las aplicaciones, integraciones lógicas y soluciones de software 
        que he desarrollado, abarcando desde entornos frontend interactivos hasta automatizaciones orientadas a procesos.
      </p>

      {/* Se mantienen intactas tus clases CSS originales (port-row, port-item, etc.) */}
      <div className="port-row">
        {proyectos.map((proyecto) => (
          <div className="port-item" key={proyecto.id}>
            <div className="port-img">
              {/* Añadido lazy loading para optimizar rendimiento en el cel sin tocar tus estilos */}
              <img src={proyecto.image} alt={proyecto.title} width="400" loading="lazy" />
            </div>
            <div className="port-info">
              <h4>{proyecto.title}</h4>
              <p>{proyecto.desc}</p>
              <a 
                href={proyecto.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver proyecto: ${proyecto.title}`}
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}