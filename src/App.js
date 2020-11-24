import React from 'react';
import Home from './componentes/Home/home';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import CartContext from './store/Context/CartContext';
import CategoryItemList from './componentes/ItemListContainer/CategoryItemList';
import OrderDetail from './componentes/Orders/OrderDetail';
import SearchListContainer from './componentes/ItemListContainer/SearchListContainer';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:category" component={CategoryItemList} />
          <Route path="/order/:orderId" component={OrderDetail} />
          <Route path="/search/:search" component={SearchListContainer} />
          <Route path="/" component={Home} exact />



        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
