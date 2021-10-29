import { Card, Grid } from '@mui/material'
import React from 'react'
import logo from '../Homepage/AppLogo.png';
function LoginForm() {
    return (
        <div>
            <center>
            <Grid container spacing={2} direction="column" style={{textAlign: "center", padding: "10px"}}>
              <Card style={{padding: "50px"}}>
                <Grid item xs={6}>

                </Grid>
                <Grid xs={6}>
                    <img src={logo} style={{maxWidth: "300px"}} />
                    
                </Grid>
               
               
             </Card>
            </Grid>
            </center>
        </div>
    )
}

export default LoginForm
