import { Card } from '@mui/material';
import React, { memo, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PetsIcon from '@mui/icons-material/Pets';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import {Grid} from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
function areEqual(prevProps, nextProps) {
  return true;
}

const AddItem =(props) => {

  const [state, setState] = useState({
    newTask: ''
    
  });
  const [state1, setState1] = useState({
    newTask1: ''
    
  });
 

 
  const inputNewTaskHandler = (event) => {
    setState1({
      newTask1: event.target.value,
    });
  };

  
  const inputNewTaskHandler2 = (event) => {
    setState({
      newTask: event.target.value,
    });
  };

  return (
    <div >
       <Box>
       <Box component="main" sx={{ flexGrow: 1, p: 3}}>
      <Card style={{padding: "10px", marginLeft: "20%", width: "70%"}}>
         <h2>Add new puppy</h2>
      <img src={state1.image} style={{height: "150px", width: "200px"}} label="preview" />
      <Grid id="top-row"  container spacing={24}>
    <Grid item xs={12}>
    <label><h6><b>Puppy name :</b></h6></label>
    <TextField id="outlined-basic" variant="outlined" placeholder="Enter puppy name..."
      
      value={state.newTask} onChange={inputNewTaskHandler2} 
      
      />
      <br/>
    </Grid>
    <Grid item xs={12} >
    <label><h6><b>Image Link :</b></h6></label>
    <TextField id="outlined-basic" variant="outlined" placeholder="Enter puppy link..."
      style={{width: "70%"}}
      value={state1.newTask1} onChange={inputNewTaskHandler} 
      
      />
    </Grid>
  </Grid>
  <Grid id="bottom-row" container spacing={24}>
  <label><h6><b>Breed Details:</b></h6></label>
    <TextField id="outlined-basic" variant="outlined" placeholder="Enter puppy breed..."
     
      
      
      />
   
  </Grid>
      

     
    
      
      
    
      <div>
        <Button variant="contained" style={{float: "right"}} type="submit" onClick={() => props.onAddTask(state.newTask)}>Add Puppy</Button>
      </div>
      </Card>
      
          </Box>
            </Box>
     
    </div>
  );

}

export default AddItem;
