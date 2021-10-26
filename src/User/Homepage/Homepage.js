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

const Homepage = () => {


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
    <Card sx={{ maxWidth: 345,  boxShadow: "30px 16px 70px -12.125px rgba(0,0,0,0.3)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cf.shopee.ph/file/0432a1587116e99333a88fc38058dd4e"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            HiFi earphones       
           </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: PHP 8000.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="primary">
          View details
        </Button>
      </CardActions>
    </Card>
    </center>
    </div>

    <div style={{paddingTop: "2%"}}>
        <center>
    <Card sx={{ maxWidth: 345,  boxShadow: "30px 16px 70px -12.125px rgba(0,0,0,0.3)"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cf.shopee.ph/file/b78d6f1cc9286f3e0330a1c99097a2ff"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            RK61 Mechanical keyboard    
           </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: PHP 1000.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="primary">
          View details
        </Button>
      </CardActions>
    </Card>
    </center>
    </div>

    <div style={{paddingTop: "2%"}}>
        <center>
    <Card sx={{ maxWidth: 345,  boxShadow: "30px 16px 70px -12.125px rgba(0,0,0,0.3)"  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cf.shopee.ph/file/e52b365e23b8664be366b73d6d4b5bf7"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Yindiao Gaming Mouse 
           </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: PHP 11000.00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="primary">
          View details
        </Button>
      </CardActions>
    </Card>
    </center>
    </div>
        </div>
    )
}

export default Homepage;
