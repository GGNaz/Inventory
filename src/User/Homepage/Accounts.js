import { Card, Grid, Button, Avatar, Box, Fab, TextField, Paper, AppBar, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../Homepage/sample.png";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import api from "../../api/menu";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import { useDispatch } from "react-redux";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import Slider from "react-slick";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BottomNav_Accounts from "../../Components/BottomNav_Accounts";
import { alpha, styled } from "@mui/material/styles";
import withLoading from "../../HOC/withLoading";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import BatteryCharging90OutlinedIcon from '@mui/icons-material/BatteryCharging90Outlined';
import { getUserChange } from '../../redux/reducers/getuserReducer';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MobileNav from "../../Components/MobileNav";
function Accounts() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.getUser);
    const [userlist, setUserList] = useState("");
  useEffect(() => {
    showUsers();
  }, [userlist])

  const showUsers = () => {
    return setUserList(user);
  }

  const [userDetails, setAccoountDetails] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    picture: "",
  });

 

  const checkCredentials = (e) => {
    switch (e.target.name) {
      case "name":
        setAccoountDetails({
          ...userDetails,
          name: e.target.value,
        });
        break;
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
      case "confirmPassword":
        setAccoountDetails({
          ...userDetails,
          confirmPassword: e.target.value,
        });
        break;
      case "picture":
        setAccoountDetails({
          ...userDetails,
          picture: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const NewAccount = () => {

    if(!userDetails.name || !userDetails.email || !userDetails.password || !userDetails.picture){
        store.addNotification({
            title: "Fill all fields!",
            message: "Other fields are empty.",
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
    else{
        const params = {
            id: uuidv4(),
            Name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
            picture: userDetails.picture,
          };
      
          createAccount(params);
    }
   
  };

  const createAccount = async (params) => {
    const apiNewItem = await api.post("/Account", params);
    dispatch(getMenuChange(apiNewItem));
    store.addNotification({
      title: "New Account created!",
      message: "You can now log into another account.",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
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

  var settings = {
    dots: true,
    infinite: true,
   
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const btnLogin = (e) => {
    e.preventDefault();
    const checkAccount = user.find((user) => user.email === userDetails.email);

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
          onScreen: true,
        },
      });
    }
    if (userDetails.password !== userDetails.confirmPassword) {
      return store.addNotification({
        title: "Password did not match!",
        message: "Check your password",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }

    NewAccount();
  };
  return (
    <div>
        <ReactNotification />
        <MobileNav/>
     
      <Box sx={{ "& > :not(style)": { m: 1 } }} style={{ textAlign: "center" }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "#F9D342", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <AccountCircleRoundedIcon style={{ marginRight: "5px" }} /> Account
          List
        </Fab>
      </Box>
      <Slider {...settings}>
        {user.length > 0
          ? user.map((users) => (
              <div>
                <Card
                  sx={{ maxWidth: 345 }}
                  style={{
                    marginLeft: "8px",
                    marginRight: "8px",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                >
                  <Grid container>
                    <Grid xs={12}>
                      <img
                        src={users.picture}
                        style={{ height: "210px", borderRadius: "20px" }}
                      />
                    </Grid>
                    <Grid xs={12} style={{ textAlign: "center" }}>
                      <label>
                        <h5>Hi! Im {users.Name}</h5>
                      </label>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            ))
          : null}
      </Slider>
    
      {/* <Box sx={{ "& > :not(style)": { m: 1 } }} style={{ textAlign: "center" }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "#F9D342", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <GroupAddOutlinedIcon style={{ marginRight: "5px" }} /> User Form
        </Fab>
      </Box> */}
      <center>
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ textAlign: "center", padding: "10px", marginTop: "10px" }}
        >
          <Grid item xs={12}>
              
            <Card style={{ padding: "40px", borderRadius: "20px" }}>
            <Grid xs={12}>
            
            <h3>User Form</h3>
            </Grid>
           
            
              <Grid container>
                <Grid xs={12}></Grid>
                <form>
                  <Grid xs={12}>
                      <Grid xs={12}>
                    <TextField
                      color="warning"
                      label="Name"
                      id="reddit-input"
                      variant="filled"
                      style={{ marginTop: 11, border: "2px solid #e2e2e1", borderRadius: "5px"  }}
                      name="name"
                      value={userDetails.name}
                      onChange={checkCredentials}
                      fullWidth
                    />
                    </Grid>
                    <Grid xs={12}>
                    <TextField
                      color="warning"
                      label="Email"
                      id="reddit-input"
                      variant="filled"
                      style={{ marginTop: 11, border: "2px solid #e2e2e1", borderRadius: "5px"   }}
                      name="email"
                      value={userDetails.email}
                      onChange={checkCredentials}
                      fullWidth
                    />
                    </Grid>
                    <Grid container>
                    <Grid xs={6} paddingRight="5px">
                    <TextField
                    type="password"
                      color="warning"
                      label="Password"
                      id="reddit-input"
                      variant="filled"
                      style={{ marginTop: 11, border: "2px solid #e2e2e1", borderRadius: "5px"  }}
                      name="password"
                      value={userDetails.password}
                      onChange={checkCredentials}
                    />
                    </Grid>
                    <Grid xs={6}>
                    <TextField
                    type="password"
                      color="warning"
                      label="Confirm Password"
                      id="reddit-input"
                      variant="filled"
                      style={{ marginTop: 11, border: "2px solid #e2e2e1", borderRadius: "5px"   }}
                      name="confirmPassword"
                      value={userDetails.confirmPassword}
                      onChange={checkCredentials}
                    />
                    </Grid>
                    </Grid>
                    <Grid xs={12}>
                    <TextField
                      color="warning"
                      label="Picture Link"
                      id="reddit-input"
                      variant="filled"
                      style={{ marginTop: 11, border: "2px solid #e2e2e1", borderRadius: "5px"   }}
                      value={userDetails.picture}
                      onChange={checkCredentials}
                      name="picture"
                      fullWidth
                    />
                    </Grid>
                  </Grid>
                  <Grid xs={12} style={{textAlign: "right"}}>
                    <Button type="submit" onClick={btnLogin} style={{backgroundColor: "#323435", color: "white", marginTop: "10px", borderRadius: "10px"}}>
                      Create account
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </center>
      <BottomNav_Accounts />
    </div>
  );
}

export default withLoading(Accounts);
