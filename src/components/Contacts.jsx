import React from "react";
// Importamos los iconos necesarios desde react-icons/fa
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contacts() {
  return (
    <section id="contactos">
      <h1 className="heading">Contacts</h1>
      <div className="divider"></div>
      <p className="parrafo5">
        ¿Tienes un proyecto en mente o una oportunidad de colaboración? Ponte en contacto conmigo. 
        Estoy disponible para desarrollar aplicaciones web, automatizaciones en Excel o escuchar tus propuestas.
      </p>

      <div className="contact-row">
        {/* Columna Izquierda: Información de contacto y Mapa */}
        <div className="contac-left">
          
          <div className="icon-box">
            <div className="icon">
              <FaEnvelope />
            </div>
            <div className="info">
              <h4>Email:</h4>
              <p>bguido10@gmail.com</p>
            </div>
          </div>

          <div className="icon-box">
            <div className="icon">
              <FaPhone />
            </div>
            <div className="info">
              <h4>Call:</h4>
              <p>+57 3005535249</p>
            </div>
          </div>

          <div className="icon-box">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info">
              <h4>Location:</h4>
              <p>Fonseca - La Guajira, Colombia</p>
            </div>
          </div>

          {/* Contenedor del Mapa de Google */}
          <div className="mapa">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.283115454655!2d-72.85501865!3d10.892305599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b625cf01b6bf5%3A0x6b4fb6fb8b7b203c!2sFonseca%2C%20La%20Guajira!5e0!3m2!1ses!2sco!4v1716000000000!5m2!1ses!2sco"
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Fonseca La Guajira"
            />
          </div>

        </div>

        {/* Columna Derecha: Formulario de Contacto */}
        <div className="contac-right">
          <form action="https://formsubmit.co/bguido10@gmail.com" method="POST">
            <input type="text" name="name" id="name" placeholder="Your name" required />
            <input type="email" name="email" id="email" placeholder="Your Email" required />
            <input type="text" name="subject" id="subject" placeholder="Subject" required />
            <textarea name="msg" id="msg" rows="9" placeholder="Your Message" required></textarea>
            
            <input type="submit" value="Send Message" />
            
            {/* Opciones de FormSubmit (El link de redirección se puede ajustar al de Vercel después) */}
            <input type="hidden" name="_next" value="https://mi-portafolio-lime-eight.vercel.app/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </div>
    </section>
  );
}