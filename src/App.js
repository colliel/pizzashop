import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar";
import {LeftMenu} from "./components/LeftMenu";
import Home from "./pages/Home";
import Good from "./pages/Good";
import Cart from "./pages/Cart";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Order} from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
          <div className="row">
              <LeftMenu/>
              <Switch>
                  <Route path={'/'} exact component={Home}/>
                  <Route path={'/good/:itemId'} component={Good}/>
                  <Route path={'/cart'} component={Cart}/>
                  <Route path={'/login'} component={Login}/>
                  <Route path={'/register'} component={Register}/>
                  <Route path={'/order'} component={Order}/>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
