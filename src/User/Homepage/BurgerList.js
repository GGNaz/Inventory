import React, { useState } from 'react';
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
    Fab
} from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from './AppLogo.png';
import burger from './burger.png';
import pizza from './pizza.png';
import soda from './soda.png';
import donut from './donut.png';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { makeStyles } from '@material-ui/core/styles';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Slider from "react-slick";
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useSelector } from 'react-redux';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AddAlarm } from '@material-ui/icons';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};


const BurgerList = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [counter, setCounter] = useState("");
    const [Name, setFoodName] = useState("");
    const [Price, setFoodPrice] = useState("");
    const [Pcs, setFoodPcs] = useState("");
    const [Image, setFoodImg] = useState("");
    const [Desc, setFoodDesc] = useState("");
    const menu = useSelector((state) => state.getMenu.getMenu)
    let total=0;

    const bottomNavItems = [
        {
          title: 'Home',
    
          icon: <HomeRoundedIcon style={{ fontSize: '18px' }} />,
    
          activeIcon: <HomeRoundedIcon style={{ fontSize: '18px', color: 'yellow' }} />
        },
    
        {
          title: 'New Menu',
    
          icon: <AddBusinessIcon style={{ fontSize: '18px' }} />,
    
          activeIcon: <AddBusinessIcon style={{ fontSize: '18px', color: 'yellow' }} />
        },
    
        {
          title: 'My Order',
    
          icon: <LocalShippingIcon style={{ fontSize: '18px' }} />,
    
          activeIcon: <LocalShippingIcon style={{ fontSize: '18px', color: 'yellow' }} />
        },
    
        {
          title: 'Account',
    
          icon: <ManageAccountsIcon style={{ fontSize: '18px' }} />,
    
          activeIcon: <ManageAccountsIcon style={{ fontSize: '18px', color: 'yellow' }} />,
    
          onClick: () => alert('menu clicked')
        }
      ]
    




const QtyCounter = (check) => {
   
    
    if(check=="add"){
        total = total+1;
        setCounter(total);
    }
    // else if(check=="sub"){
    //     total = total-1;
    //     setCounter(total);
    // }

}

var settings = {
    dots: true,
    infinite: true,
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
    // prevArrow: "none",
    // nextArrow: "none",
  };
    return (
        <div>


<Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "yellow", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <FavoriteIcon /> Best Seller
        </Fab>
      </Box>

           <Slider {...settings}>
      
     
                        {
                            menu.length > 0?
                                menu.map((food) =>(
                                    <div>
                                    <Card sx={{ maxWidth: 345 }} style={{marginLeft: "8px",marginRight: "8px"}}>
                                    {food.foodPcs <= 9  ?
                                    <div>
                                    <label style={{
                                        backgroundColor: "white",
                                        padding: "5px",
                                        position: "absolute",
                                        opacity: "90%",
                                        color: "red",
                                        borderRadius: '0px 0px 10px 0px'
                                    }}><FavoriteBorderIcon/>{food.foodPcs}</label>
                                    
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={food.foodImage}
                                    alt={food.foodName}
                                /></div>
                                :
                                <div>
                                <label style={{
                                        backgroundColor: "white",
                                        padding: "5px",
                                        position: "absolute",
                                        opacity: "90%",
                                        color: "green",
                                        borderRadius: '0px 0px 10px 0px'
                                    }}><FavoriteBorderIcon/>{food.foodPcs}</label>
                                    
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={food.foodImage}
                                    alt={food.foodName}
                                />
                                </div>
                                    }
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
                                    <Grid xs={4} style={{textAlign: "right"}}>
                                        <label 
                                            onClick={() =>{
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
                                                color: "white"
                                            }}
                                        > Details</label>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                             
                    </Card>
                    </div>
                        )): <label>We working no it, just wait my friend!</label>
                        
                        }
                    
    </Slider>
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          variant="extended"
          style={{ color: "yellow", backgroundColor: "#323435" }}
          aria-label="add"
        >
          <FavoriteIcon /> Best Seller
        </Fab>
      </Box>

    <Grid container spacing={1} justifyContent="center">
              
              <Grid item xs={12}>

                  <Card sx={{ maxWidth: 345 }} style={{marginLeft: "8px"}}>
                      <label style={{
                          backgroundColor: "#323435",
                          padding: "5px",
                          position: "absolute",
                          opacity: "70%",
                          color: "white",
                          borderRadius: '0px 0px 10px 0px'
                      }}>Free Delivery</label>
                      <CardMedia
                          component="img"
                          height="140"
                          image="https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
                          alt="green iguana"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          <Grid container>
                          <Grid xs={5}>
                              Cola
                          </Grid>
                          <Grid xs={3}>
                          </Grid>
                          <Grid xs={4} style={{color: "green", fontSize: "15px"}}>
                              <FavoriteBorderIcon/><label >12</label>
                          </Grid>
                          </Grid>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                              <Grid container>
                                  <Grid xs={6}>
                                     <b>₱5.00</b>
                                  </Grid>
                                  <Grid xs={2}></Grid>
                                  <Grid xs={4} style={{textAlign: "right"}}>
                                      <label style={{ backgroundColor: "#323435", padding: "3px", borderRadius: "5px", color: "white" }}>Details</label>
                                  </Grid>
                              </Grid>
                          </Typography>
                      </CardContent>
                  </Card>
              </Grid>
             
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
                    <Button onClick={handleClose} style={{marginLeft : "-10px", color: "#323435"}}><ArrowBackIosOutlinedIcon/>Back</Button>
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
                                <Grid xs={9}>
                                <b>{Name}</b>
                                </Grid>
                                <Grid xs={3} style={{textAlign: "right"}}>
                                <b>₱{Price}</b>
                                </Grid>
                                <Grid xs={12} style={{textAlign: "justify"}}>
                                    <p  style={{color: "#323435"}}>{Desc}</p>
                                </Grid>
                                <Grid xs={8}>
                                   
                                </Grid>
                                <Grid xs={6}>
                                <Button variant="outlined" style={{color: "#323435", borderColor: "#323435"}}><ShoppingCartOutlinedIcon /><strong>Add to Cart</strong></Button>
                                </Grid>
                                <Grid xs={6}>
                                    <center>
                                <AddBoxIcon onClick={() => QtyCounter("add")} /><Input type="text" placeholder="pcs" value={counter} defaultValue="1" variant="outlined"  style={{width: "50px"}}/><IndeterminateCheckBoxIcon onClick={() => QtyCounter("sub")} />
                                </center>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

            <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
      />
        </div>
    )
}

export default BurgerList;
