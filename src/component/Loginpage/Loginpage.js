import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from '../images/pupp.png';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import withLoading from '../HOC/withLoading';

function LoginUser({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = e => {
      e.preventDefault();

      Login(details);
  }
 

  return (
    <form onSubmit={submitHandler}>
      <div style={{ marginRight: "2%",marginTop: "2%" }}>

        <Card sx={{ maxHeight: 700, maxWidth: 400, float: "right", position: "relative" }}>
          <CardMedia
            component="img"
            height="160"
            image={Image}
            alt="Login"
          />



          <CardContent >

              <div style={{ textAlign: "center", padding: "40px" }}>
                <Typography gutterBottom variant="h5" component="div">

                  <h4>Sign In</h4>
                </Typography>
                <Typography variant="body2" color="text.secondary">
      
                  <TextField
                  sx={{paddingBottom: 2}}
                  id="standard-password-input"
                  label="Email"
                  type ="email"
                  name="email"
                  autoComplete="current-password"
                  variant="standard"
                  onChange={e => setDetails({...details, email: e.target.value })}
                  value={details.email}
                  
                  />
                  <br/>
                  <TextField
                  id="standard-password-input"
                  label="Password"
                  type ="password"
                  autoComplete="current-password"
                  variant="standard"
                  name="password"
                  onChange={e => setDetails({...details, password: e.target.value })}
                  value={details.password}
                  />

                  <br/>
                 
                  <div style={{paddingTop: "20px"}}>
                  <Button variant="contained" style={{width: '30ch', padding: "10px", marginLeft: "4%"}} type ="submit">Login</Button>
                  
                  </div>
                  
                </Typography>
              </div>
           
          </CardContent>
        </Card>

      </div>
    </form>
  )





}
export default withLoading(LoginUser);