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
import success from "./success.gif";
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
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { getCartChange } from "../../redux/reducers/getCartReducer";
import { useDispatch } from "react-redux";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { OutlinedInput } from "@material-ui/core";
import { withRouter } from "react-router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import cardpic from "./card.jpg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SuccessLottie from "../../Components/SuccessLottie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

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

const BurgerList = () => {
  const [open, setOpen] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => {
  //   setOpen(false);
  // }

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
  const user = useSelector((state) => state.getUser.getUser);

  const cartNum = useSelector((state) => state.getCart.getCart);
  const [table, setTable] = useState([]);
  const [cartNumbers, setCartNumbers] = useState([]);
  const [username, setUsername] = useState([]);
  const [NameOfUser, setnameOfUser] = useState([]);
  useEffect(() => {
    menuList();
    cartList();
    userList();
  }, []);

  const menuList = async () => {
    const response = await api.get("/products");
    const result = response.data;
    setTable(result);
  };

  const cartList = async () => {
    const response = await api.get("/cart");
    const result = response.data;
    setCartNumbers(result);
  };

  const userList = async () => {
    const response = await api.get("/users");
    const result = response.data;
    setUsername(result);

    const filterIsUser = await result.filter(function (users) {
      return users.isUserLog === true;
    });
    console.log(filterIsUser[0]._id);
    const findresponse = await api.get("/users/" + filterIsUser[0]._id);
    console.log(findresponse.data[0].name);
    setnameOfUser(findresponse.data[0].name);
    // if(findresponse){
    //   setnameOfUser(findresponse[0].name);
    // }
  };

  useEffect(() => {
    const filterFood = menu.filter(function (food) {
      return food.foodName.toLowerCase().includes(search.toLowerCase());

      // food.foodType.toLowerCase().includes(search.toLowerCase())
      //  food.foodPrice.toLowerCase().includes(search.toLowerCase()) ||
      //     food.foodType.toLowerCase().includes(search.toLowerCase())
    });

    setFilterFood(filterFood);
  }, [search]);

  const searchField = () => {
    if (search !== "") {
      return filterFood;
    }
    return menu;
  };

  let total = 0;
  let ctrTotal = 0;
  const dispatch = useDispatch();

  const addToCart = async () => {
    const filtercartId = cartNum.filter(function (carts) {
      return carts.cartName.toLowerCase().includes(Name.toLowerCase());
    });
    console.log("na filter na name", filtercartId);
    if (Object.keys(filtercartId).length === 0) {
      const params = {
        cartName: Name,
        cartPrice: Price,
        cartImage: Image,
        cartPcs: 1,
      };
      newCart(params);
    } else {
      const params = {
        cartName: Name,
        cartPrice: Price,
        cartImage: Image,
        cartPcs: filtercartId[0].cartPcs + 1,
      };
      await api.put("/cart/" + filtercartId[0]._id, params);
    }
  };
  const newCart = async (params) => {
    await api.post("/cart", params);

    cartList();
  };

  var settings = {
    // dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <IconButton edge="start" color="inherit" aria-label="menu">
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
             
            </Card> */}

      <Grid container>
        <Grid xs={10} style={{ padding: "10px 10px 10px 20px" }}>
          <h5>Hi, {NameOfUser}</h5>
          <p>Welcome to Tara Eat app.</p>
        </Grid>
        <Grid xs={2} style={{ padding: "10px 10px 10px 10px" }}>
          <Link
            to="/mycart"
            style={{ color: "#323435", textDecoration: "none" }}
          >
            <Fab style={{ backgroundColor: "#F9D342" }}>
              <ShoppingCartOutlinedIcon />
              {cartNumbers.length > 0
                ? cartNumbers.map((cart) => {
                    const ctr = 1;
                    ctrTotal += ctr;
                  })
                : null}
              <label>
                <b>{ctrTotal}</b>
              </label>
            </Fab>
          </Link>
        </Grid>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          {/* <FormControl variant="outlined" sx={{ mt:1, mb:1}} fullWidth>
          {/* <InputLabel htmlFor="outlined-adornment-password">se</InputLabel> 
          <OutlinedInput
            id="outlined-adornment-password"
            size="small"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                <SearchRoundedIcon/>
                </IconButton>
              </InputAdornment>
            }
            placeholder="Search"
          />
        </FormControl> */}
          <center>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 465,
                mb: 1,
                borderRadius: "10px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search google maps" }}
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <IconButton sx={{ p: "10px" }} aria-label="search">
                {search === "" ? (
                  <SearchIcon />
                ) : (
                  <CloseRoundedIcon
                    onClick={() => {
                      setSearch("");
                      return menu;
                    }}
                  />
                )}
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <Button
                color="primary"
                sx={{ p: "5px" }}
                aria-label="directions"
                style={{
                  backgroundColor: "#323435",
                  borderRadius: "7px",
                  color: "#ECD14C",
                }}
              >
                <SortRoundedIcon />
              </Button>
            </Paper>
          </center>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        style={{ marginLeft: "1px", height: "20%" }}
      >
        <Card
          sx={{ boxShadow: 10 }}
          style={{
            padding: "10px",
            marginRight: "5px",
            borderRadius: "20px",
            backgroundImage: `url(${cardpic})`,
          }}
        >
          <Grid item xs={11}>
            <div style={{ minHeight: "250px", width: "450px" }}>
              <Grid container>
                <Grid xs={1}></Grid>
                <Grid xs={9} style={{ marginTop: "50px" }}>
                  <label
                    style={{
                      fontSize: "40px",
                      fontFamily: "Bradley Hand, cursive",
                      color: "#323435",
                      textShadow: "2px 2px white",
                    }}
                  >
                    <strong>
                      Your
                      <span
                        style={{
                          color: "#ECD14C",
                          textShadow: "2px 2px black",
                        }}
                      >
                        {" "}
                        Favourite{" "}
                      </span>{" "}
                    </strong>
                  </label>
                </Grid>
                <Grid xs={2}></Grid>
                <Grid xs={3}></Grid>
                <Grid xs={7}>
                  <h1>
                    <strong
                      style={{
                        fontFamily: "Bradley Hand, cursive",
                        color: "#323435",
                        textShadow: "2px 2px white",
                      }}
                    >
                      delivery Partner.
                    </strong>
                  </h1>
                </Grid>
                <Grid xs={7}></Grid>
                <Grid xs={5} style={{ marginTop: "20px" }}>
                  <Box sx={{ "& > :not(style)": { m: 1 } }}>
                    <Fab
                      size="medium"
                      variant="extended"
                      style={{ backgroundColor: "#ECD14C" }}
                    >
                      Learn more <ArrowForwardOutlinedIcon />
                    </Fab>
                  </Box>
                </Grid>
              </Grid>
            </div>
            {/* <div style={{ cursor: "pointer", position: "absolute", textAlign: "right", marginTop: "45%",  }}>
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
            </video> */}
          </Grid>
        </Card>
      </Grid>

      <Grid container>
        <Grid xs={6}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <h4 style={{ fontSize: "20px" }}> Recommended </h4>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box
            sx={{ "& > :not(style)": { m: 1 } }}
            style={{ textAlign: "right" }}
          >
            <label> See all </label>
          </Box>
        </Grid>
      </Grid>

      <Slider {...settings}>
        {menu.length > 0 ? (
          searchField().map((food) => (
            <div key={food._id}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  marginLeft: "8px",
                  marginRight: "8px",
                  borderRadius: "20px",
                }}
              >
                {food.foodPcs <= 9 ? (
                  <div>
                    <label
                      style={{
                        backgroundColor: "#C82333",
                        padding: "5px",
                        position: "absolute",
                        opacity: "90%",
                        color: "white",
                        borderRadius: "20px 0px 10px 0px",
                      }}
                    >
                      <FavoriteBorderIcon />
                      {food.foodPcs}
                    </label>

                    <CardMedia
                      component="img"
                      height="220"
                      image={food.foodImage}
                      alt={food.foodName}
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      style={{
                        backgroundColor: "#23C833",
                        padding: "5px",
                        position: "absolute",
                        opacity: "90%",
                        color: "white",
                        borderRadius: "20px 0px 10px 0px",
                      }}
                    >
                      <FavoriteBorderIcon />
                      {food.foodPcs}
                    </label>

                    <CardMedia
                      component="img"
                      height="220"
                      image={food.foodImage}
                      alt={food.foodName}
                    />
                  </div>
                )}
                <CardContent>
                  <Typography gutterBottom component="div">
                    <Grid container>
                      <Grid xs={9} style={{ fontSize: "15px" }}>
                        <strong>{food.foodName}</strong>
                      </Grid>
                      <Grid xs={3}>
                        <div
                          style={{
                            textAlign: "center",
                            padding: "1px",
                            backgroundColor: "#ECD14C",
                            borderRadius: "10px",
                            fontSize: "12px",
                          }}
                        >
                          <b>{food.foodType}</b>
                        </div>
                      </Grid>
                    </Grid>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Grid container>
                      <Grid xs={6} style={{ fontSize: "20px" }}>
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
                                setOpen(true);
                              }

                              // handleOpen()
                            }
                            style={{
                              backgroundColor: "#323435",

                              color: "#ECD14C",
                            }}
                          >
                            {" "}
                            <AddOutlinedIcon />
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
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box style={{ marginBottom: "10px", textAlign: "right" }}>
              <Fab size="small" onClick={() => setOpen(false)}>
                <CloseOutlinedIcon />
              </Fab>
            </Box>

            <form>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={Image}
                  alt={Name}
                  // border="2px solid white"
                  hover
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
                  <Grid
                    xs={12}
                    style={{ textAlign: "justify", marginTop: "5px" }}
                  >
                    <p style={{ color: "#323435" }}>
                      <b>Nutrition Facts:</b> {Desc}
                    </p>
                  </Grid>
                  {/* <Grid xs={6}></Grid> */}
                  <Grid xs={6}>
                    <Box>
                      <Fab
                        size="medium"
                        variant="extended"
                        style={{ color: "#F9D342", backgroundColor: "#323435" }}
                        onClick={() => {
                          setFoodName(Name);
                          setFoodImg(Image);
                          setFoodPrice(Price);
                          addToCart();
                          setOpen(false);
                          setModalAlert(true);
                        }}
                      >
                        Add to cart <ShoppingCartOutlinedIcon />
                      </Fab>
                    </Box>
                  </Grid>
                  {/* <Grid xs={6} style={{textAlign: "right"}}>
                    <Card style={{padding: "7px", borderRadius: "20px", width: "70%"}} >
                    <center >
                      <AddBoxIcon/>
                      
                      <input
                        type="number"
                        value={counter}
                        defaultValue="1"
                        min="1"
                        variant="outlined"
                        style={{ width: "50px", border: "none" }}
                        onChange={(e) => {
                          setCounter(e.target.value);
                        }}
                        required
                      />
                      <IndeterminateCheckBoxIcon
                        
                      />
                    </center>
                    </Card>
                  </Grid> */}
                </Grid>
              </Typography>
            </form>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={modalAlert}
        onClose={!modalAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={successStyle}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <SuccessLottie/>
           <div style={{textAlign: "center"}}>
           <h4>Success!</h4>
           <p>You may check your cart at the top right corner of your screen.</p>
           </div>
          </Typography>
          
          <Box style={{textAlign: "right"}}>
           <Fab variant="extended" size="medium" style={{backgroundColor: "#e57373", color: "white"}} onClick={() => {
             setModalAlert(false);
           }}>Close</Fab>
          </Box>
          
        </Box>
      </Modal>
    </div>
  );
};

export default withLoading(BurgerList);
