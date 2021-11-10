import { Card, Grid, Button, TextField, Box, Fab } from "@mui/material";
import React, { useState } from "react";
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

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userDetails, setAccoountDetails] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.getUser.getUser);

  const checkCredentials = (e) => {
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

  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: false }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "2px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",

        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor:
          theme.palette.primary.main === "light" ? "#ffc107" : "#ffc107",
      },
    },
  }));

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
          onScreen: true,
        },
      });
    }
    // setIsLogin(true);
    history.push("/home");
    // setAccountLogin();
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
                        color="warning"
                        label="Email"
                        id="reddit-input"
                        variant="filled"
                        style={{
                          marginTop: 11,
                          border: "2px solid #e2e2e1",
                          borderRadius: "5px",
                        }}
                        name="email"
                        value={userDetails.email}
                        onChange={checkCredentials}
                        fullWidth
                       
                      />
                    </Grid>

                    <Grid xs={12}>
                      <TextField
                        type="password"
                        color="warning"
                        label="Password"
                        id="reddit-input"
                        variant="filled"
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
