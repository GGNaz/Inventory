import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Fade,
  Backdrop,
  Input,
  Divider,
  Fab,
  FormControl,
  InputAdornment,
  TextField,
  MenuItem,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "./TaraEat.png";
import burger from "./burger.png";
import pizza from "./pizza.png";
import soda from "./soda.png";
import donut from "./donut.png";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { makeStyles } from "@material-ui/core/styles";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Slider from "react-slick";
import BottomNav from "../../Components/BottomNav";
import { useSelector } from "react-redux";
import api from "../../api/menu";
import { v4 as uuidv4 } from "uuid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AddAlarm } from "@material-ui/icons";
import ads from "../Video/ads.mp4";
import VideocamIcon from "@mui/icons-material/Videocam";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import withLoading from "../../HOC/withLoading";
import { useHistory } from "react-router";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { getCartChange } from "../../redux/reducers/getCartReducer";
import { useDispatch } from "react-redux";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SearchIcon from "@material-ui/icons/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {
  OutlinedInput
} from '@material-ui/core';
import { withRouter } from "react-router";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import { getMenuChange } from "../../redux/reducers/getMenuReducer";

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

const BurgerList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openCart, setOpenCart] = React.useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  const [counter, setCounter] = useState("");
  const [Name, setFoodName] = useState("");
  const [Price, setFoodPrice] = useState("");
  const [Pcs, setFoodPcs] = useState("");
  const [Image, setFoodImg] = useState("");
  const [Desc, setFoodDesc] = useState("");
  const [reloadData, setReload] = useState("");
  const [search, setSearch] = useState("");
  const [filterFood, setFilterFood] = useState("");
  const menu = useSelector((state) => state.getMenu.getMenu);
  const cartNum = useSelector((state) => state.getCart.getCart);

  useEffect(() => {
    getMenuChange();
  }, [])

  useEffect(() => {
    const filterFood = menu.filter((food) =>
      food.foodName?.toLowerCase().includes(search.toLowerCase()) || 
      food.foodPrice?.toLowerCase().includes(search.toLowerCase()) ||
      food.foodType?.toLowerCase().includes(search.toLowerCase())
    );
    
    setFilterFood(filterFood);
    // eslint-disable-next-line
  }, [search]);

  const searchField = () => {
    console.log("search", search);
    if (search !== "") {
      return filterFood;
    }
    return menu;
  };

  let total = 0;
  let ctrTotal = 0;
  const dispatch = useDispatch();

  const addToCart = () => {
    const params = {
      id: uuidv4(),
      cartName: Name,
      cartPrice: Price,
      cartImage: Image,
      cartPcs: counter,
    };
    newCart(params);
  };
  const newCart = async (params) => {
    const apiNewItem = await api.post("/Cart", params);
    dispatch(getCartChange(apiNewItem));
    console.log("cartchange :", apiNewItem.data);
  };

  // const QtyCounter = (check) => {
  //   if (check == "add") {
  //     total = total + 1;
  //     setCounter(total);
  //   }
  //   // else if(check=="sub"){
  //   //     total = total-1;
  //   //     setCounter(total);
  //   // }
  // };

  var settings = {
    dots: true,
    infinite: false,
    // appendDots: dots => <ul>{dots}</ul>,
    // customPaging: div => (
    //     <div className="ft-slick__dots--custom">
    //      <li></li>
    //     </div>
    //   ),
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={logo} style={{ height: "70px", width: "70px" }} />
          </IconButton>

              <Card style={{borderRadius: "20px", width: "70%", color: "#323435"}} sx={{ boxShadow: 5 }}>
              <input type="text" 
              placeholder="Search..." 
              style={{padding: "10px", borderRadius: "20px", backgroundColor: "#F9D342", border: "none", color: "#323435",  width: "87%"}} 
              value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <span style={{marginTop: "4px", position: "absolute"}}><ManageSearchOutlinedIcon fontSize="large"/></span>
             
            </Card>

          <div style={{  marginLeft: "10px" }}>
          <Link to="/mycart" style={{color: "#323435", textDecoration: "none"}}>
            <Fab
            style={{backgroundColor: "#F9D342"}}  
            >
            
            <ShoppingCartOutlinedIcon/>
            
            {cartNum.length > 0 ? (
              cartNum.map((cart) => {
                const ctr = 1;
                ctrTotal += ctr;
              })
            ) : null}
            <label>
              <b>{ctrTotal}</b>
            </label>
            </Fab>
            </Link>
          </div>
        </Toolbar>
      </Box>
     
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <label
          // size="medium"
          // variant="extended"
          // style={{ color: "#F9D342", backgroundColor: "#323435" }}
          // aria-label="add"
        >
          <h4 style={{fontSize: "20px"}}> <LocalFireDepartmentOutlinedIcon  />Whats New?</h4>
        </label>
      </Box>

      <Grid
        container
        justifyContent="center"
        style={{ marginLeft: "1px"}}
      >
         <Card style={{padding: "10px", marginRight: "5px"}}>
        <Grid item xs={11}>
      
          
            <div style={{ cursor: "pointer", position: "absolute", textAlign: "right", marginTop: "45%",  }}>
              <Tooltip title="Like" placement="top">
                <IconButton>
                  <ThumbUpAltOutlinedIcon style={{ marginRight: "5px",color: "white"  }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Comment" placement="top">
                <IconButton>
                  <ChatBubbleOutlineOutlinedIcon style={{ marginRight: "5px",color: "white"  }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Share" placement="top">
                <IconButton>
                  <ShareOutlinedIcon style={{color: "white"}} />
                </IconButton>
              </Tooltip>
            </div>

            <video autoPlay loop muted style={{ height: "260px"}}>
              <source src={ads} type="video/mp4"></source>
            </video>
         
        </Grid>
        </Card>
      </Grid>
      <br />
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <label
          // size="medium"
          // variant="extended"
          // style={{ color: "#F9D342", backgroundColor: "#323435" }}
          // aria-label="add"
        >
          <h4 style={{ fontSize: "20px"}}><FavoriteIcon/> Recommended </h4>
        </label>
      </Box>

      <Slider {...settings}>
        {menu.length > 0 ? (
          searchField().map((food) => (
            <div key={food.id}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ marginLeft: "8px", marginRight: "8px", borderRadius: "20px"}}
              >
                {food.foodPcs <= 9 ? (
                  <div>
                    <label
                      style={{
                        backgroundColor: "white",
                        padding: "5px",
                        position: "absolute",
                        opacity: "90%",
                        color: "red",
                        borderRadius: "0px 0px 10px 0px",
                      }}
                    >
                      <FavoriteBorderIcon />
                      {food.foodPcs}
                    </label>

                    <CardMedia
                      component="img"
                      height="140"
                      image={food.foodImage}
                      alt={food.foodName}
                      
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      style={{
                        backgroundColor: "white",
                        padding: "5px",
                        position: "absolute",
                        opacity: "90%",
                        color: "green",
                        borderRadius: "0px 0px 10px 0px",
                      }}
                    >
                      <FavoriteBorderIcon />
                      {food.foodPcs}
                    </label>

                    <CardMedia
                      component="img"
                      height="140"
                      image={food.foodImage}
                      alt={food.foodName}
                    />
                  </div>
                )}
                <CardContent>
                  <Typography gutterBottom component="div"
                  >
                    <Grid container>
                      <Grid xs={9} style={{fontSize: "15px"}}><strong>{food.foodName}</strong></Grid>
                      <Grid xs={3}><div style={{textAlign: "center",padding: "1px", backgroundColor: "#ECD14C", borderRadius: "10px", fontSize: "12px"}}><b>{food.foodType}</b></div></Grid>
                    </Grid>
                    
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Grid container>
                      <Grid xs={6} style={{fontSize: "20px"}}>
                        <b>₱{food.foodPrice}</b>
                      </Grid>
                      <Grid xs={2}></Grid>
                      <Grid xs={4} style={{ textAlign: "right" }}>
                      <Box sx={{ "& > :not(style)": { m: 1 } }}>
                        <Fab
                        size="medium"
                      //  variant="extended"
                          onClick={
                            () => {
                              setFoodName(food.foodName);
                              setFoodImg(food.foodImage);
                              setFoodPrice(food.foodPrice);
                              setFoodDesc(food.foodDesc);
                              setFoodPcs(food.foodPcs);
                              handleOpen();
                            }

                            // handleOpen()
                          }
                          style={{
                            backgroundColor: "#323435",
                           
                            color: "#ECD14C",
                          }}
                        >
                          {" "}
                          <AddOutlinedIcon/>
                        </Fab>
                        </Box>
                      </Grid>
                    </Grid>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <label>We working no it, just wait my friend!</label>
        )}
      </Slider>
      <BottomNav />
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
          <Box style={{marginBottom: "10px"}}>
          <Fab size="medium" onClick={handleClose} >
            
              <ArrowBackIosNewOutlinedIcon />
         
          </Fab>
        </Box>
        <form onSubmit={addToCart}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <CardMedia
                component="img"
                height="250"
                image={Image}
                alt={Name}
                // border="2px solid white"
                hover
                style={{borderRadius: "20px"}}
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container>
               
                  <Grid xs={8}>
                    <h4>{Name}</h4>
                  </Grid>
                  <Grid xs={4} style={{ textAlign: "right" }}>
                    <b>₱{Price}</b>
                  </Grid>
                  <Grid xs={12} style={{ textAlign: "justify", marginTop: "5px" }}>
                    <p style={{ color: "#323435" }}><b>Ingredients:</b> {Desc}</p>
                  </Grid>
                  {/* <Grid xs={6}></Grid> */}
                  <Grid xs={6}>
                  <Box>
              <Fab
                size="medium"
                variant="extended"
                style={{ color: "#F9D342", backgroundColor: "#323435" }}
                type="submit"
              >
                Add to cart <ShoppingCartOutlinedIcon />
              </Fab>
            </Box>
                    {/* <Button
                      type="submit"
                      onClick={addToCart}
                      variant="outlined"
                      style={{ color: "#F9D342", backgroundColor: "#323435" }}
                    >
                      <ShoppingCartOutlinedIcon />
                      <strong>Add to Cart</strong>
                    </Button> */}
                  </Grid>
                  <Grid xs={6}>
                    <center>
                      <AddBoxIcon  />
                      <input
                        type="number"
                        value={counter}
                        defaultValue="1"
                        min="1"
                        variant="outlined"
                        style={{ width: "50px" }}
                        onChange={(e) => {
                          setCounter(e.target.value);
                        }}
                        required
                      />
                      <IndeterminateCheckBoxIcon
                        
                      />
                    </center>
                  </Grid>
                  
              </Grid>
            </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>

      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCart}
        onClose={handleCloseCart}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCart}>
          <Box sx={style}>
            <Button
              onClick={handleCloseCart}
              style={{ marginLeft: "-10px", color: "#323435" }}
            >
              <ArrowBackIosOutlinedIcon />
              Back
            </Button>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
          
            <Card style={{marginBottom: "2px"}}>
                    <Grid container>
                            <Grid xs={5}>
                              <h6>Name</h6>
                            </Grid>
                            <Grid xs={2}>
                            <h5>Pcs</h5>
                            
                            </Grid>
                            <Grid xs={2}>
                            <h5>Price</h5>
                            </Grid>
                            <Grid xs={3}>
                            <h5>Total</h5>
                            </Grid>
                            
                            </Grid>
                            
                        </Card>
               
              {cartNum.length > 0 ? (
                cartNum.map((cart) => {
                  return (
                    <Card paddingBottom={2}>
                    <Grid container>
                            <Grid xs={5}>
                              <label>{cart.cartName}</label>
                            </Grid>
                            <Grid xs={2}>
                              <label>{cart.cartPcs}</label>
                            </Grid>
                            <Grid xs={2}>
                              <label>{cart.cartPrice}</label>
                            </Grid>
                            <Grid xs={2}>
                              <label>{cart.cartPrice*cart.cartPcs}</label>
                            </Grid>
                            
                            
                            </Grid>
                            
                        </Card>
                  );
                })
              ) : (
                <label>0</label>
              )}
              
              </Typography>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
};

export default BurgerList ;
