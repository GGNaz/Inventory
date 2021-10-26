import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";



const userRestrict = WrappedComponent => props => {

  const userId = useSelector(state => state.user.id);

  return (userId === 3)? 
    (<WrappedComponent {...props} />): <Redirect to="/" />

}

export default userRestrict;