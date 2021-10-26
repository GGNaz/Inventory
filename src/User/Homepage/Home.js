import React from 'react';
import { 
    Grid, 
    Box,
    Paper,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,


} from '@mui/material';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import logo from './AppLogo.png';
import burger from './burger.png';
import pizza from './pizza.png';
import soda from './soda.png';
import donut from './donut.png';


const Home = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor: "#FFFFFF"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            
          </IconButton>
        
          <Typography variant="h6" style={{color: "#323435"}} component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} style={{height: "40px", width: "40px"}} /> <b>TARA EAT</b>
          </Typography>
          
          <Link to="/cart" style={{textDecoration: "none"}}><ShoppingCartOutlinedIcon style={{color : "#323435"}} />
          <span style={{color: "#323435"}}><b>12</b></span></Link>
        </Toolbar>
      </AppBar>
    </Box>
    
            <Grid container spacing={2} paddingTop={1}>
                <Grid item xs={3}>
                  
                </Grid>
                <Grid item xs={6} padding={5}>
                    <Paper >
                    <Grid container padding={1} style={{textAlign: "center", fontSize: "15px"}}>
                    <Grid item xs={3}>
                        <Link to="/home/burger">
                            <img src={burger} style={{height: "40px", width: "40px"}} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/home/pizza">
                            <img src={pizza} style={{height: "40px", width: "40px"}} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                       <Link to="/home/drinks">
                            <img src={soda} style={{height: "40px", width: "40px"}} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/home/desert">
                            <img src={donut} style={{height: "40px", width: "40px"}} />
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
                <Grid item xs={3}>
                  
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
