import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import Home from "./pages/Home";
import Good from "./pages/Good";
import Cart from "./pages/Cart";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import Order from "./pages/Order";
import MyOrders from "./pages/MyOrders"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
          <div className="row">
              <Switch>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/good/:itemId'} component={Good}/>
                  <Route path={'/cart'} component={Cart}/>
                  <Route path={'/login'} component={Login}/>
                  <Route path={'/register'} component={Register}/>
                  <Route path={'/order'} component={Order}/>
                  <Route path={'/myOrders'} component={MyOrders}/>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
