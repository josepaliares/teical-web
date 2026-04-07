import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import Imoveis from './pages/Imoveis';
import Imovel from './pages/Imovel';
import QuemSomos from './pages/QuemSomos';
import Noticias from './pages/Noticias';
import Conexoes from './pages/Conexoes';
import Contato from './pages/Contato';
import Login from './pages/Login';

function App() {
  return (
    <Router> 
      <Routes>
        {/* Routes with MainLayout (with Navbar and Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/imovel" element={<Imovel />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/conexoes" element={<Conexoes />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

        {/* Route without MainLayout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;