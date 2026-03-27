import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  // Base style to link labels
  const baseLink = "px-3 py-2 transition-colors duration-200 hover:text-secondary";
  // Style for active link
  const activeLink = "text-secondary font-bold border-b-2 border-secondary";
  
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-primary-dark shadow-sm">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
        <img 
          src="/logo.svg" 
          alt="Teical Logo" 
          className="w-10 h-10 object-contain" 
        />
      </Link>
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-300'}`}
          >
            Home
          </NavLink>
        </li>
      </ul>

      <Link 
        to="/login" 
        className="btn-primary py-2"
      >
        Entrar
      </Link>
    </nav>
  );
}