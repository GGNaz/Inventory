import { Card, Grid, Button } from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import logo from '../Homepage/sample.png';
import { useHistory } from 'react-router';
function LoginForm() {
    const history = useHistory();
    const [userDetails, setAccoountDetails] = useState(
        {email: '',
         password: ''
    }
    );
    
    const user = useSelector((state) => state.getUser.getUser);
    console.log("email",user);
    console.log("userrr",user);
    const checkCredentials = (e) => {
		switch (e.target.name) {
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
			default:
				break;
		}
	};

    const btnLogin = (e) => {
		e.preventDefault();
		const checkAccount = user.find(
			(user) => user.email === setAccoountDetails.email
		);
		console.log(checkAccount);
		if (!checkAccount) {
			return alert('wala');
		}
		if (checkAccount.password !== setAccoountDetails.password) {
			return alert('mali ka');
		}
		alert("success");
	};
    return (
        <div>
            <center>
            <Grid container spacing={2} direction="column" style={{textAlign: "center", padding: "10px"}}>
            <Grid item xs={12}>
              <Card style={{padding: "50px"}}>
                

             <Grid container>
                <Grid xs={12}>
                    <img src={logo} style={{maxWidth: "300px"}} />
                    
                </Grid>
                <form >
                <Grid xs={12}>
                  <input 
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={checkCredentials}
                     />
                </Grid>
                <Grid xs={12}>
                <input 
                    type="password"  
                    name="password" 
                    value={userDetails.password}
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

export default LoginForm
