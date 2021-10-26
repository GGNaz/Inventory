import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddItem from '../AddItem/AddItem';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex', width: '70%', padding: '2%' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
                <Link to="/home" style={{textDecoration: "none", color: "#3C4043"}}><b>Home</b></Link>
              </ListItem>
              <ListItem button key={"asdasd"}>
                <ListItemIcon>
                <GroupAddIcon /> 
                </ListItemIcon>
                <Link to="/AddItem" style={{textDecoration: "none", color: "#3C4043"}}><b>Add Puppy <ChevronRightIcon/></b></Link>
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
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
            <AddItem on/>
      </Box> */}
    </Box>
  );
}