import { Card, 
  Grid, 
  Button, 
  TextField, 
  Fab, 
  Box, 
  Modal, 
  Typography,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl
} from "@mui/material";
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
import TaraLabel from "./labeltara.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BottomNav_Accounts from "../../Components/BottomNav_Accounts";
import { alpha, styled } from "@mui/material/styles";
import withLoading from "../../HOC/withLoading";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SignalWifi2BarIcon from "@mui/icons-material/SignalWifi2Bar";
import BatteryCharging90OutlinedIcon from "@mui/icons-material/BatteryCharging90Outlined";
import { getUserChange } from "../../redux/reducers/getuserReducer";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MobileNav from "../../Components/MobileNav";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CreateLottie from "../../Components/CreateLottie";
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import CropOriginalRoundedIcon from '@mui/icons-material/CropOriginalRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
function CreateAccount() {

  const successStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    
    p: 4,
  };

  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.getUser);
  const [modalAlert, setModalAlert] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const [userlist, setUserList] = useState("");
  const [pchecker, setPchecker] = useState("");
  const [cchecker, setCchecker] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [picture, setPicture] = useState("");
  useEffect(() => {
    userList();
   
  }, []);

  const userList = async () => {
    const response = await api.get("/users");
    const result = response.data;
    dispatch(getUserChange(result));
  
  };

  const NewAccount = () => {
    if (
      !name ||
      !email ||
      !password ||
      !picture
    ) {
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
    } else {
      const params = {
       
        name: name,
        email: email,
        password: password,
        picture: picture,
        userType: "Buyer",
        address: "",
        order: 0,
      };

      createAccount(params);
    }
  };

     
   

  const createAccount = async (params) => {
    const apiNewItem = await api.post("/users", params);
   
    if(apiNewItem.status===201){
      setModalAlert(true);
      setName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setPicture("");
      userList();
    }
    
    // userList();
    
    //   store.addNotification({
    //     title: "New Account created!",
    //     message: "You can now log into another account.",
    //     type: "success",
    //     insert: "top",
    //     container: "top-right",
    //     animationIn: ["animate__animated", "animate__fadeIn"],
    //     animationOut: ["animate__animated", "animate__fadeOut"],
    //     dismiss: {
    //       duration: 3000,
    //       onScreen: true,
    //     },
    //   });
 
    // return setAccoountDetails("");
  };

 const ShowConfirm = () => {

 }


  const btnLogin = () => {
   
    const checkAccount = user.find((user) => user.email === email);

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
    if (password !== confirmPassword) {
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
      <MobileNav />
      <ReactNotification />
      <center>
       <Grid
          container
          spacing={2}
          direction="column"
          style={{ textAlign: "center", padding: "20px"}}
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
                  <b>Create Account</b>
                </h4>
                <p style={{color: "#767779"}}>Please fill up all fields to create account.</p>
              </Grid>

              <Grid container>
                <Grid xs={12}></Grid>
                <form>
                  <Grid xs={12}>
                    <Grid xs={12}>
                      <TextField
                      
                        color={
                          name!=="" ? (
                            "success"
                          ):(
                            "error"
                          )
                        }
                        label="Name"
                        id="reddit-input"
                        variant="outlined"
                        style={{
                          marginTop: 11,
                          backgroundColor: "#F5FAFE"
                        }}
                        name="name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        color={
                          email!=="" ? (
                            "success"
                          ):(
                            "error"
                          )
                        }
                        label="Email"
                        id="reddit-input"
                        variant="outlined"
                        style={{
                          marginTop: 11,
                          backgroundColor: "#F5FAFE"
                        }}
                        name="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid container>
                      <Grid xs={6} paddingRight="5px">
                        <TextField
                          type="password"
                          color={
                           password === ""
                              ? "error"
                              : password.length <= 5
                              ? "error"
                              : password.length >= 6
                              ? "success"
                              : null
                          }
                          label={
                            password === ""
                              ? "Password"
                              : password.length <= 5
                              ? "Weak Password"
                              : password.length >= 6
                              ? "Strong Password"
                              : null
                          }
                          id="reddit-input"
                          variant="outlined"
                          style={{
                            marginTop: 11,
                            backgroundColor: "#F5FAFE"
                          }}
                          name="password"
                          value={password}
                          onChange={(e) => {setPassword(e.target.value)}}
                          required
                        />
                      </Grid>
                      <Grid xs={6}>
                        <TextField
                          type="password"
                          color={
                            confirmPassword === ""
                              ? "error"
                              : confirmPassword !==
                                password
                              ? "error"
                              : confirmPassword ===
                                password
                              ? "success"
                              : null
                          }
                          label={
                            confirmPassword === ""
                              ? "Confirm Password"
                              : confirmPassword !==
                                password
                              ? "Confirm Password"
                              : confirmPassword ===
                                password
                              ? "Password Match"
                              : null
                          }
                          id="reddit-input"
                          variant="outlined"
                          style={{
                            marginTop: 11,
                            backgroundColor: "#F5FAFE"
                          }}
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => {setCPassword(e.target.value)}}
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid xs={12}>
                    <FormControl variant="outlined" sx={{ mt:2}} fullWidth>
          <InputLabel htmlFor="outlined-adornment-password"
           color={
            picture!=="" ? (
                "success"
              ):(
                "error"
              )
            }
          >Picture Link *</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            color={
              picture!=="" ? (
                  "success"
                ):(
                  "error"
                )
              }
              value={picture}
              onChange={(e) => {setPicture(e.target.value)}}
            style={{backgroundColor: "#F5FAFE"}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                
                  edge="end"
                >
                <ImageRoundedIcon onClick={() => {setViewImage(true)}} />
                </IconButton>
              </InputAdornment>
            }
            label="Picture link"
          />
        </FormControl>

                    </Grid>
                  </Grid>
                  <Grid xs={12} style={{ marginTop: "25px" }}>
                    <Box>
                      <Fab
                        size="large"
                        variant="extended"
                        style={{ color: "#F9D342", backgroundColor: "#323435", width: "100%" }}
                        aria-label="add"
                        onClick={btnLogin}
                      >
                          Create account
                      </Fab>
                    </Box>
                  </Grid>
                </form>
              </Grid>
              <Grid xs={12} style={{ marginTop: "30px" }}>
                <Link to="/login" style={{ color: "#323435", textDecoration: "none"}}>
                  Already have an account? <span style={{color: "#767779"}}>Login</span>
                </Link>
              </Grid>
             

            </Card>
          </Grid>
        </Grid>
      </center>

      <Modal
        open={modalAlert}
        onClose={!modalAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={successStyle}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <CreateLottie/>
           <div style={{textAlign: "center"}}>
           <h4>Account Created!</h4>
           <p>You may login your account.</p>
           </div>
          </Typography>
          
          <Box style={{textAlign: "center", marginTop: "50px"}}>
           <Fab variant="extended" size="medium" style={{width: "200px",backgroundColor: "#23C833", color: "white"}} onClick={() => {
             setModalAlert(false);   
           }}>OK</Fab>
          </Box>
          
        </Box>
      </Modal>

      <Modal
        open={viewImage}
        onClose={!viewImage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={successStyle}>
        {!picture ? (
          <center>
             <h4>No image found</h4>
          </center>
           
          ):(
            <div style={{textAlign: "center"}}>
            <img src={picture} style={{height: "300px"}} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }} >
            <center>
             <h4>Image Preview</h4>
            </center>
          </Typography>
            </div>
          )}
          
          
          <Box style={{textAlign: "center", marginTop: "50px"}}>
           <Fab variant="extended" size="medium" style={{width: "200px",backgroundColor: "#23C833", color: "white"}} onClick={() => {
             setViewImage(false);   
           }}>OK</Fab>
          </Box>
          
        </Box>
      </Modal>

    </div>
  );
}

export default CreateAccount;
