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
import { getCartChange } from "../../redux/reducers/getCartReducer";
import { useDispatch } from "react-redux";
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
    const filterFood = menu.filter((food) =>
      food.foodName?.toLowerCase().includes(search.toLowerCase())
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

  const QtyCounter = (check) => {
    if (check == "add") {
      total = total + 1;
      setCounter(total);
    }
    // else if(check=="sub"){
    //     total = total-1;
    //     setCounter(total);
    // }
  };

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
            <img src={logo} style={{ height: "70px", width: "70px" }} />{" "}
          </IconButton>

          <Typography
            style={{ color: "#323435" }}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <FormControl>
              <TextField
                style={{
                  backgroundColor: "white",
                  borderRadius: "30px",
                  textDecoration: "none",
                  minWidth: "70%",
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">search</InputAdornment>
                }
                label="Search..."
              >
                <MenuItem>
                  <option>asdasd</option>
                </MenuItem>
              </TextField>
            </FormControl>
          </Typography>

          <div style={{ color: "#F9D342" }}>
            <ShoppingCartOutlinedIcon
              onClick={() => {
                handleOpenCart();
              }}
            />

            {cartNum.length > 0 ? (
              cartNum.map((cart) => {
                const ctr = 1;
                ctrTotal += ctr;
              })
            ) : null}
            <label>
              <b>{ctrTotal}</b>
            </label>
          </div>
        </Toolbar>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "#F9D342", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <VideocamIcon style={{ marginRight: "5px" }} /> Whats New?
        </Fab>
      </Box>

      <Grid
        container
        justifyContent="center"
        style={{ marginLeft: "1px", marginRight: "8px" }}
      >
        <Grid item xs={11}>
          <Card style={{ padding: "10px" }}>
            <h4>Bacon Burger</h4>
            <video autoPlay loop muted style={{ height: "247px" }}>
              <source src={ads} type="video/mp4"></source>
            </video>
            <div style={{ cursor: "pointer" }}>
              <Tooltip title="Like" placement="top">
                <IconButton>
                  <ThumbUpAltRoundedIcon style={{ marginRight: "8px" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Comment" placement="top">
                <IconButton>
                  <MessageRoundedIcon style={{ marginRight: "8px" }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Share" placement="top">
                <IconButton>
                  <ShareRoundedIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "#F9D342", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <FavoriteIcon style={{ marginRight: "5px" }} /> Best Seller
        </Fab>
      </Box>

      <Slider {...settings}>
        {menu.length > 0 ? (
          searchField().map((food) => (
            <div key={food.id}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ marginLeft: "8px", marginRight: "8px" }}
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
                  <Typography gutterBottom variant="h5" component="div">
                    {food.foodName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Grid container>
                      <Grid xs={6}>
                        <b>₱{food.foodPrice}</b>
                      </Grid>
                      <Grid xs={2}></Grid>
                      <Grid xs={4} style={{ textAlign: "right" }}>
                        <label
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
                            padding: "3px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          {" "}
                          Details
                        </label>
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
            <Button
              onClick={handleClose}
              style={{ marginLeft: "-10px", color: "#323435" }}
            >
              <ArrowBackIosOutlinedIcon />
              Back
            </Button>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <CardMedia
                component="img"
                height="250"
                image={Image}
                alt={Name}
                border="2px solid white"
              />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Grid container>
                <form onSubmit={addToCart}>
                  <Grid xs={9}>
                    <b>{Name}</b>
                  </Grid>
                  <Grid xs={3} style={{ textAlign: "right" }}>
                    <b>₱{Price}</b>
                  </Grid>
                  <Grid xs={12} style={{ textAlign: "justify" }}>
                    <p style={{ color: "#323435" }}>{Desc}</p>
                  </Grid>
                  <Grid xs={8}></Grid>
                  <Grid xs={6}>
                    <Button
                      type="submit"
                      variant="outlined"
                      style={{ color: "#F9D342", backgroundColor: "#323435" }}
                    >
                      <ShoppingCartOutlinedIcon />
                      <strong>Add to Cart</strong>
                    </Button>
                  </Grid>
                  <Grid xs={6}>
                    <center>
                      <AddBoxIcon onClick={() => QtyCounter("add")} />
                      <Input
                        type="text"
                        value={counter}
                        defaultValue="1"
                        variant="outlined"
                        style={{ width: "50px" }}
                        onChange={(e) => {
                          setCounter(e.target.value);
                        }}
                      />
                      <IndeterminateCheckBoxIcon
                        onClick={() => QtyCounter("sub")}
                      />
                    </center>
                  </Grid>
                </form>
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
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
      </Modal>
    </div>
  );
};

export default withLoading(BurgerList) ;
