import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="section" id="contacto">
      <div className="container">
        <h2 className="section-title">Hablemos</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3 className="contact-heading">Conecta conmigo</h3>
            <p className="contact-desc text-muted">
              ¿Tienes un proyecto en mente, una propuesta de trabajo o simplemente quieres saludar? 
              Mi bandeja de entrada siempre está abierta.
            </p>

            <div className="contact-methods">
              <a href="mailto:israplenitud@gmail.com" className="contact-method-card glass-panel">
                <div className="method-icon"><Mail size={24} /></div>
                <div className="method-details">
                  <span className="method-label">Email</span>
                  <span className="method-value">israplenitud@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/527851058903" target="_blank" rel="noreferrer" className="contact-method-card glass-panel">
                <div className="method-icon"><Phone size={24} /></div>
                <div className="method-details">
                  <span className="method-label">WhatsApp</span>
                  <span className="method-value">+52 785 105 8903</span>
                </div>
              </a>

              <a href="https://twitter.com/isra_developer" target="_blank" rel="noreferrer" className="contact-method-card glass-panel">
                <div className="method-icon"><MessageSquare size={24} /></div>
                <div className="method-details">
                  <span className="method-label">Redes Sociales</span>
                  <span className="method-value">@isra_developer</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-panel">
            {formStatus === 'success' ? (
              <div className="success-state animate-fade-in">
                <CheckCircle size={64} className="text-primary" />
                <h3>¡Mensaje enviado!</h3>
                <p className="text-muted">Gracias por contactarme. Te responderé lo más pronto posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" required placeholder="Tu nombre" disabled={formStatus === 'submitting'} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required placeholder="tu@email.com" disabled={formStatus === 'submitting'} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" required rows="5" placeholder="¿En qué puedo ayudarte?" disabled={formStatus === 'submitting'}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>
                      <span>Enviar mensaje</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
