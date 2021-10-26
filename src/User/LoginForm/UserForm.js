import React from 'react'
import Card from '@mui/material/Card';

import {
    CardContent,
    TextField
} from '@mui/material';
import {
    Input,
    FormControl,
    InputLabel,
    Button,
    OutlinedInput,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import { Link } from 'react-router-dom';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const UserForm = () => {


    return (
        <div>
            <Card style={{
                width: "80%", height: "100%", paddingTop: "10%", margin: "10% 10% 10% 10%",
                boxShadow: "30px 16px 70px -12.125px rgba(0,0,0,0.3)",
                
            }}>
                <center>
                    <img
                        style={{
                            height: "200px"

                        }}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png" alt="logo"></img>

                    <CardContent>
                        <FormControl sx={{ m: 1, width: '30ch' }} >
                            <OutlinedInput

                                type="email"
                                placeholder="Enter your email"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <EmailOutlinedIcon
                                            style={{ color: "#ef5350" }}

                                            edge="start"
                                        >

                                        </EmailOutlinedIcon>
                                    </InputAdornment>
                                }

                            />
                          
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '30ch' }} >
                            <OutlinedInput
                                type="password"
                                placeholder="Enter your password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon
                                            style={{ color: "#ef5350" }}
                                            edge="start"
                                        >
                                        </LockOutlinedIcon>
                                    </InputAdornment>
                                }

                            />
                            <FormControl sx={{}}>
                                <FormControlLabel
                                    value="end"
                                    style={{ color: "dark" }}
                                    control={<Checkbox />}
                                    label="Remember me."
                                    labelPlacement="Remember me."
                                />
                            </FormControl>
                            <div style={{ position: "center" }}>
                                <Button variant="contained" style={{ backgroundColor: "#EF4C29", width: "60%", position: "center" }}>Sign in</Button>
                            </div>
                        </FormControl>
                    </CardContent>
                    <footer >Don't have account? <span>
                        <Link to="signup" style={{ textDecoration: "none", color: "#ef5350" }}>Sign up</Link></span></footer>
                    <div style={{paddingBottom: "2%"}}>
                        <hr />
                        <label>Sign in with</label>
                        <br />
                      
                        
                        <img
                            style={{
                                height: "7%", width: "8%", marginRight: "1%"
                            }}
                            src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png" alt="facebook"></img>
                      
                        <img
                            style={{
                                height: "10%", width: "9%"
                            }}
                            src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="facebook"></img>
                       
                    </div>
                </center>
            </Card>
        </div>
    )
}

export default UserForm;
