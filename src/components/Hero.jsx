import { useEffect, useState } from 'react';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './Hero.css';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}<span className="cursor">|</span></span>;
};

const STATS = [
  { label: "Años de Exp.", value: "8+" },
  { label: "Proyectos", value: "4+" },
  { label: "Usuarios Alcanzados", value: "200K+" },
  { label: "Juniors Mentoreados", value: "50+" }
];

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      
      {/* Social Sidebar */}
      <div className="social-sidebar">
        <a href="https://github.com/isra_developer" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/isra_developer" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="https://tiktok.com/@isra_developer" target="_blank" rel="noreferrer" className="social-link" aria-label="TikTok">
          <FaTiktok size={22} />
        </a>
        <div className="sidebar-line"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="greeting text-primary">Hola, mi nombre es</p>
          <h1 className="name-title">
            <Typewriter text="Israel (@isra_developer)" delay={80} />
          </h1>
          <h2 className="subtitle text-muted">Construyo experiencias web de alto impacto.</h2>
          
          <p className="hero-bio">
            Soy un ingeniero de software especializado en crear productos digitales 
            elegantes, accesibles y escalables. Me apasiona el Frontend, el diseño 
            de interfaces y ayudar a otros desarrolladores a crecer en la industria.
          </p>

          <div className="hero-ctas">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-outline">Contactar</a>
          </div>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-card glass-panel" style={{animationDelay: `${0.2 * i}s`}}>
                <div className="stat-value text-primary">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#proyectos" className="scroll-indicator">
        <span className="scroll-text">Descubre más</span>
        <ChevronDown size={24} className="scroll-icon" />
      </a>
    </section>
  );
}
