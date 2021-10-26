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
    let total=0;

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
   
    return (
        <div>
            <Grid container spacing={1} justifyContent="center">
                <Grid item xs={3} >
                    <Card sx={{ maxWidth: 345 }}>
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
                            image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80"
                            alt="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Burger
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container>
                                    <Grid xs={6}>
                                        <LocalOfferOutlinedIcon /><b>10.00</b>
                                    </Grid>
                                    <Grid xs={2}></Grid>
                                    <Grid xs={4}>
                                        <label onClick={handleOpen}
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
                </Grid>
                <Grid item xs={3}>

                    <Card sx={{ maxWidth: 345 }}>
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
                            image="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pizza
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container>
                                    <Grid xs={6}>
                                        <LocalOfferOutlinedIcon /><b>20.00</b>
                                    </Grid>
                                    <Grid xs={2}></Grid>
                                    <Grid xs={4}>
                                        <label style={{ backgroundColor: "#323435", padding: "3px", borderRadius: "5px", color: "white" }}>Details</label>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>

                    <Card sx={{ maxWidth: 345 }}>
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
                                Cola
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container>
                                    <Grid xs={6}>
                                        <LocalOfferOutlinedIcon /><b>5.00</b>
                                    </Grid>
                                    <Grid xs={2}></Grid>
                                    <Grid xs={4}>
                                        <label style={{ backgroundColor: "#323435", padding: "3px", borderRadius: "5px", color: "white" }}>Details</label>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} >

                    <Card sx={{ maxWidth: 345 }}>
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
                            image="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Donut
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container>
                                    <Grid xs={6}>
                                        <LocalOfferOutlinedIcon /><b>6.00</b>
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
                                image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80"
                                alt="green iguana"
                                border="2px solid white"

                            />


                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Grid container>
                                <Grid xs={9}>
                                <b>Burger Super XL</b>
                                </Grid>
                                <Grid xs={3} style={{textAlign: "right"}}>
                                <b>₱6.00</b>
                                </Grid>
                                <Grid xs={12} style={{textAlign: "justify"}}>
                                    <p  style={{color: "#323435"}}>A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants.</p>
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
        </div>
    )
}

export default BurgerList;
