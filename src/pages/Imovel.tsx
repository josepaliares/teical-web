import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GavelIcon from '@mui/icons-material/Gavel';
import LaunchIcon from '@mui/icons-material/Launch';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

import { Link } from 'react-router-dom';

export default function Imovel() {

    return (
        <div className="bg-primary min-h-screen p-8 pt-10">
            <div className="max-w-7xl mx-auto">
                <Link to="/imoveis" className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors mb-6">
                    <ArrowBackIcon fontSize="small" />
                    Voltar
                </Link>
                <div className="flex gap-10">
                    <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                        alt="Imóvel"
                        className="h-100 rounded-2xl"
                    />
                    <div className="flex flex-col gap-3 w-full">
                        <h1 className="text-gray-200 font-bold text-xl truncate leading-tight pr-4">Nome do Imóvel em Leilão - 50m²</h1>
                        <div className=" flex justify-between bg-primary-dark/90 w-full h-auto rounded-3xl border border-secondary-dark py-3 px-3">
                            <h3 className="text-secondary-dark">
                                <LocationPinIcon className="mr-3" />
                                Localização
                            </h3>
                            <h3 className="text-gray-200 font-bold">Bairro, Cidade/UF</h3>
                        </div>
                        <div className=" flex justify-between items-center bg-primary-dark/90 w-full h-auto rounded-3xl border border-secondary-dark py-3 px-3">
                            <h3 className="text-secondary-dark">
                                <AttachMoneyIcon className="mr-3" />
                                Valor
                            </h3>
                            <div className="flex flex-col gap-1">
                                <span className="text-gray-500 text-[10px] line-through decoration-gray-500 leading-none">
                                    R$ 1.200.000,00
                                </span>
                                <span className="text-green-500 text-xl font-black leading-none mb-2">
                                    R$ 600.000,00
                                </span>
                            </div>
                        </div>
                        <div className=" flex justify-between bg-green-900 border border-green-500 w-full h-auto rounded-3xl py-3 px-3">
                            <h3 className="text-green-400">
                                <div className="w-3 h-3 rounded-full bg-green-400 inline-block mr-3"/>
                                Desocupado
                            </h3>
                        </div>
                        <div className=" flex flex-col justify-between bg-primary-dark/90 w-full h-auto rounded-3xl border border-secondary-dark py-3 px-3">
                            <h3 className="text-secondary-dark">
                                <TextSnippetIcon className="mr-3" />
                                Análise de Edital
                            </h3>
                            <div className="flex w-full gap-3 p-1 mt-2 mb-1">
                                <button className="w-full rounded-2xl font-regular text-secondary-light border border-secondary-dark bg-secondary-dark/20 py-2 hover:bg-secondary-dark/50">Manual</button>
                                <button className="w-full rounded-2xl font-regular text-secondary-light border border-secondary-dark bg-secondary-dark/20 py-2 hover:bg-secondary-dark/50">Inteligente</button>
                            </div>
                        </div>
                        <Link to='/' className="relative flex justify-center gap-3 bg-primary-dark/90 w-full h-auto rounded-3xl border border-secondary-dark py-3 px-3 hover:bg-secondary/20 transition-all duration-200">
                            <h3 className="text-secondary font-bold">
                                <GavelIcon className="mr-3" />
                                Dar lançe
                                <LaunchIcon className="absolute right-3"/>
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}