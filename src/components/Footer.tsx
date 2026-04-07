import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-400 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Teical" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-secondary mt-3">Teical</span>
          </div>
          <p className="text-sm leading-relaxed">
            A Inteligência que arremata. 
          </p>
        </div>

        <div>

          <ul className="flex flex-col gap-2 text-sm mt-5">
            <li><Link to="/imoveis" className="hover:text-secondary transition-colors">Imóveis</Link></li>
            <li><Link to="/" className="hover:text-secondary transition-colors">Notícias</Link></li>
            <li><Link to="/" className="hover:text-secondary transition-colors">Conexões</Link></li>
          </ul>
        </div>

        <div>

          <ul className="flex flex-col gap-2 text-sm mt-5">
            <li><Link to="/quem-somos" className="hover:text-secondary transition-colors">Quem somos</Link></li>
            <li><Link to="/" className="hover:text-secondary transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/*
        <div>
          <ul className="flex flex-col gap-2 text-sm mt-5">
            <li><Link to="/" className="hover:text-secondary transition-colors">Privacidade</Link></li>
            <li><Link to="/" className="hover:text-secondary transition-colors">Termos de Uso</Link></li>
          </ul>
        </div>
        */}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4 text-xs">
        <p>© 2026 Teical. Todos os direitos reservados.</p>
        {/*
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary">LinkedIn</a>
          <a href="#" className="hover:text-secondary">Instagram</a>
        </div>
        */}
      </div>
    </footer>
  );
}