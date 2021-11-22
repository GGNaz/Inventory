import { Card, Grid, Button, TextField, Box, Fab,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../Homepage/sample.png";
import { useHistory } from "react-router";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { getUserChange } from "../../redux/reducers/getuserReducer";
import api from "../../api/menu";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import MobileNav from "../../Components/MobileNav";
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import { purple } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userDetails, setAccoountDetails] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const user = useSelector((state) => state.getUser.getUser);
  



  const checkCredentials = (prop) => (e) => {
    setAccoountDetails({ ...userDetails, [prop]: e.target.value });
    switch (e.target.name) {
      case "email":
        setAccoountDetails({
          ...userDetails,
          email: e.target.value,
        });
        break;
      case "password":
        setAccoountDetails({
          ...userDetails,
          password: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const checkUserAccount = async () => {

    const params = {
      email: userDetails.email,
      password: userDetails.password
    }

    const checkAccount = user.find((user) => user.email === userDetails.email);
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
            onScreen: true,
          },
        });
      }
    const response = await api.post("/users/login", params);
    const result = response.data;
    console.log("User check", result);

    if(result==="wrong"){
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
              onScreen: true,
            },
          });
    }

   
    if(result==="OK"){
      UpdateUserIsTrue(userDetails.email);
      history.push("/home");
    }
  

  };


  const btnLogin = (e) => {
  checkUserAccount();
   

    // if (!checkAccount) {
    //   return store.addNotification({
    //     title: "Email not exist!",
    //     message: "Please check your email.",
    //     type: "danger",
    //     insert: "top",
    //     container: "top-right",
    //     animationIn: ["animate__animated", "animate__fadeIn"],
    //     animationOut: ["animate__animated", "animate__fadeOut"],
    //     dismiss: {
    //       duration: 3000,
    //       onScreen: true,
    //     },
    //   });
    // }

    // if (checkAccount.password !== userDetails.password) {
    //   return store.addNotification({
    //     title: "Wrong password!",
    //     message: "Please check your password.",
    //     type: "danger",
    //     insert: "top",
    //     container: "top-right",
    //     animationIn: ["animate__animated", "animate__fadeIn"],
    //     animationOut: ["animate__animated", "animate__fadeOut"],
    //     dismiss: {
    //       duration: 3000,
    //       onScreen: true,
    //     },
    //   });
    // }
    
    // UpdateUserIsTrue(userDetails.email);
    // history.push("/home");
  
  };


  const userList = async () => {
    const response = await api.get("/users");
    const result = response.data;
    dispatch(getUserChange(result));
    console.log("User", result);
  };

  const UpdateUserIsTrue = async (userEmail) => {
    const response = await api.put("/users/email/"+userEmail, {isUserLog : true} );
    const result = response.data;
    dispatch(getUserChange(result));
    console.log("User", result);
  };
 

  useEffect(() => {
   
    userList();
   
  }, []);

  const handleClickShowPassword = () => {
    setAccoountDetails({
      ...userDetails,
      showPassword: !userDetails.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <MobileNav />
      <ReactNotification />
      <center>
        
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ textAlign: "center", padding: "20px" }}
        >
          <Grid item xs={12}>
            <Card style={{ padding: "40px", borderRadius: "20px" }}>
            <img src="https://st2.depositphotos.com/1323913/11824/v/600/depositphotos_118248912-stock-illustration-vector-realistic-retro-pizza-delivery.jpg" style={{ height: "300px" }} />
              <Grid xs={12}>
                <h4
                  style={{
                    
                    fontSize: "30px",
                    color: "#323435"
                  }}
                >
                  <b>Login Now</b>
                </h4>
                <p style={{color: "#767779"}}>Please enter the details below to continue.</p>
              </Grid>

                <form style={{ marginTop: "30px"}}>
                  <Grid xs={12}>
                    <Grid xs={12}>
                    <TextField
                        label="Email"
                        id="reddit-input"
                        variant="outlined"
                        name="email"
                        value={userDetails.email}
                        onChange={checkCredentials('email')}
                        fullWidth
                        style={{backgroundColor: "#F5FAFE"}}
                      />
                    </Grid>
                    
                    <Grid xs={12}>
                    <FormControl variant="outlined" sx={{ mt:2}} fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={userDetails.showPassword ? 'text' : 'password'}
            value={userDetails.password}
            onChange={checkCredentials('password')}
            style={{backgroundColor: "#F5FAFE"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {userDetails.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                      {/* <TextField
                        type="password"
                        color="warning"
                        label="Password"
                        id="reddit-input"
                        variant="outlined"
                        style={{
                          marginTop: 11,
                          border: "2px solid #e2e2e1",
                          borderRadius: "5px",
                        }}
                        name="password"
                        value={userDetails.password}
                        onChange={checkCredentials}
                        fullWidth
                      />
                    </Grid> */}
                      </Grid> 
                  </Grid>
                  <Grid xs={12} 
                  style={{textAlign: "right", marginBottom: "20px", marginTop: "5px"}}>
                    <label style={{color: "#767779", fontSize: "15px"}}>Forgot Password</label>
                  </Grid>
                  <Grid xs={12}>
                    <Box>
                      <Fab
                        size="large"
                        variant="extended"
                        style={{ color: "#F9D342", backgroundColor: "#323435", width: "100%"}}
                        aria-label="add"
                        onClick={btnLogin}
                       
                      >
                        Login
                      </Fab>
                    </Box>
                  </Grid>
                </form>
              
              <br />
              <Link to="/createAccount" style={{ color: "#323435", textDecoration: "none" }}>
                Don't have an account? <span style={{color: "#767779"}}>Register</span>
              </Link>

              <Grid container style={{ marginTop: "23.5%" }}>
                <Grid xs={12}>
                  <span>&#169;</span>{" "}
                  <label>Tara Eat App by Nazer Somera</label>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}

export default LoginForm;
