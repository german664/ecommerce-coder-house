import React from 'react';
import Home from './componentes/Home/home';
import NavBar from './componentes/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home greeting="Bienvenido a Tecno Store" />
    </div>
  );
}

export default App;
