import {
  Card,
  Grid,
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CardMedia,
  TextField,
  Box,
  Fab,
  Modal,
  Typography,
  IconButton,
  OutlinedInput,
  InputAdornment
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import BottomNav_AddItem from "../../Components/BottomNav_AddItem";
import api from "../../api/menu";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import { useDispatch } from "react-redux";
import userRestriction from "../../HOC/userRestriction";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { withRouter } from "react-router";
import MobileNav from "../../Components/MobileNav";
import addicon from "./addicon.png";
import { alpha, styled } from "@mui/material/styles";
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import ErrorLottie from "../../Components/ErrorLottie";
import SuccessLottie from "../../Components/SuccessLottie";

function AddItem() {
  const dispatch = useDispatch();
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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [pcs, setPcs] = useState("");
  const [desc, setDesc] = useState("");
  const [ftype, setType] = useState("");
  const [viewImage, setViewImage] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  const [successAdd, setSuccessAdd] = useState(false);

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    const response = await api.get("/products");
    const result = response.data;
    console.log("products",result)
  }

  const clearForm = () => {
    return (
      setName(""),
      setPrice(""),
      setPicture(""),
      setPcs(""),
      setDesc(""),
      setType("")
    ); 
     
  };



  const addItem = async () => {

    if(!name || 
      !price || 
      !picture ||
      !pcs ||
      !desc ||
      !ftype 
      ){
       setModalAlert(true);
      }

    const params = {
      foodName: name,
      foodPrice: price,
      foodImage: picture,
      foodPcs: pcs,
      foodDesc: desc,
      foodType: ftype
    }

    const response = await api.post("/products", params);
    const result = response.data;
    console.log("new menu",result );
    dispatch(getMenuChange(result));
  
    getAllProducts();
    clearForm();
    setSuccessAdd(true);
    
  }

  return (
    <div>
      <MobileNav />
      <ReactNotification />

      <Grid
        container
        spacing={2}
        direction="column"
        style={{ textAlign: "center", padding: "20px"}}
      >
        <Grid item xs={12}>
          <Card style={{ padding: "40px", borderRadius: "20px" }}>

           <img src="https://st.depositphotos.com/1787196/1330/i/600/depositphotos_13303160-stock-photo-funny-chef-and-empty-board.jpg" style={{ height: "300px" }} />
            <Grid xs={12}>
              <h4
                style={{
                  fontSize: "30px",
                  color: "#323435",
                }}
              >
               Add Menu Items
              </h4>
              <p style={{color: "#767779"}}>Please fill up all fields to add new menu.</p>
            </Grid>

            <form style={{ marginTop: "10px" }}>
              <Grid xs={12}>
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
          >Picture Link</InputLabel>
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

                  {/* <TextField
                    color={
                      picture!=="" ? (
                          "success"
                        ):(
                          "error"
                        )
                      }
                    label="Image Link"
                    variant="outlined"
                    style={{
                      marginTop: 11,
                      
                    }}
                    name="image"
                    onChange={(e) => {
                      setPicture(e.target.value);
                    }}
                    fullWidth
                  /> */}
                </Grid>

                <Grid container>
                  <Grid xs={6} >
                    <TextField
                 
                    sx={{ mt: 1.5, minWidth: 200 }}
                     color={
                      name!=="" ? (
                          "success"
                        ):(
                          "error"
                        )
                      }
                      label="Name"
                      value={name}
                      variant="outlined"
                      style={{
                        marginTop: 11,
                        paddingRight: "15px",
                        backgroundColor: "#F5FAFE"
                      }}
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>

                  <Grid xs={6}>

                  <TextField
          id="outlined-select-currency"
          style={{
            marginTop: 11,
            backgroundColor: "#F5FAFE"
          }}
          color={
            ftype!=="" ? (
            "success"
          ):(
            "error"
          )}
          select
          label="Type"
          value={ftype}
          onChange={(e) => {
            setType(e.target.value);
          }}
          fullWidth
          
        >
          
          <MenuItem value="Burger">Burger</MenuItem>
          <MenuItem value="Pizza">Pizza</MenuItem>
          <MenuItem value="Drinks">Drinks</MenuItem>
          <MenuItem value="Dessert">Dessert</MenuItem>
        
        </TextField>
                    
                  </Grid>
                  <Grid xs={6} style={{ paddingRight: "5px" }}>
                    <TextField
                      type="number"
                      color={
                        price!=="" ? (
                        "success"
                      ):(
                        "error"
                      )}
                      label="Price"
                     
                      variant="outlined"
                      style={{
                        marginTop: 11,
                        backgroundColor: "#F5FAFE"
                      }}
                      min="1"
                      name="price"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={6}>
                    <TextField
                      type="number"
                      color={
                        pcs!=="" ? (
                        "success"
                      ):(
                        "error"
                      )}
                      label="Stocks"
                     
                      variant="outlined"
                      style={{
                        marginTop: 11,
                        backgroundColor: "#F5FAFE"
                      }}
                      min="1"
                      name="stocks"
                      onChange={(e) => {
                        setPcs(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid xs={12}>


                  <TextField
                    type="text"
                    color={
                      desc!=="" ? (
                      "success"
                    ):(
                      "error"
                    )}
                    label="Ingredients"
                    
                    variant="outlined"
                    style={{
                      marginTop: 11,
                      backgroundColor: "#F5FAFE"
                    }}
                    name="Ingredients"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
                <Box >
                  <Fab
                    size="large"
                    variant="extended"
                    style={{ color: "#F9D342", backgroundColor: "#323435", width: "100%" }}
                    aria-label="add"
                   onClick={() => {addItem()}}
                  >
                   Add to Menu 
                  </Fab>
                </Box>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
      <BottomNav_AddItem />

      <Modal
        open={modalAlert}
        onClose={!modalAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={successStyle}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <ErrorLottie/>
           <div style={{textAlign: "center"}}>
           <h4>Warning!</h4>
           <p>Please fill up all fields.</p>
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

      <Modal
        open={successAdd}
        onClose={!successAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={successStyle}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <SuccessLottie/>
           <div style={{textAlign: "center"}}>
           <h4>Success!</h4>
           <p>New item added.</p>
           </div>
          </Typography>
          
          <Box style={{textAlign: "center", marginTop: "50px"}}>
           <Fab variant="extended" size="medium" style={{width: "200px",backgroundColor: "#23C833", color: "white"}} onClick={() => {
             setSuccessAdd(false);
           
           }}>OK</Fab>
          </Box>
          
        </Box>
      </Modal>

    </div>
  );
}

export default AddItem;
