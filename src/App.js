import React from 'react';
import Home from './componentes/Home/home';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/item/:id" component={ItemDetailContainer} />
        <Route path="/cart" component={Cart} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
