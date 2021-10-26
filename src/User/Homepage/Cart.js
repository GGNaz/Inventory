import React from 'react'
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
import logo from './AppLogo.png';
import burger from './burger.png';
import pizza from './pizza.png';
import soda from './soda.png';
import donut from './donut.png';

function Cart() {
    return (
        <div>
        <Grid container>
             <Card style={{margin: "10px"}}>
         <Grid  xs={6}>
            <Grid xs={1} style={{padding: "10px"}}>
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80"
               style={{maxWidth: "100px", maxHeight: "100px"}} />
            </Grid>
            <Grid xs={5}>
            <h5>Burger Super XL</h5>
            </Grid>
            <Grid xs={3}>
            <h5>₱6.00</h5>
            </Grid>
           
         </Grid>
        
         <Grid  xs={6}>
            <Grid xs={1} style={{padding: "10px"}}>
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=699&q=80"
               style={{maxWidth: "100px", maxHeight: "100px"}} />
            </Grid>
            <Grid xs={2}>
            <h5>Burger Super XL</h5>
            </Grid>
            <Grid xs={3}>
            <h5>₱6.00</h5>
            </Grid>
           
         </Grid>
         </Card>
         </Grid>
        </div>
    )
}

export default Cart
