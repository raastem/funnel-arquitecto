import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Zap, 
  Monitor, 
  ShieldCheck, 
  XCircle, 
  Calendar 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  // Although isMenuOpen is defined, it wasn't used in the provided snippet. 
  // Keeping it in case we want to expand the navbar for mobile later.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // WhatsApp link with pre-filled message
  const whatsappLink = "https://wa.me/573016603493?text=Hola%2C%20quiero%20agendar%20mi%20auditor%C3%ADa%20de%20embudo.";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                FUNNEL ARCHITECT
              </span>
            </div>
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('audit')}
                className="bg-white text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300"
              >
                Agendar Auditoría
              </button>
            </div>
            {/* Mobile Menu Button placeholder - functional implementation would go here */}
            <div className="md:hidden">
                <button 
                  onClick={() => scrollToSection('audit')}
                  className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-bold"
                >
                  Agendar
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Disponible para 4 nuevos proyectos este mes
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in [animation-delay:200ms]">
            Tu oferta es excelente.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Tu sistema para venderla, no.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:400ms]">
            Diseño y construyo Embudos de Venta Automatizados para Infoproductores, Closers y Growth Partners que están cansados de dejar dinero sobre la mesa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            <button 
              onClick={() => scrollToSection('audit')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              <Calendar className="w-5 h-5 mr-2" />
              QUIERO MI AUDITORÍA GRATIS
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-slate-300 border border-slate-700 hover:bg-slate-800 transition-all"
            >
              Ver cómo funciona
            </button>
          </div>
        </div>
      </header>

      {/* Pain Points (The Problem) */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">¿Te suena familiar este escenario?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-rose-500" />,
                title: "Tráfico a la basura",
                desc: "Pagas ads o creas contenido orgánico, pero la gente se pierde en una web confusa antes de llegar al checkout."
              },
              {
                icon: <XCircle className="w-10 h-10 text-rose-500" />,
                title: "Leads Basura",
                desc: "Tu equipo de ventas (o tú) pierden tiempo con curiosos porque tu embudo no filtró a los clientes reales."
              },
              {
                icon: <Monitor className="w-10 h-10 text-rose-500" />,
                title: "Pesadilla Técnica",
                desc: "Pasas más tiempo peleando con ClickFunnels o WordPress que cerrando tratos o creando contenido."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-rose-500/30 transition-colors group">
                <div className="bg-rose-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-100">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                No vendo "páginas bonitas".<br />
                <span className="text-indigo-400">Vendo Arquitectura de Ventas.</span>
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                Lo que obtienes no es solo diseño, es un activo digital que trabaja 24/7 mientras tú duermes o cierras ventas.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Copywriting Psicológico", desc: "Textos que derriban objeciones antes de que el cliente las piense." },
                  { title: "Diseño UX/UI Sin Fricción", desc: "Una experiencia tan fluida que comprar es el paso lógico." },
                  { title: "Automatización Invisible", desc: "Integración total. Tú solo ves la notificación de Stripe." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-indigo-500/20 p-1 rounded-full h-fit flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-200">{feature.title}</h4>
                      <p className="text-slate-400 text-sm sm:text-base">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual representation of a funnel */}
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span className="text-sm font-mono text-slate-400">ads_traffic_source</span>
                  </div>
                  <span className="text-green-400 font-mono text-sm">+1,200 clicks</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600" /></div>
                <div className="bg-indigo-900/20 p-6 rounded-lg border border-indigo-500/30 text-center">
                  <h3 className="font-bold text-indigo-300">LANDING DE CAPTURA</h3>
                  <p className="text-xs text-indigo-400/60 mt-1">Optimización VSL + Formulario</p>
                </div>
                <div className="flex justify-center"><ArrowRight className="rotate-90 text-slate-600" /></div>
                <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-500/30 flex justify-between items-center">
                  <span className="font-bold text-emerald-300">CHECKOUT / AGENDA</span>
                  <span className="bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded">CONVERSIÓN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">¿Para quién construyo?</h2>
            <p className="text-slate-400 mt-4">Solo trabajo con perfiles listos para escalar.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Infoproductores", desc: "Que quieren pasar de $5k a $50k/mes y su sistema actual se rompe." },
              { title: "Closers de Ventas", desc: "Que quieren ofrecer servicio 'Done-For-You' a sus clientes." },
              { title: "Growth Partners", desc: "Que necesitan implementar sistemas rápidos para su cartera." },
              { title: "Dueños de Negocio", desc: "High-ticket services que necesitan agenda llena." }
            ].map((persona, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center hover:-translate-y-1 transition-transform duration-300 hover:border-indigo-500/30">
                <h3 className="font-bold text-lg mb-3 text-white">{persona.title}</h3>
                <p className="text-sm text-slate-400">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">El Método de 3 Fases</h2>
          
          <div className="space-y-8">
            {[
              { step: "01", title: "Disección", desc: "Analizo tu oferta, tu avatar y tus métricas actuales. Nada se construye a ciegas." },
              { step: "02", title: "Construcción", desc: "Monto la estructura, el copy persuasivo y el diseño en tiempo récord (máx 7 días)." },
              { step: "03", title: "Optimización", desc: "Entrego el embudo listo para recibir tráfico. Instalamos pixel y probamos flujo." }
            ].map((phase, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors">
                <span className="text-4xl font-black text-slate-800/80 font-mono select-none">{phase.step}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-indigo-400">{phase.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer & Guarantee */}
      <section className="py-20 bg-indigo-950/50 border-y border-indigo-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 rounded-full bg-indigo-900/50 mb-6">
            <ShieldCheck className="w-8 h-8 text-indigo-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Garantía de Claridad Absoluta</h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Si el diseño no refleja la calidad de tu marca en la primera revisión, lo re-hago completamente gratis hasta que estemos alineados.
          </p>
          
          <div className="bg-slate-950 rounded-2xl p-8 md:p-12 border border-slate-800 text-left max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-bl-full -z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Pack "Conversión Total"</h3>
                  <p className="text-slate-400">Todo lo que necesitas para vender</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-sm font-bold border border-emerald-500/20">
                  MÁS POPULAR
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Landing Page de Captura + Estructura VSL",
                  "Página de Agendamiento o Checkout optimizado",
                  "Secuencia de Thank You Page (Upsells)",
                  "BONUS: Instalación de Pixel de seguimiento",
                  "BONUS: Copywriting completo incluido"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => scrollToSection('audit')}
                className="w-full py-4 bg-white text-slate-950 font-bold text-lg rounded-lg hover:bg-indigo-50 transition-colors text-center block"
              >
                QUIERO ESTE SISTEMA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Audit) */}
      <section id="audit" className="py-24 bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">¿Listo para dejar de perder leads?</h2>
          <p className="text-slate-400 text-lg mb-10">
            No busco "clientes", busco casos de éxito. Solo trabajo con 4 proyectos al mes para garantizar calidad extrema.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:shadow-[0_0_50px_rgba(79,70,229,0.7)] group"
          >
            <Zap className="w-6 h-6 mr-2 fill-current group-hover:text-yellow-300 transition-colors" />
            AGENDAR MI AUDITORÍA AHORA
          </a>
          <p className="mt-6 text-sm text-slate-600">
            Sin compromiso. Si no encajamos, te daré 3 consejos gratis para mejorar tu web actual.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Funnel Architect. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;