import React from "react";
import { useSelector } from "react-redux";
import { Route,Redirect } from "react-router-dom";



function UserRestriction({isLogin: isLogin, component: Component, ...rest}) {

  return <Route
          {...rest}
          render={(props) => {
            if(isLogin){
              return <Component />
            }
            else{
              return <Redirect to={{pathname: '/login', state: {from :props.location} }} />
            }
           
          }}


          />
    

}

export default UserRestriction;
