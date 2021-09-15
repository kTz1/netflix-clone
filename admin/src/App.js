import React, { useContext } from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/user-list/UserList';
import User from './pages/user/User';
import NewUser from './pages/new-user/NewUser';
import ProductList from './pages/product-list/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/new-product/NewProduct';
import Login from './pages/login/Login';
import ListList from './pages/list-list/ListList';
import { AuthContext } from './context/authContext/AuthContext';
import List from './pages/list/List';
import NewList from './pages/new-list/NewList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './app.scss';



function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
    <Switch>
      <Route path="/login">
        {user ? <Redirect to='/' /> : <Login />}
      </Route>
      {user && 
        <>
        <Topbar />
          <div className='container'>
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/movies">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
            <Route path="/lists">
              <ListList />
            </Route>
            <Route path="/list/:listId">
              <List />
            </Route>
            <Route path="/newlist">
              <NewList />
            </Route>
          </div></>}
      </Switch>
    </Router>
  );
}

export default App;
