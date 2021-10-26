import React, { useState, useEffect } from 'react';
import './App.css';
import { useDispatch ,useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Task from './component/Task/Task'
import Sidebar from './component/ItemList/ItemList'
import ButtonAppBar from './component/AppBar/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import LogApp from './component/Loginpage/Login';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import ShowItems from './component/ShowItem/ShowItem'
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { AddTask } from '@mui/icons-material';
import AddItem from './component/AddItem/AddItem';
import UserList from './component/UserList/UserList';
import CheckList from './component/CheckList/CheckList';
import { v4 as uuidv4 } from 'uuid';
import SearchAppBar from './component/Search/Search';
import Backdrop from './UI/Backdrop/Backdrop';
import UserForm from './User/LoginForm/UserForm';
import Homepage from './User/Homepage/Homepage';
import AddNewItem from './User/Homepage/AddNewItem';
import Home from './User/Homepage/Home';
import BurgerList from './User/Homepage/BurgerList';
import Cart from './User/Homepage/Cart';

function App() {






  const drawerWidth = 240;




  const addTaskHandler = (title) => {
    let newState = { ...state }
    newState.tasks.push({
      id: uuidv4(),
      title: "Siberian Husky",
      image: "https://vetstreet.brightspotcdn.com/dims4/default/81a2e35/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa9%2Ff54ad0a80611e0a0d50050568d634f%2Ffile%2FSiberian-Husky-4-645mk062811.jpg",
      description: "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family."
      , puppiesNo: 0
    });

    setState(newState);
  };

  const [state, setState] = useState({

    tasks: []
  });

  const userId = useSelector(state => state.user.id);


  useEffect(() => {
    console.log("[] Load");
    axios.get(`/users/${userId}/todos`)
      .then((response) => {
        setState({ tasks: response.data });
      })// eslint-disable-next-line
  }, []);

  const deleteTaskHandler = (id) => {
    let newState = { ...state }
    const taskIndex = newState.tasks.findIndex((task) => task.id === id);
    newState.tasks.splice(taskIndex, 1);

    setState(newState)
  }


  return (
    <div className="App" >


      <Switch>

        {/* <Route exact path="/">
          <UserForm/> */}
{/* 


          <div style={{ float: 'left', position: 'absolute', marginTop: '20%', marginLeft: '10%' }}>
            <p><h1>Keep Tracking your puppies</h1> <span style={{ textAlign: 'right' }}><b><h4>Using PuppyCo.</h4></b></span></p>
          </div>
          <ButtonAppBar />
          <LogApp />
        </Route>
        <Route exact path="/home">
          <SearchAppBar />

          <Box sx={{ display: 'flex' }}>
            <ShowItems />
            {
              state.tasks.length > 0 ?
                state.tasks.map((task) => (




                  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Card sx={{ maxWidth: 345 }}>

                      <CardActionArea>

                        <label style={{ fontSize: '20px', float: 'left', position: 'absolute', color: 'white', backgroundColor: '#1976D2', padding: '5px', border: '2px solid #1976D2', borderRadius: '0px 0px 10px 0px' }}><b>{task.puppiesNo}</b></label>
                        <CardMedia
                          component="img"
                          height="150"
                          image={task.image}
                          alt="Dog"
                        />
                        <CardContent>

                          <Typography gutterBottom variant="h5" component="div">

                            <Task
                              key={task.id}
                              remove={() => deleteTaskHandler(task.id)}
                              completed={task.completed}

                            >
                              {task.title}


                            </Task>

                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {task.description}
                          </Typography>
                        </CardContent>
                        <div style={{ padding: '10px' }}>
                          <Button variant="contained" >Add to Checklist</Button>
                        </div>
                      </CardActionArea>
                    </Card>

                  </Box>


                )) : <h2>-All items are hidden-</h2>
            }
          </Box>
        </Route>
        <Route exact path="/User">
          <ButtonAppBar />
          <UserList />


        </Route>
        <Route exact path="/CheckList">
          <ButtonAppBar />

          <CheckList />


        </Route>

        <Route exact path="/AddItem">
          <ButtonAppBar />
          <Sidebar />
          <AddItem
            onAddTask={addTaskHandler}
          /> */}
        {/* </Route> */}
          {/* <Route exact to="/homepage">
            <Homepage/>
          </Route> */}
          {/* <Route exact to="/Additem">
            <AddNewItem/>
          </Route> */}
          <Route exact path="/home">
            <Home />
            <BurgerList/>
          </Route>
            <Route exact path="/cart">
            <Home />
            <Cart />
           
          </Route>
      </Switch>







    </div>
  );
}

export default App;
