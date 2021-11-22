import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Switch, Route } from "react-router";
import { v4 as uuidv4 } from "uuid";
import Home from "./User/Homepage/Home";
import BurgerList from "./User/Homepage/BurgerList";
import Cart from "./User/Homepage/Cart";
import api from "./api/menu";
import LoginForm from "./User/LoginForm/LoginForm";
import { getMenuChange } from "./redux/reducers/getMenuReducer";
import { getUserChange } from "./redux/reducers/getuserReducer";
import AddItem from "./User/Homepage/AddItem";
import { getCartChange } from "./redux/reducers/getCartReducer";
import CreateAccount from "./User/LoginForm/CreateAccount";
import Accounts from "./User/Homepage/Accounts";
import UserRestriction from "./HOC/userRestriction";
import MyCart from "./User/Homepage/MyCart";
import { getLogsChange } from "./redux/reducers/getLogsReducer";
import Orders from "./User/Homepage/Orders";
import DefaultPage from "./User/LoginForm/DefaultPage";
import Chat from "./User/Chat/Chat";
import Profile from "./User/Homepage/Profile";
function App() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    menuList();
    userList();
    cartList();
  }, []);

  const menuList = async () => {
    const response = await api.get("/products");
    const result = response.data;
    dispatch(getMenuChange(result));
    console.log("result", result);
  };

  const userList = async () => {
    const response = await api.get("/users");
    const result = response.data;
    dispatch(getUserChange(result));
    console.log("User", result);
  };

  const cartList = async () => {
    const response = await api.get("/cart");
    const result = response.data;
    dispatch(getCartChange(result));
    console.log("Cart", result);
  };

  // const logsList = async () => {
  //   const response = await api.get("/Logs");
  //   const result = response.data;
  //   dispatch(getLogsChange(result));
  //   console.log("Logs", result);
  // };

  

  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
          <DefaultPage/>
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/createAccount">
          <CreateAccount />
        </Route>
        <Route exact path="/home">
          <Home  />
          <BurgerList  />
        </Route>
        <Route exact path="/addItem">
          <AddItem />
        </Route>
        <Route exact path="/cart">
          <Home />
          <Cart />
        </Route>
        <Route exact path="/accounts">
          <Accounts />
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route exact path="/mycart">
          <MyCart/>
        </Route>
        <Route exact path="/delivery">
          <Orders/>
        </Route>
        <Route exact path="/chat">
          <Chat/>
        </Route>
      </Switch>
      {/* <UserRestriction path="/home" component={Home} component={BurgerList} isLogin={isLogin} />
      <UserRestriction path="/addItem" component={AddItem} isLogin={isLogin} /> */}
    </div>
  );
}

export default App;
