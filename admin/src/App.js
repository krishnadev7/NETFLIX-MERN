import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import { Fragment, useContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Login from './pages/login/Login';
import { AuthContext } from './contest/authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        {user && (
          <Fragment>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/movies'>
                <ProductList />
              </Route>
              <Route path='/product/:productsId'>
                <Product />
              </Route>
              <Route path='/newproduct'>
                <NewProduct />
              </Route>
            </div>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
}

export default App;
