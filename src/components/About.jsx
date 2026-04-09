import { ChevronRight } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    "Más de 8 años de experiencia en desarrollo web",
    "He liderado equipos de hasta 10 desarrolladores",
    "Mentor de más de 50 juniors en la industria",
    "Especialista en React, Node.js y arquitecturas Cloud"
  ];

  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-content">
          <div className="about-avatar-wrapper animate-fade-in">
            <div className="avatar-glass glass-panel">
              <span className="avatar-letter">I</span>
            </div>
            <div className="avatar-glow"></div>
          </div>

          <div className="about-text animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="about-heading text-primary">Ingeniero de Software & Mentor</h3>
            <p className="about-bio">
              Mi viaje en el desarrollo de software comenzó hace más de 8 años. Desde entonces, he tenido el privilegio de trabajar en agencias, startups y grandes corporaciones, enfocándome siempre en crear interfaces rápidas, accesibles y con un diseño estelar.
            </p>
            <p className="about-bio">
              Me apasiona compartir conocimiento. He ayudado a decenas de desarrolladores junior a acelerar sus carreras y encontrar su primer empleo en tech a través de mentorías 1 a 1 y creación de contenido educativo en la comunidad.
            </p>

            <ul className="about-highlights">
              {highlights.map((item, idx) => (
                <li key={idx} className="highlight-item">
                  <ChevronRight size={20} className="text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="about-cta">
              <a href="#contacto" className="btn btn-primary">Trabajemos juntos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
