import React from "react";
// Importamos los iconos correspondientes desde react-icons/fa
import { 
  FaBriefcase, 
  FaTasks, 
  FaChartBar, 
  FaBinoculars, 
  FaSun, 
  FaMobileAlt,
  FaCode,
  FaLaptopCode 
} from 'react-icons/fa';

// Array de objetos con tus servicios reales y los iconos mapeados
const misServicios = [
  {
    id: 1,
    icon: <FaBriefcase />,
    title: "Enfoque Profesional",
    desc: "Nuestro enfoque para el diseño de sitios web es crear un sitio web que fortalezca la marca de su empresa y al mismo tiempo garantice la facilidad de uso y la simplicidad para su audiencia."
  },
  {
    id: 2,
    icon: <FaTasks />,
    title: "Automatización con Excel y VBA",
    desc: "Optimización de procesos operativos mediante macros avanzadas, UserForms interactivos y formatos de facturación automatizados a la medida de tu negocio."
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Desarrollo Web ",
    desc: "Construcción de aplicaciones web interactivas utilizando React.js y Vite en el frontend, garantizando arquitecturas modulares, limpias y eficientes."
  },
  {
    id: 4,
    icon: <FaBinoculars />,
    title: "Optimización y SEO",
    desc: "Mejorar y promocionar un sitio web con el fin de aumentar el número de visitantes que recibe, optimizando la velocidad de carga y rendimiento."
  },
  {
    id: 5,
    icon: <FaCode />,
    title: "Lógica de Software y Scripts",
    desc: "Creación de scripts de automatización lógicos en lenguajes como Python para simulación de procesos y procesamiento estructurado de datos."
  },
  {
    id: 6,
    icon: <FaMobileAlt />,
    title: "Diseño Website Responsivo",
    desc: "Tener un diseño responsivo significa que su sitio web cambia de tamaño de manera fluida para una visualización óptima independientemente del tamaño de la pantalla o del dispositivo."
  }
];

export default function Servicios() {
  return (
    <section id="servicios">
      <h1 className="heading">Services</h1>
      <div className="divider"></div>
      <p className="parrafo4">
        Ofrezco soluciones integrales de desarrollo y automatización de software. 
        Diseño herramientas y plataformas robustas orientadas a optimizar flujos de trabajo 
        y mejorar la experiencia digital en cualquier tipo de dispositivo.
      </p>

      <div className="servicios-row">
        {misServicios.map((servicio) => (
          <div className="servicios-box" key={servicio.id}>
            <div className="icon">
              {servicio.icon}
            </div>
            <div className="serv-info">
              <h4>{servicio.title}</h4>
              <p>{servicio.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}