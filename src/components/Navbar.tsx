import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const baseLink = "px-3 py-2 transition-colors duration-200 hover:text-secondary";
  const activeLink = "text-secondary font-bold border-b-2 border-secondary";
  
  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ease-in-out 
      ${!top ? 'bg-primary-dark/70 backdrop-blur-md shadow-lg py-3' : 'bg-primary-dark py-3'}`}>
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between">

          <div className="shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Teical Logo" className="w-10 h-10 object-contain" />
            </Link>
          </div>

          <nav className="hidden md:flex grow justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-300'}`}
                >
                  Home
                </NavLink>
                
              </li>
              <li>
                <NavLink 
                  to="/imoveis" 
                  className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-300'}`}
                >
                  Imóveis
                </NavLink>
              </li>
            </ul>
          </nav>

          <Link to="/login" className="btn-primary py-2 px-6 text-sm font-bold">
            Entrar
          </Link>

        </div>
      </div>
    </header>
  );
}