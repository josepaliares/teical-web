import { PropertyListCard } from "../components/PropertyListCard";

export default function Imoveis() {
  return (
    <div className="bg-primary min-h-screen p-8 pt-10">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-white text-3xl font-bold mb-8">
          A inteligência que arremata.
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

              <PropertyListCard status="green" />
              <PropertyListCard status="yellow" />
              <PropertyListCard status="yellow" />
              <PropertyListCard status="green" />
              <PropertyListCard status="red" />
              <PropertyListCard status="green" />
              <PropertyListCard status="green" />
              <PropertyListCard status="yellow" />
              <PropertyListCard status="green" />
              <PropertyListCard status="red" />

            </div>
          </div>

          <aside className="w-full lg:w-80 flex flex-col gap-6 sticky top-24">

            <div className="bg-secondary-dark/20 border border-secondary/10 p-6 rounded-2xl">
              <h2 className="text-white font-bold mb-6 text-xl">Glossário</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
                  Imóvel de documentação regular
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
                  Imóvel ocupado
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                  Imóvel de financiamento não permitido
                </li>
              </ul>
            </div>

            {/* Categorias */}
            <div className="bg-secondary-dark/20 border border-secondary/10 p-6 rounded-2xl">
              <h2 className="text-white font-bold mb-6 text-xl">Categorias</h2>
              <div className="grid grid-cols-2 gap-4">
              {['Casa', 'Apartamento', 'Galpão', 'Lajes', 'Outros'].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-gray-800 checked:bg-secondary" />
                  {cat}
                </label>
              ))}
            </div>
            </div>
            
          </aside>
        </div>
      </div>
    </div>
  );
}