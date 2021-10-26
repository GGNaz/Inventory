import Task from '../Task/Task'
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CardActionArea } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Button from '@mui/material/Button';
import withLoading from '../HOC/withLoading';
const drawerWidth = 240;
function UserList() {
  const [state, setState] = useState({
   
    tasks: []
  });

  const doneTaskHandler = (id) => {
    let newState = { ...state }
    const taskIndex = newState.tasks.findIndex((task) => task.id === id);
    newState.tasks[taskIndex].completed = true;
    newState.count++;
    setState(newState)
  }

  const clearTaskHandler = () => {

    setState({
      tasks: []
    });
  }
  // const addTaskHandler = (title) => {
  //   let newState = { ...state }
  //   newState.tasks.push({
  //     id: uuidv4(),
  //     title: title,
  //     completed: false,
  //   });

  //   setState(newState);
  // };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response) =>{
       setState({
         tasks: response.data.slice(0,3)
       });
     })
   }, [])

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <PetsIcon />  PuppyCo.
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
                <Link to="/home" style={{ textDecoration: "none", color: "#3C4043" }}><b>Home</b></Link>
              </ListItem>
              <ListItem button key={"asdasd"}>
                <ListItemIcon>
                  <GroupAddIcon />
                </ListItemIcon>
                <Link to="/AddItem" style={{ textDecoration: "none", color: "#3C4043" }}><b>Add Puppy</b></Link>
              </ListItem>
              <ListItem button key={"asdasd"}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <Link to="/User" style={{ textDecoration: "none", color: "#3C4043" }}><b>User List <ChevronRightIcon/></b></Link>
              </ListItem>
            </List>

          </Box>
        </Drawer>



        {
          state.tasks.length > 0 ?
            state.tasks.map((task) => (




              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Card sx={{ maxWidth: 345 }}>

                  <CardActionArea>

                    <CardMedia
                      component="img"
                      height="220"
                      image="https://img.flaticon.com/icons/png/512/1177/1177568.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                      alt="User"
                    />
                    <CardContent>

                      <Typography gutterBottom variant="h5" component="div">

                        <Task
                          key={task.id}
                          clicked={() => doneTaskHandler(task.id)}
                         
                        >
                          {task.name}


                        </Task>
                        <MailOutlineIcon size="sm" /> <span style={{ fontSize: "15px" }}>{task.email}</span>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* <b>Position:</b> {task.company} */}
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                </Card>

              </Box>


            )) : <h2>-All items are hidden-</h2>
        }


      </Box>

    </div>
  )
}
export default withLoading(UserList);