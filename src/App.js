import React from 'react';
import Home from './componentes/Home/home';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import CartContext from './store/Context/CartContext';
import CategoryItemList from './componentes/ItemListContainer/CategoryItemList';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:category" component={CategoryItemList} />

        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
