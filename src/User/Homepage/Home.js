import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {
  Grid,
  Box,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Fab,
  Modal,
  Backdrop,
  Fade,
  CardMedia,
  TextField,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./TE.png";
import burger from "./burger.png";
import pizza from "./pizza.png";
import soda from "./soda.png";
import donut from "./donut.png";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { height } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';


import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';

import InputLabel from '@mui/material/InputLabel';

import FormHelperText from '@mui/material/FormHelperText';

import Visibility from '@mui/icons-material/Visibility';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const menu = useSelector((state) => state.getMenu.getMenu)
  const [imgLinks, setLinkImg] = useState({ newImg: "" });
  console.log("menu",menu);

  const inputNewImg = (event) => {
    setLinkImg({
      newImg: event.target.value,
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
       
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>

            <Typography
              variant="h6"
              style={{ color: "#323435" }}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={logo} style={{ height: "40px", width: "40px" }} />{" "}
              
         <FormControl>
          <Input style={{backgroundColor: "white", borderRadius: "30px", textDecoration: "none"}}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">search</InputAdornment>}
            label="Amount"
          />
       </FormControl>
            </Typography>
          
            
              <ShoppingCartOutlinedIcon style={{ color: "#323435" }} />
              
           
          </Toolbar>
        
      </Box>

      <Grid container spacing={2} paddingTop={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10} padding={5}>
          <Paper>
            <Grid
              container
              padding={1}
              style={{ textAlign: "center", fontSize: "15px" }}
            >
              <Grid item xs={12}>
                <h6>Select Category</h6>
                <Divider style={{padding: "2", marginBottom: "5px"}} />
              </Grid>
              <Grid item xs={3}>
                <Link to="/home/burger">
                  <img src={burger} style={{ height: "40px", width: "40px" }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/home/pizza">
                  <img src={pizza} style={{ height: "40px", width: "40px" }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/home/drinks">
                  <img src={soda} style={{ height: "40px", width: "40px" }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to="/home/desert">
                  <img src={donut} style={{ height: "40px", width: "40px" }} />
                </Link>
              </Grid>
              <Grid item xs={3}>
                <label>Burger</label>
              </Grid>
              <Grid item xs={3}>
                <label>Pizza</label>
              </Grid>
              <Grid item xs={3}>
                <label>Drinks</label>
              </Grid>
              <Grid item xs={3}>
                <label>Desert</label>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <CardMedia
                component="img"
                height="200"
                image={imgLinks.newImg}
                alt="Shows image here"
                border="2px solid white"
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container>
                <Grid xs={12} sx={{mb: 2}}>                 
                    <OutlinedInput
                      type="text"
                      style={{width: "37ch"}}
                      placeholder="Product Name"
                      startAdornment={
                        <InputAdornment position="start">
                          <FastfoodIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></FastfoodIcon>
                        </InputAdornment>
                      }
                    /> 
                </Grid>
                <Grid xs={6} sx={{mb: 2}} >
                 
                    <OutlinedInput
                      type="number"
                      style={{width: "18ch"}}
                      placeholder="Price"
                      startAdornment={
                        <InputAdornment position="start">
                          <AttachMoneyIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></AttachMoneyIcon>
                        </InputAdornment>
                      }
                    />
                 
                </Grid>
                <Grid xs={6} sx={{mb: 2}} style={{textAlign: "right"}}>             
                    <OutlinedInput
                      type="number"
                      style={{width: "18ch", marginRight: "3px"}}
                      placeholder="Quantity"
                      startAdornment={
                        <InputAdornment position="start">
                          <EqualizerOutlinedIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></EqualizerOutlinedIcon>
                        </InputAdornment>
                      }
                    />              
                </Grid>
                <Grid xs={12} sx={{mb: 2}}>
                 
                    <OutlinedInput
                      type="text"
                      value={imgLinks.newImg}
                      onChange={inputNewImg}
                      style={{width: "37ch"}}
                      placeholder="Image Link"
                      startAdornment={
                        <InputAdornment position="start">
                          <PhotoCameraIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></PhotoCameraIcon>
                        </InputAdornment>
                      }
                    />
                 
                </Grid>
                <Grid xs={12}>
                    <TextareaAutosize
                      style={{ height: "20ch", maxHeight: "20ch", width: "37ch" }}
                      placeholder="Product Description..."
                    /> 
                </Grid>
                <Grid xs={6}>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    style={{ color: "#323435", borderColor: "#323435" }}
                  >
                    <ArrowBackIcon />
                    <strong>Cancel</strong>
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    style={{ color: "yellow", backgroundColor: "#323435", borderColor: "#323435" }}
                  >
                    <AddIcon />
                    <strong>Add Product</strong>
                  </Button>
                </Grid> 
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>



      <Modal>
      <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <CardMedia
                component="img"
                height="150"
                image={imgLinks.newImg}
                alt="Image link show here"
                border="2px solid white"
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container>
                <Grid xs={12}>
                  <FormControl sx={{ m: 1, width: "35ch" }}>
                    <OutlinedInput
                      type="text"
                      placeholder="Enter product name"
                      startAdornment={
                        <InputAdornment position="start">
                          <FastfoodIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></FastfoodIcon>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl sx={{ m: 1, width: "35ch" }}>
                    <OutlinedInput
                      type="number"
                      placeholder="Enter price"
                      startAdornment={
                        <InputAdornment position="start">
                          <AttachMoneyIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></AttachMoneyIcon>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl sx={{ m: 1, width: "35ch" }}>
                    <OutlinedInput
                      type="text"
                      value={imgLinks.newImg}
                      onChange={inputNewImg}
                      placeholder="Enter picture link"
                      startAdornment={
                        <InputAdornment position="start">
                          <PhotoCameraIcon
                            style={{ color: "#323435" }}
                            edge="start"
                          ></PhotoCameraIcon>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid xs={12}>
                  <FormControl sx={{ m: 1, width: "35ch" }}>
                    <TextareaAutosize
                      style={{ height: "20ch", maxHeight: "20ch" }}
                      placeholder="Enter product description..."
                    />
                  </FormControl>
                </Grid>
                <Grid xs={6}>
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    style={{ color: "#323435", borderColor: "#323435" }}
                  >
                    <AddIcon />
                    <strong>Cancel</strong>
                  </Button>
                </Grid>
                <Grid xs={6}>
                  <Button
                    variant="outlined"
                    style={{ color: "#323435", borderColor: "#323435" }}
                  >
                    <AddIcon />
                    <strong>Add Product</strong>
                  </Button>
                </Grid> 
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Home;
