import { Card, Grid } from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import logo from '../Homepage/tae.png';
import { useHistory } from 'react-router';
function LoginForm() {
    const history = useHistory();
    const [userDetails, setAccoountDetails] = useState("");
    const user = useSelector((state) => state.getUser.getUser)
    console.log("userrr",user);
    const checkCredentials = (e) => {
		switch (e.target.userEmail) {
			case 'email':
				setAccoountDetails({
					...user,
					email: e.target.value,
				});
				break;
			case 'password':
				setAccoountDetails({
					...user,
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
			(user) => user[1].email === setAccoountDetails.email
		);
		console.log(checkAccount);
		if (!checkAccount) {
			return alert('wala');
		}
		if (checkAccount.password !== setAccoountDetails.password) {
			return alert('mali ka');
		}
		history.push('/home');
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
                    value={setAccoountDetails.email}
                    onChange={checkCredentials}
                     />
                </Grid>
                <Grid xs={12}>
                <input 
                    type="password"  
                    name="password" 
                    value={setAccoountDetails.password}
                    onChange={checkCredentials}
               />
                    
                </Grid>
                <Grid xs={12}>
                <submit type="submit" onClick={btnLogin}>Login</submit>
                    
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
