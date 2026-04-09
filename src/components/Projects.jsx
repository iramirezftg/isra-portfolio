import { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, TorusKnot, MeshDistortMaterial } from '@react-three/drei';
import './Projects.css';

function FloatingTorus() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[2.5, 0.4, 128, 16]} position={[0, 0, -5]}>
        <MeshDistortMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.6}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={2}
          wireframe={true}
        />
      </TorusKnot>
    </Float>
  );
}

const projects = [
  {
    id: 1,
    title: 'Hackea tu Futuro',
    category: 'EdTech',
    image: '/images/project_edtech.png',
    description: 'Plataforma educativa con mentoría personalizada, AI Coach y un plan probado para conseguir tu primer trabajo tech.',
    stats: { 'Tasa de éxito': '95%', 'Juniors colocados': '50+' },
    link: 'https://hackeatufuturo.site/',
    github: 'https://github.com/iramirezftg/hackea-tu-futuro'
  },
  {
    id: 2,
    title: 'TalentTracker',
    category: 'HR Tech',
    image: '/images/project_hrtech.png',
    description: 'Sistema de gestión de talento y reclutamiento con pipeline automatizado y métricas de retención de empleados.',
    stats: { users: '5k+', companies: '100+' },
    link: 'https://hacktalent-latam.base44.app/',
    github: '#'
  },
  {
    id: 3,
    title: 'Genera México',
    category: 'Landing Page',
    image: '/images/project_landing.png',
    description: 'Landing page premium orientada a la generación de leads con alto ratio de conversión y optimización SEO.',
    stats: { conversion: '+50%', speed: '99/100' },
    link: 'https://generamexico.com',
    github: '#'
  },
  {
    id: 4,
    title: 'ShopHub',
    category: 'Marketplace',
    image: '/images/project_marketplace.png',
    description: 'Marketplace multi-vendedor con carrito de compras, pasarela de pagos integrada y panel de administración.',
    stats: { sales: '1M+', sellers: '500+' },
    link: 'https://chambaya.base44.app/',
    github: '#'
  }
];

const categories = ['Todos', 'EdTech', 'HR Tech', 'Landing Page', 'Marketplace'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section projects-section" id="proyectos">
      <div className="projects-3d-bg">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#22c55e" />
          <FloatingTorus />
        </Canvas>
      </div>

      <div className="container relative-content">
        <h2 className="section-title">Portafolio</h2>

        <div className="filters">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass-panel animate-fade-in">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href={project.link} className="btn-icon" aria-label="Ver en vivo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} className="btn-icon" aria-label="Ver código">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category text-primary">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description text-muted">{project.description}</p>
                
                <div className="project-stats">
                  {Object.entries(project.stats).map(([k, v]) => (
                    <div key={k} className="stat-pill">
                      <span className="stat-k text-muted">{k}:</span>
                      <span className="stat-v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
