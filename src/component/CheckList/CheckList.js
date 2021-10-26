import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
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
const drawerWidth = 240;
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 200 },
  
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150,
  },
 
];

const rows = [
  { id: 1,  firstName: 'Husky', age: 10 },
  { id: 2, firstName: 'German Shepherd', age: 0 },
  { id: 3, firstName: 'Pomeranian', age: 3 },
  { id: 4,  firstName: 'Poodle', age: 8 },
 
];

export default function DataTable() {
  return (
    <div >
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
