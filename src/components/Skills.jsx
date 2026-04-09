import { useState, useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', progress: 95 },
      { name: 'TypeScript', progress: 90 },
      { name: 'CSS / Tailwind', progress: 98 },
      { name: 'Framer Motion', progress: 85 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', progress: 92 },
      { name: 'Python / Django', progress: 80 },
      { name: 'GraphQL', progress: 85 },
      { name: 'Go', progress: 60 }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', progress: 88 },
      { name: 'MongoDB', progress: 90 },
      { name: 'Redis', progress: 75 },
      { name: 'Supabase', progress: 85 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', progress: 80 },
      { name: 'Docker', progress: 85 },
      { name: 'CI/CD (Actions)', progress: 90 },
      { name: 'Vercel / Netlify', progress: 95 }
    ]
  }
];

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function CountUp({ to, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const increment = to / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [to, isVisible]);

  return <span>{count}%</span>;
}

export default function Skills() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`skill-category glass-panel ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <h3 className="category-title text-primary">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent text-primary">
                        <CountUp to={skill.progress} isVisible={isVisible} />
                      </span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: isVisible ? `${skill.progress}%` : '0%',
                          transitionDelay: `${(idx * 0.1) + (sIdx * 0.1)}s` 
                        }}
                      >
                        <div className="progress-glow-dot"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
