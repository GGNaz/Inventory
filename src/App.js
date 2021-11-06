import React, { useState, useEffect } from 'react';
import './App.css';
import { useDispatch ,useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Switch, Route } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import Home from './User/Homepage/Home';
import BurgerList from './User/Homepage/BurgerList';
import Cart from './User/Homepage/Cart';
import api from './api/menu';
import LoginForm from './User/LoginForm/LoginForm';
import { getMenuChange } from './redux/reducers/getMenuReducer';
import { getUserChange } from './redux/reducers/getuserReducer';
import AddItem from './User/Homepage/AddItem';
import { getCartChange } from './redux/reducers/getCartReducer';
import CreateAccount from './User/LoginForm/CreateAccount';
function App() {

  const dispatch = useDispatch();

  const menuList = async () => {
    const response = await api.get("/menu");
    const result = response.data;
      dispatch(getMenuChange(result));
      console.log("result",result);
  }

  const userList = async () => {
    const response = await api.get("/account");
    const result = response.data;
      dispatch(getUserChange(result));
      console.log("User",result);
  }

  const cartList = async () => {
    const response = await api.get("/Cart");
    const result = response.data;
      dispatch(getCartChange(result));
      console.log("Cart",result);
  }

useEffect(()=> {
  // const getList = async () => {
  //   const allfoods = await menuList();
  // }
  menuList();
  userList();
  cartList();
  // getList();
},[]);



  return (
    <div className="App" >


      <Switch>
        <Route exact path="/login">
           
            <LoginForm/>
          </Route>
          <Route exact path="/createAccount">
           
            <CreateAccount/>
          </Route>
          <Route exact path="/home">
            <Home />
            <BurgerList/>
          </Route>
          <Route exact path="/addItem">
           <AddItem/>
          </Route>
            <Route exact path="/cart">
            <Home />
            <Cart />
           
          </Route>
      </Switch>







    </div>
  );
}

export default App;
