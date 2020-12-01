import React from 'react';
import Home from './componentes/Home/home';
import NavigationBar from './componentes/NavBar/NavigationBar';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import CartContext from './store/Context/CartContext';
import OrderDetail from './componentes/Orders/OrderDetail';
import SearchListContainer from './componentes/ItemListContainer/SearchListContainer';

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path="/item/:id" component={ItemDetailContainer} />
          <Route path="/category/:category" component={Home} />
          <Route path="/order/:orderId/:success?" component={OrderDetail} />
          <Route path="/search/:search" component={SearchListContainer} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
