import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<div/>} />
          <Route path="/Contacto" element={<div/>} />
          <Route path="/Catalogo" element={<div/>} />
          <Route path="/Carrito" element={<div/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
