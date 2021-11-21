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


    const response = await api.post("/users/login", params);
    const result = response.data;
    console.log("User check", result);

    if(result==="wrong"){
      alert("wrong")
    }
    if(result==="OK"){
      alert("yes")
    }
  

  };


  const btnLogin = (e) => {
  checkUserAccount();
    // const checkAccount = user.find((user) => user.email === userDetails.email);

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
    const response = await api.put("/users/"+userEmail, {isUserLog : true} );
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
        <img src={logo} style={{ height: "200px" }} />
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ textAlign: "center", padding: "10px", marginTop: "10px" }}
        >
          <Grid item xs={12}>
            <Card style={{ padding: "40px", borderRadius: "20px" }}>
              <Grid xs={12}>
                <label
                  style={{
                    fontFamily: "Apple Chancery, cursive",
                    fontSize: "30px",
                    color: "#323435"
                  }}
                >
                  <b>Tara Eat</b>
                </label>
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
                  <Grid xs={12} style={{ textAlign: "right" }}>
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                      <Fab
                        size="medium"
                        variant="extended"
                        style={{ color: "#F9D342", backgroundColor: "#323435" }}
                        aria-label="add"
                        onClick={btnLogin}
                      >
                        <label style={{ marginRight: "5px" }}> Login</label><LoginIcon/>
                      </Fab>
                    </Box>
                  </Grid>
                </form>
              
              <br /><br /><br />
              <Link to="/createAccount" style={{ color: "#323435" }}>
                New user? Click here
              </Link>

              <Grid container style={{ marginTop: "23.5%" }}>
                <Grid xs={12}>
                  <span>&#169;</span>{" "}
                  <label>Tara Eat App by Nazer Somera</label>
                </Grid>
                <Grid xs={12} style={{ marginTop: "10px" }}>
                  <h6>Follow us</h6>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={2}>
                  <img
                    src="https://i.pinimg.com/564x/5b/8b/9c/5b8b9c0d8b8dbc20c53eed722860f42e.jpg"
                    style={{ height: "30px" }}
                  />
                </Grid>
                <Grid xs={2} style={{ textAlign: "center" }}>
                  <img
                    src="https://i.pinimg.com/564x/17/cd/d1/17cdd19cfbb3545713b5dfe930dd580b.jpg"
                    style={{ height: "30px" }}
                  />
                </Grid>
                <Grid xs={2} style={{ textAlign: "center" }}>
                  <img
                    src="https://i.pinimg.com/564x/b4/1d/09/b41d094c54d3949b32a8592924933ff3.jpg"
                    style={{ height: "30px" }}
                  />
                </Grid>
                <Grid xs={3}></Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </center>
    </div>
  );
}

export default LoginForm;
