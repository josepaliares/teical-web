import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import ShowerIcon from '@mui/icons-material/Shower';

interface PropertyProps {
  status: 'green' | 'yellow' | 'red'; // Estado do imóvel
}

export function PropertyListCard({ status = 'green' }: PropertyProps) {
  
  // Mapeamento de cores para a bolinha de status
  const statusColors = {
    green: 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    yellow: 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]',
    red: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
  };

  return (
    <Link to="/imovel" className="bg-black/50 rounded-xl overflow-hidden hover:border-2 border-secondary transition-all group flex h-40 w-full h-auto max-w-2xl relative">

      <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`}></div>
      </div>

      {/* Imagem (Mantida a proporção, mas um pouco maior) */}
      <div className="relative w-1/3 h-auto bg-gray-800 shrink-0">
        <img 
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" 
          alt="Imóvel" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

      </div>

      {/* Detalhes Expandidos */}
      <div className="p-4 flex flex-col justify-between w-full min-w-0">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-bold text-base truncate leading-tight pr-4">Nome do Imóvel em Leilão</h3>
          </div>
          <p className="text-gray-500 text-xs truncate">Bairro Nobre, Cidade - UF</p>

          <div className="flex gap-3 mt-2 mb-2">
            <div className="flex items-center gap-1.5 text-gray-400">
              <HotelIcon sx={{ fontSize: 16 }} className="text-secondary" />
              <span className="text-xs font-medium text-gray-200">3 Quartos</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <ShowerIcon sx={{ fontSize: 16 }} className="text-secondary" />
              <span className="text-xs font-medium text-gray-200">2 Banheiros</span>
            </div>
          </div>
        </div>
        

        <div className="flex items-end justify-between border-t border-gray-800 pt-3">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-[10px] line-through decoration-gray-500 leading-none">
              R$ 1.200.000,00
            </span>
            <span className="text-green-500 text-xl font-black leading-none mb-2">
              R$ 600.000,00
            </span>
            <div className="bg-secondary/10 text-secondary border border-secondary/30 font-black text-[10px] px-2 py-0.5 rounded w-fit">
              SCORE: 85/100
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}