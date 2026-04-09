import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Israel<span className="text-primary">.dev</span></span>
            <p className="footer-bio text-muted">
              Construyendo software excepcional y empoderando a la próxima generación de desarrolladores.
            </p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-subtitle">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-subtitle">Sígueme</h4>
            <div className="social-icons">
              <a href="https://github.com/isra_developer" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/isra_developer" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/isra_developer" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-muted">
          <p>&copy; {currentYear} Israel (@isra_developer). Todos los derechos reservados.</p>
          <p>
            Diseñado y construido con <span className="text-primary">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
