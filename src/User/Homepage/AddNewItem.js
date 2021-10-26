import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {
    Input,
    FormControl,
    InputLabel,
   
    OutlinedInput,
    Checkbox,
    FormControlLabel
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const AddNewItem = () => {


    return (
        <div>
         <BottomNavigation sx={{ width: 500, backgroundColor: "#ef5350"}} color="danger" >
      <BottomNavigationAction
        label="Recents"
        value="recents"
         icon={ <Link to="/homepage"><DashboardOutlinedIcon sx={{ color: "white"}} /></Link>}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Link to="/Additem"><PostAddOutlinedIcon sx={{ color: "white"}} /></Link>}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<Link to="/List"><PeopleAltOutlinedIcon sx={{ color: "white"}} /></Link>}
      />
     <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<Link to="/Adduser"><PersonAddOutlinedIcon sx={{ color: "white"}} /></Link>}
      />
    </BottomNavigation>
    <div style={{paddingTop: "2%"}}>
    <center>
        <Card>
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
        </Card>
    </center>
    </div>
        </div>
    )
}

export default AddNewItem;
