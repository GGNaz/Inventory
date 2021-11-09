import { Card, Grid, Button, TextField, Fab, Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
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
import TaraLabel from './labeltara.png';
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
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
function CreateAccount() {
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
       
       <MobileNav/>
       <ReactNotification  />
       <center>
         <img src={logo} style={{height: "200px"}} />
        <Grid
          container
          spacing={2}
          direction="column"
          style={{ textAlign: "center", padding: "10px", marginTop: "10px" }}
        >
          <Grid item xs={12}>
              
            <Card style={{ padding: "40px", borderRadius: "20px" }}>
            <Grid xs={12}>
            
            <label style={{fontFamily: "Apple Chancery, cursive", fontSize: "30px" }}><b>Tara Eat</b></label>
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
                   
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "#F9D342", backgroundColor: "#323435" }}
          aria-label="add"
          onClick={btnLogin}
        >
          <label style={{ marginRight: "5px"}}> Create account</label><CheckCircleOutlineOutlinedIcon/>
        </Fab>
      </Box>

                  </Grid>
                </form>
              </Grid>
              <br/>
              <Link to="/login" style={{color: "#323435"}}>Already have account. Click here</Link>

              <Grid container style={{marginTop: "30px"}}>
                <Grid xs={12}>
                <span>&#169;</span> <label>Tara Eat App by Nazer Somera</label>
                </Grid>
                <Grid xs={12} style={{marginTop: "10px"}} >
                <h6>Follow us</h6>
                </Grid>
                <Grid xs={3}></Grid>
                <Grid xs={2} >
                <img src="https://i.pinimg.com/564x/5b/8b/9c/5b8b9c0d8b8dbc20c53eed722860f42e.jpg" style={{height: "30px"}}/>
                </Grid>
                <Grid xs={2} style={{textAlign: "center"}}>
                  <img src="https://i.pinimg.com/564x/17/cd/d1/17cdd19cfbb3545713b5dfe930dd580b.jpg" style={{height: "30px"}}/>
                  </Grid>
                  <Grid xs={2} style={{textAlign: "center"}}>
                  <img src="https://i.pinimg.com/564x/b4/1d/09/b41d094c54d3949b32a8592924933ff3.jpg" style={{height: "30px"}}/>
                  </Grid>
                  <Grid xs={3}></Grid>
              </Grid>
              
            </Card>
          </Grid>
        </Grid>
      </center>
    
          
        </div>
    )
}


export default CreateAccount;
 
