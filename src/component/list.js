import React,{useState} from "react";



const ItemList = () => {
    const [user, setUser] = useState("");
   

    const changeHander = (event) =>{
        console.log(event.target.value)
        setUser(event.target.value)
    }
  
   
    return (
      <div className="user">
        <input type="text" onChange={changeHander} value={user}></input>
       
        
        <h3>List {user}</h3>
      </div>
    )
}

export default ItemList;