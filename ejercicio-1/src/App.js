import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  
  const [show, setShow] = useState(true);
  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
