import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    // Inicializamos el efecto de escritura con tu configuración original
    const typed = new Typed(el.current, {
      strings: ['Freelancer!', 'UI Designer!', 'Desarrollador Mobile!'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    // Esta función se ejecuta cuando el componente se destruye (evita fugas de memoria)
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home">
      <div className="home-row">
        <h1>Hola, Este es <br /> Guido Banquet <span>.</span></h1>
        <p>Soy un <span ref={el} className="auto-input"></span></p>
      </div>
    </section>
  );
}