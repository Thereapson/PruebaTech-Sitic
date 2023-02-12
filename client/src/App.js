import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Componentes/Landing/Landing';
import DatosCliente from './Componentes/Datos-cliente/DatosCliente';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/datos-cliente' element={<DatosCliente />} />
      </Routes>
    </div>
  );
}

export default App;
