
import React, { useState } from 'react';
import { 
  Music, 
  User, 
  Briefcase, 
  Mail, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Clock, 
  Play, 
  Award,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

/**
 * COMPONENTE DE NAVEGAÇÃO (HEADER)
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tighter text-white">HUMANO<span className="text-neutral-500 italic">Studio</span></h1>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-neutral-800">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

/**
 * SEÇÃO HOME (HERO)
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Overlay com brilho sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
          HUMANO <span className="text-neutral-500">Studio</span>
        </h2>
        <p className="text-lg md:text-2xl text-neutral-400 font-light mb-10 tracking-wide">
          "Onde a essência humana encontra a vibração da arte e a tecnologia do som."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sobre" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all transform hover:scale-105">
            Conheça o Studio
          </a>
          <a href="#portfolio" className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-800 transition-all transform hover:scale-105">
            Ver Portfólio
          </a>
          <a href="https://wa.me/5532991064759" target="_blank" className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all flex items-center justify-center gap-2">
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * SEÇÃO SOBRE / BIOGRAFIA
 */
const About: React.FC = () => {
  const timeline = [
    { year: '2001', event: 'Superação: Após acidente, Fabio desenvolveu novas abordagens musicais.' },
    { year: '2008', event: 'Renascimento: Fundação do Projeto HUMANO e retorno à música inovadora.' },
    { year: 'Hoje', event: 'Referência: Atuação em grandes estúdios e produções para audiovisual.' }
  ];

  return (
    <section id="sobre" className="py-24 bg-neutral-900 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-xs uppercase tracking-widest mb-6">
            <User size={14} /> Quem Sou
          </div>
          <h3 className="text-4xl font-bold mb-6">Fabio Benedetti</h3>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Fabio Benedetti é produtor musical, músico e pesquisador dedicado, com experiência em desenvolver trabalhos em estúdios de São Paulo, Rio de Janeiro e Minas Gerais.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Em sua jornada musical, participou de festivais, gravações e contribuiu com trilhas sonoras para vídeos corporativos, anúncios publicitários e outros projetos audiovisuais de destaque nacional.
          </p>
          <div className="space-y-6 mt-10">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="text-white font-bold text-xl group-hover:text-neutral-500 transition-colors">{item.year}</div>
                <div className="w-px h-full bg-neutral-800 mt-2"></div>
                <p className="text-neutral-400 text-sm">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Fabio Benedetti" 
              className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" 
            />
          </div>
          {/* Elemento decorativo */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

/**
 * SEÇÃO PORTFÓLIO
 */
const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Trilhas Sonoras',
      desc: 'Composições exclusivas para vídeos corporativos, anúncios e cinema.',
      icon: <Award className="text-neutral-500" size={32} />
    },
    {
      title: 'Produção Musical',
      desc: 'Gravação, mixagem e masterização com foco na identidade do artista.',
      icon: <Music className="text-neutral-500" size={32} />
    },
    {
      title: 'Projetos Artísticos',
      desc: 'Iniciativas inovadoras como o Projeto HUMANO.',
      icon: <Play className="text-neutral-500" size={32} />
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-neutral-400 text-xs uppercase tracking-widest mb-6">
            <Briefcase size={14} /> Portfólio
          </div>
          <h3 className="text-4xl font-bold">Produções de Impacto</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-500 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h4 className="text-xl font-bold mb-4">{p.title}</h4>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-300 group-hover:text-white">
                Saber Mais <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * SEÇÃO NEWSLETTER
 */
const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-24 bg-white text-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6">Junte-se à nossa rede</h3>
        <p className="text-neutral-600 mb-10 max-w-xl mx-auto">
          Receba atualizações sobre novos projetos, técnicas musicais e novidades do estúdio diretamente no seu e-mail.
        </p>
        
        {/* EXPLICAÇÃO PARA O FABIO: Este formulário é visual por enquanto. */}
        {/* Futuramente, para usar o FIREBASE, você trocará a lógica aqui. */}
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            className="flex-1 px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-neutral-800 transition-all"
            onClick={() => alert('Obrigado! Em breve integraremos esta área ao Firebase.')}
          >
            Cadastrar
          </button>
        </form>
        <p className="text-[10px] text-neutral-400 mt-4 uppercase tracking-tighter">
          * Prometemos não enviar spam. Apenas arte e som.
        </p>
      </div>
    </section>
  );
};

/**
 * SEÇÃO CONTATO
 */
const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-neutral-900 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-400 text-xs uppercase tracking-widest mb-6">
            <Mail size={14} /> Fale Conosco
          </div>
          <h3 className="text-4xl font-bold mb-8">Vamos criar algo humano juntos?</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase">WhatsApp</p>
                <p className="text-white">+55 32 99106-4759</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-neutral-400 text-xs uppercase">E-mail</p>
                <p className="text-white">humanoprojeto@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a 
              href="https://wa.me/5532991064759" 
              target="_blank" 
              className="inline-flex items-center gap-4 px-10 py-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all font-bold text-lg shadow-xl hover:-translate-y-1"
            >
              FALE DIRETO NO WHATSAPP
            </a>
          </div>
        </div>

        <div className="bg-neutral-800 p-8 rounded-2xl">
          <h4 className="text-xl font-bold mb-6">Mande uma mensagem</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Seu Nome</label>
              <input type="text" className="w-full bg-neutral-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-white outline-none text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Seu E-mail</label>
              <input type="email" className="w-full bg-neutral-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-white outline-none text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Assunto</label>
              <input type="text" className="w-full bg-neutral-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-white outline-none text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase text-neutral-500 mb-1">Mensagem</label>
              <textarea rows={4} className="w-full bg-neutral-700 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-white outline-none text-white"></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-all"
              onClick={() => alert('Mensagem enviada (apenas demonstração)!')}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/**
 * RODAPÉ (FOOTER)
 */
const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-neutral-900 bg-black px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-white">HUMANO<span className="text-neutral-500 italic">Studio</span></h1>
          <p className="text-neutral-500 text-sm mt-2">© 2024 Fabio Benedetti. Todos os direitos reservados.</p>
        </div>
        
        <div className="flex gap-6 text-neutral-400">
          <a href="https://www.instagram.com/fabio.humano/" target="_blank" className="hover:text-white transition-colors"><Instagram size={24} /></a>
          <a href="https://facebook.com/fabiobndtt" target="_blank" className="hover:text-white transition-colors"><Facebook size={24} /></a>
          <a href="https://www.tiktok.com/@fabiohumano" target="_blank" className="hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-3.99 3.02-7.52 7.03-7.55.07 0 .14 0 .21.01v4.29c-.71-.04-1.42.12-2.05.47-.78.41-1.33 1.16-1.48 2.03-.26.96.11 2.03.88 2.65.65.57 1.54.81 2.39.67.89-.09 1.71-.62 2.19-1.39.3-.47.45-1.01.44-1.57.03-4.08.02-8.16.03-12.25z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

/**
 * COMPONENTE APP PRINCIPAL
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Newsletter />
      <Contact />
      <Footer />
      
      {/* BOTÃO FLUTUANTE DE SUPORTE/GUIA RÁPIDO (EXCLUSIVO PARA O DESENVOLVEDOR) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => alert(`GUIA DO FABIO:\n\n1. Imagens: Procure as tags <img src="..."> e troque pelo link da sua foto no GitHub.\n2. Textos: Estão todos dentro dos componentes (Sobre, Hero, etc).\n3. GitHub: Basta subir os arquivos no seu repositório /studio e ativar o "GitHub Pages" nas configurações.`)}
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          title="Ajuda do Desenvolvedor"
        >
          <Clock size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;
