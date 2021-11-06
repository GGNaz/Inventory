import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";



const userRestriction = WrappedComponent => props => {

  const user = useSelector(state => state.getUser.getUser);

  return (user.isLogin === false)? 
    (<WrappedComponent {...props} />): <Redirect to="/login" />

}

export default userRestriction;
