import { Card, Paper, Grid, Divider, Fab, Box} from "@mui/material";
import React , {useState,useEffect} from "react";
import MobileNav from "../../Components/MobileNav";
import cartlogo from "../../User/Homepage/cartlogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import api from '../../api/menu';
import { getCartChange } from "../../redux/reducers/getCartReducer";
import notfound from "./notfound.png";
import { v4 as uuidv4 } from "uuid";
import { getLogsChange } from "../../redux/reducers/getLogsReducer";
function MyCart() {
    const dispatch = useDispatch();
  const cartNum = useSelector((state) => state.getCart.getCart);
  const [orderDate, setOrderDate] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const timestamp = Date.now();
  let timeOrdered = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

  let fee = 20;
  let grandTotal = 0;
  useEffect(() => {
    addToApiLogs();
    deleteFromApi();
  }, [])
 
  const addToApiLogs = async () => {
   
    const params ={
      id: uuidv4(),
      date: timeOrdered,
      amount: grandTotal+fee+".00",
    }
    const result = await api.post("/Logs",params);
      dispatch(getLogsChange(result));
  }

  const removeAction = (params) => {
    deleteFromApi(params);
  }
  const deleteFromApi = async (params) => {
      const result = await api.delete(`/cart/${params}`);
      dispatch(getCartChange(result.data));
    //   const newCartList = cartNum.filter((cart) => {
    //     return cart.id !== id;
    //   });

  }

 

  return (
    <div>
      <MobileNav />
      <Card
        style={{
          height: "100%",
          padding: "20px",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <Box>
          <Fab size="medium" >
            <Link to="/home" style={{color: "#323435"}}>
              <ArrowBackIosNewOutlinedIcon />
            </Link>
          </Fab>
        </Box>
        <Grid container>
          <Grid xs={12} style={{ textAlign: "center" }}>
            <img src={cartlogo} style={{ height: "200px" }} />
          </Grid>

          <Grid xs={2}>
            <h6>Image</h6>
          </Grid>
          <Grid xs={4}>
            <h6>Name and Price</h6>
          </Grid>

          <Grid xs={2} style={{ textAlign: "center" }}>
            <h6>Quantity</h6>
          </Grid>
          <Grid xs={2} style={{ textAlign: "center" }}>
            <h6>Total</h6>
          </Grid>
          <Grid xs={2} style={{ textAlign: "right" }}>
            <h6>Remove</h6>
          </Grid>

          {cartNum.length > 0 ? (
            cartNum.map((cart) => {
              const total = cart.cartPrice * cart.cartPcs;
              grandTotal += total;
              return (
                <>
                  <Grid xs={2}>
                    <img
                      src={cart.cartImage}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "10px",
                        marginBottom: "5px",
                      }}
                    />
                  </Grid>
                  <Grid xs={4}>
                    <label>{cart.cartName}</label>
                    <br />
                    <label>₱{cart.cartPrice}</label>
                  </Grid>

                  <Grid xs={2} style={{ textAlign: "center" }}>
                    <label>{cart.cartPcs}</label>
                  </Grid>
                  <Grid xs={2} style={{ textAlign: "center" }}>
                    <label>₱{cart.cartPrice * cart.cartPcs}</label>
                  </Grid>
                  <Grid xs={2} style={{ textAlign: "center"}}>
                    <ClearOutlinedIcon onClick={() => removeAction(cart.id)} style={{backgroundColor: "#323435", borderRadius: "20px", color: "white"}}  /> 
                  </Grid>
                </>
              );
            })
          ) : 
              <center>
            <img src={notfound} style={{height: "350px"}} />
            </center>
            // <label>0</label>
          }
        </Grid>
      </Card>
      <Card
        style={{
          height: "100%",
          padding: "20px",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
          {/* style={{backgroundColor: "#323435", borderRadius: "20px", color: "white"}} */}
        <Grid container>
          <Grid xs={6}>
            <h6>Delivery Fee :</h6>
          </Grid>
          <Grid xs={6} style={{ textAlign: "right" }}>
          {/* {cartNum.length !== 0 ? ( */}
            <h6>₱20</h6>
                  {/* ):(<h6>0</h6>)
          } */}
            
          </Grid>
          <Grid xs={6}>
              
            <h6>Grand Total :</h6>
          </Grid>
          <Grid xs={6} style={{ textAlign: "right" }}>
          {/* {cartNum.length !== 0 ? ( */}
            <h6>₱{grandTotal + fee}</h6>
                  {/* ):(<h6>0</h6>)
          }
            */}
          </Grid>
            
          <Grid xs={12} style={{ textAlign: "right" }}>
            <Box>
              <form onSubmit={addToApiLogs}>
              <Fab
                size="medium"
                variant="extended"
                style={{ color: "#F9D342", backgroundColor: "#323435" }}
                type="submit"
              >
                Order Now <FmdGoodOutlinedIcon />
              </Fab>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default MyCart;
