import { Card, Grid, Button } from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import logo from '../Homepage/sample.png';
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from "uuid";
import api from "../../api/menu";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import { useDispatch } from "react-redux";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

function CreateAccount() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [userDetails, setAccoountDetails] = useState(
        {email: '',
         password: '',
         name: '',
         confirmPassword: ''
    }
    );
    

  

    const user = useSelector((state) => state.getUser.getUser);

    const checkCredentials = (e) => {
       
		switch (e.target.name) {
            case 'name':
				setAccoountDetails({
					...userDetails,
					name: e.target.value,
				});
				break;
			case 'email':
				setAccoountDetails({
					...userDetails,
					email: e.target.value,
				});
				break;
			case 'password':
				setAccoountDetails({
					...userDetails,
					password: e.target.value,
				});
				break;
                case 'confirmPassword':
				setAccoountDetails({
					...userDetails,
					confirmPassword: e.target.value,
				});
				break;
			default:
				break;
		}
	};


    const NewAccount = () => {
        const params = {
          id: uuidv4(),
          Name: userDetails.name,
          email: userDetails.email,
          password: userDetails.password,
        };
      
        createAccount(params);
      };

      const createAccount = async (params) => {
        const apiNewItem = await api.post("/Account", params);
        dispatch(getMenuChange(apiNewItem));
        console.log("Account :", apiNewItem.data);
      };


    const btnLogin = (e) => {
		e.preventDefault();
		const checkAccount = user.find(
			(user) => user.email === userDetails.email
		);
	
		if (checkAccount) {
			return store.addNotification({
                title: "Email already exist!",
                message: "Try to use other email.",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 3000,
                  onScreen: true
                }
              });
		}
		if (userDetails.password !== userDetails.confirmPassword) {
			return alert('Password did not match');
		}
		// NewAccount();
	};
    return (
        <div>
       <ReactNotification />
            <center>
            <Grid container spacing={2} direction="column" style={{textAlign: "center", padding: "10px"}}>
            <Grid item xs={12}>
            <img src={logo} style={{maxWidth: "300px"}} />
            <h3>Tara Eat</h3>
              <Card style={{padding: "50px"}}>
                

             <Grid container>
                <Grid xs={12}>
                    
                    
                </Grid>
                <form >
                <Grid xs={12}>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userDetails.name}
                    onChange={checkCredentials}
                     />
                </Grid>
                <Grid xs={12}>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userDetails.email}
                    onChange={checkCredentials}
                     />
                </Grid>
                <Grid xs={12}>
                <input 
                    type="password"  
                    name="password" 
                    placeholder="password"
                    value={userDetails.password}
                    onChange={checkCredentials}
               />
                    
                </Grid>
                <Grid xs={12}>
                <input 
                    type="password"  
                    name="confirmPassword" 
                    placeholder="Confirm password"
                    value={userDetails.confirmPassword}
                    onChange={checkCredentials}
               />
                    
                </Grid>
             
                <Grid xs={12}>
                    
                <Button type="submit" onClick={btnLogin}>Login</Button>
                    
                </Grid>
                </form>
             </Grid> 
               
             </Card>
             </Grid>
            </Grid>
            </center>
          
        </div>
    )
}


export default CreateAccount;
 
