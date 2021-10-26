import React, { useState } from 'react';
import LoginUser from './Loginpage';
import ShowItems from '../ShowItem/ShowItem';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router';
function LogApp() {
    const adminUser = {
        name: "Nazer",
        email: "nazer@gmail.com",
        password: "password123"
    }
    
    const [user, setUser] = useState({ email: "", password: "", name:"" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);


     if(details.email == adminUser.email && details.password == adminUser.password)
    {
        console.log("Login");
        setUser({
            email: details.email,
            name: "Nazer",
            password: details.password
        })
    }else{
       alert("Email and Password not match!")
     
    }
    }
    const { url } = useRouteMatch();
    const history = useHistory();
    const moveRoute = (id) =>{
      history.push('/home')
    }
    return (
        <div>
            {(user.email != "") ? (
                <div>
                       <h2 >{user.name}</h2>
                       { history.push('/home')}
                    <Link to="/home">
                    <Route exact to="/home">
                    <ShowItems  />
                    </Route>
                    </Link>
                  
                 
                    
                </div>
            ) : (
                
                <LoginUser Login={Login} error={error} />
            )}
        </div>

    )


}
export default LogApp;