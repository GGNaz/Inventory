import { Card,Box, Fab, Checkbox } from '@mui/material';
import React from 'react'
import MobileNav from '../../Components/MobileNav'
import sample from '../Homepage/sample.png';
import { useHistory } from "react-router";
function DefaultPage() {
    const history = useHistory();
    const sendtologin = () => {
        history.push("/login");
    }
    return (
        <div>
            <MobileNav/>
               
           
            <Card style={{margin: "20px", padding: "40px", textAlign: "center", borderRadius: "20px"}}>
                    <img src={sample} style={{height: "400px"}}  />
                    <div style={{marginTop: "60px"}}>
                        <h1>Welcome to Tara Eat</h1>
                        <p>Your Favourite Food delivery Partner.</p>
                        <br/><br/><br/>
                        <Checkbox/>I agree to the Terms and Conditions
                        <Box>
                            <Fab variant="extended" size="medium" style={{backgroundColor: "#323435", color: "#ECD14C"}} onClick={sendtologin}>
                                Get Started
                            </Fab>
                        </Box>
                    </div>
                </Card>
        </div>
    )
}

export default DefaultPage
