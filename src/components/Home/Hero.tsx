import { Link } from "react-router-dom";

export function Hero() {

  return (
    <div className="flex h-screen"
         style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/hero-bg.jpg')` }}>
        
        <div className="flex flex-col px-12 w-full justify-center">
            <h1 className=" mb-5 text-4xl font-extrabold text-white">
                A inteligência que arremata
            </h1>
            <h2 className=" text-sm text-white mb-10">
                Centralizamos os leilões imobiliários do Brasil e transformamos editais complexos
                em oportunidades claras de investimento. Com o Teical Score, você analisa risco 
                jurídico, desconto real e encontra as melhores oportunidades do mercado.
            </h2>
            <Link to="/imoveis" className="btn-primary">
                Ver imóveis
            </Link>
        </div>
        <div className="flex-col w-full">
            <span className="text-xl font-semibold text-white">Destaques</span>
            <div className="flex">
                <div className="flex-col"></div>
                <div className="flex-col"></div>
            </div>
        </div>
    </div>
  ); 
}