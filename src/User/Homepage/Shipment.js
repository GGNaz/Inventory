import React, { useEffect, useState } from 'react'
import MobileNav from '../../Components/MobileNav'
import {Card, Fab, Grid, Paper} from "@mui/material";
import BottomNav_Orders from '../../Components/BottomNav_Orders';
import FilterFramesRoundedIcon from '@mui/icons-material/FilterFramesRounded';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import BadgeIcon from '@mui/icons-material/Badge';
import CallIcon from '@mui/icons-material/Call';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import api from "../../api/menu";

function Shipment() {

    const [orders, setOrders] = useState([]);
    const [orderID, setOrderId] = useState("");
    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = async () => {
        const response = await api.get("/logs");
        setOrders(response.data);
    }
    // const apiRecieveOrder = async (orderID) => {
    //     const response = await api.delete("/logs"+orderID);
    //     setOrders(response.data);
    //     getOrders();
    // }

console.log(orders);
    return (
        <div>
            <MobileNav/>
            <Card style={{height: "750px", margin: "20px", borderRadius: "20px", padding: "20px"}}>
            <h1 style={{fontSize: "30px"}}>My Orders</h1>
                        <p>Listed all orders made.</p>
            <Grid container style={orders.length>=5 ? (
              {  
               maxHeight:630,
               overflowY:'scroll',
           
              }
            ):null}>
                   {
                       orders.length > 0 ? (
                           orders.map((order) => (
                            <Paper style={{width: "100%", marginTop: "10px", backgroundColor: "#F7F7F7"}}>
                            <Grid container xs={12} style={{padding: "10px", color: "#323435"}}>
                                <Grid xs={12} style={{marginBottom: "10px"}}>
                                    <label><b>Order No: </b>{order._id}</label> 
                                </Grid>

                                <Grid xs={1}>
                                    <BadgeIcon/>
                                </Grid>
                                <Grid xs={5}>
                                    <label>- {order.name}</label>
                                </Grid>
        
                                <Grid xs={1}>
                                    <CallIcon/>
                                </Grid>
                                <Grid xs={5}>
                                    <label>- {order.mobileNum}</label>
                                </Grid>
        
                                <Grid xs={1}>
                                    <LocalShippingIcon/>
                                </Grid>
                                <Grid xs={5}>
                                    <label>- {order.typeOfDelivery}</label>
                                </Grid>
        
                                <Grid xs={1}>
                                    <PaymentIcon/>
                                </Grid>
                                <Grid xs={5}>
                                    <label>- ₱{order.amount}.00</label>
                                </Grid>
                                <Grid xs={1}>
                                    <LocationOnIcon/>
                                </Grid>
                                <Grid xs={10}>
                                    <label>- {order.address}</label>
                                </Grid>
        
                                {/* <Grid xs={12} style={{textAlign: "right"}}>
                                    <Fab variant="extended" size="small" 
                                    style={{backgroundColor: "#323435", color: "#ECD14C"}}
                                    onClick={() => {
                                        apiRecieveOrder(order._id);

                                    }}
                                    >Received</Fab>
                                </Grid> */}
                            </Grid>
        
                            </Paper>
                       ))
                       ):(
                        <Grid container>
                        <Grid xs={12} style={{marginTop: "50px"}}>
                        <img src="https://cdn.dribbble.com/users/357929/screenshots/2276751/media/678caef6068a976e4a0d94bbdba6b660.png?compress=1&resize=400x300" />
                        </Grid>
                        
                    </Grid>
                       )
                   }
                    

                  

                </Grid>
                
            </Card>
            <BottomNav_Orders/>
        </div>
    )
}

export default Shipment
