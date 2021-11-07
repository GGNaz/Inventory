import { Card, Grid, Button } from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import logo from '../Homepage/sample.png';
import { useHistory } from 'react-router';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import { getUserChange } from '../../redux/reducers/getuserReducer';
import api from "../../api/menu";
import { useDispatch } from "react-redux";
function LoginForm() {
  const dispatch = useDispatch();
    const history = useHistory();
    const [userDetails, setAccoountDetails] = useState(
        {email: '',
         password: ''
    }
    );
    
    const user = useSelector((state) => state.getUser.getUser);
    
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

  // const setAccountLogin = () => {
  //   const params = {
  //     isLogin: true,
  //   };
  
  // // alert("asdasdasdasd");
  //   updateUserLog(params);
  // };

  // const updateUserLog = async (params) => {
  //   const editformData = [...user];
  //   const index = editformData.findIndex(
  //       (item) => item.email === userDetails.email
  //   );
  //  console.log("asdasd",params)
  //   const apiUpdate = await api.put("/Account/"+editformData[index], params);
  //   dispatch(getUserChange(apiUpdate));
  //   history.push("/home");

  // };
    const btnLogin = (e) => {
		e.preventDefault();
		const checkAccount = user.find(
			(user) => user.email === userDetails.email
		);

		if (!checkAccount) {
			return store.addNotification({
        title: "Email not exist!",
        message: "Please check your email.",
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

		if (checkAccount.password !== userDetails.password) {
			return store.addNotification({
        title: "Wrong password!",
        message: "Please check your password.",
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
    history.push("/home");
    // setAccountLogin();
	};
    return (
        <div>
            <ReactNotification  />
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
