import React,{ useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function About (){
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

    return(
    
    <section id="about" ref={sectionRef} className="reveal-fade">
      <h1 className="heading">About Me</h1>
      <div className="divider"></div>
      <p className="parraf">
        Soy un desarrollador profesional especializado en la creación y mantenimiento de sitios web, aplicaciones para web,
        escritorio y mobiles.<br></br>
        Mi función principal es traducir sus ideas y requerimientos de un cliente o empresa en código informático, 
        permitiendo que estas ideas se materialicen en páginas web, programas de escritorio y aplicaciones mobiles funcionales y atractivas!.</p>

    <div className="about-col">
        <div className="img-col">
            <img src="imagenes/image.png" alt=""></img>
        </div>
        <div className="info-col">
            <h2>Desarrollador</h2>
            <p>Desde que comencé mi trayectoria como desarrollador tengo una confianza silenciosa,
                una curiosidad natural y trabajo constantemente para mejorar mis habilidades!.</p>
            
            <div className="icon-list-col">
            
                <div className="icon-list">
                    <ul>
                        <li><FaAngleRight className="about-icon" /><strong>Birthday : </strong><span>1 may 1985</span></li>
                <li><FaAngleRight className="about-icon" /><strong>Website : </strong><span>www.gbc.com</span></li>
                <li><FaAngleRight className="about-icon" /><strong>Phone : </strong><span>3005535249</span></li>
                <li><FaAngleRight className="about-icon" /><strong>City : </strong><span>Fonseca-La guajira, Colombia.</span></li>
                    </ul>
                </div>
                
                <div className="icon-list">
                  <ul>
                <li><FaAngleRight className="about-icon" /><strong>Age : </strong><span>41</span></li>
                <li><FaAngleRight className="about-icon" /><strong>Degree : </strong><span>Semi-Junior</span></li>
                <li><FaAngleRight className="about-icon" /><strong>Email : </strong><span>bguido10@gmail.com</span></li>
                <li><FaAngleRight className="about-icon" /><strong>Freelancer : </strong><span>Available</span></li>
              </ul>
                </div>
            </div>
        </div>
    </div>


    </section>
    );
    }