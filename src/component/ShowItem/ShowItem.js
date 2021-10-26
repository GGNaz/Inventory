import Task from '../Task/Task'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import withLoading from '../HOC/withLoading';
import userRestrict from '../HOC/userRestrict';


const drawerWidth = 240;
function ShowItems () {
 

  return(
      <div>
        
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}  >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <PetsIcon/>  PuppyCo. 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
            <ListItem button key={"asdasd"}>
                <ListItemIcon>
                <HomeIcon /> 
                </ListItemIcon>
                <Link to="/home" style={{textDecoration: "none", color: "#3C4043"}}><b>Home <ChevronRightIcon/></b></Link>
              </ListItem>
              <ListItem button key={"asdasd"}>
                <ListItemIcon>
                <GroupAddIcon /> 
                </ListItemIcon>
                <Link to="/AddItem" style={{textDecoration: "none", color: "#3C4043"}}><b>Add Puppy</b></Link>
              </ListItem>
              <ListItem button key={"asdasd"}>
                <ListItemIcon>
                <PersonIcon /> 
                </ListItemIcon>
                <Link to="/User" style={{textDecoration: "none", color: "#3C4043"}}><b>User List</b></Link>
              </ListItem>
          </List>
          
        </Box>
      </Drawer>


      
  

    </div>
  )
}
export default userRestrict(withLoading(ShowItems)) ;