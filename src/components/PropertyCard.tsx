import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';

export function PropertyCard() {
  return (
    <Link to="/" className="bg-secondary-dark/10 rounded-lg overflow-hidden border border-transparent hover:border-secondary transition-all group flex h-36 w-80 relative">

      <div className="absolute top-2 right-2 z-20 bg-secondary text-primary font-black text-[10px] w-10 h-5 rounded-full flex items-center justify-center shadow-lg border border-black/10">
        85/100
      </div>

      <div className="relative w-33 h-full bg-gray-800 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" 
          alt="Imóvel" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-sm p-1 rounded-md z-10">
          <img src="/fogo.svg" alt="Destaque" className="w-4 h-4" />
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between w-full min-w-0">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold text-sm truncate leading-tight pr-6">Nome do Imóvel</h3>
          <p className="text-gray-500 text-[10px] truncate">Cidade, UF</p>

          <div className="flex gap-2 mt-1">
            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded-md text-secondary border border-secondary/20">
              <HotelIcon sx={{ fontSize: 12 }} />
              <span className="text-[10px] font-bold text-white">2</span>
            </div>
            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded-md text-secondary border border-secondary/20">
              <ShowerIcon sx={{ fontSize: 12 }} />
              <span className="text-[10px] font-bold text-white">2</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-gray-500 text-[9px] line-through decoration-gray-500">
            R$ 1.200.000,00
          </span>
          <span className="text-green-500 text-lg font-black leading-none">
            R$ 600.000,00
          </span>
        </div>
      </div>
    </Link>
  );
}