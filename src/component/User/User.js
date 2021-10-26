import React, { useState } from 'react';


const UserForm = () => {
  const [user, setUser] = useState("");
   

  const changeHander = (event) =>{
      console.log(event.target.value)
      setUser(event.target.value)
  }
  const setEmpty = (event) =>{
    
    setUser(event.target.value = "")
}

 
  return (
    <div className="user">
      <center>
      <h3 style={{marginTop: "10%"}}>Title : {user}</h3>
      <input type="text" className="form-control" style={{maxWidth:"40%"}} onChange={changeHander} onClick={setEmpty} value={user} placeholder="Please input a Title..."></input>
      </center>
      
      
    </div>
  )
}

export default UserForm;
