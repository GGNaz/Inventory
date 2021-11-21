import { Card,
     Fab,
      Grid,
       Avatar, 
       Paper,
       InputBase,
       IconButton
     } from "@mui/material";
import React from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MobileNav from "../../Components/MobileNav";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import BottomNav_Chat from "../../Components/BottomNav_Chat";
function Chat() {
  return (
    <div>
      <MobileNav />
      <Grid container style={{ padding: "10px" }}>
        <Grid xs={9}>
          <h5>Hi, Im Nazer</h5>
          <p>Delivery Rider</p>
        </Grid>

        <Grid xs={3} textAlign="right">
          <Fab
            size="small"
            style={{
              marginRight: "10px",
              backgroundColor: "#323435",
              color: "#ECD14C",
            }}
          >
            <CallRoundedIcon />
          </Fab>
          <Fab
            size="small"
            style={{ backgroundColor: "#323435", color: "#ECD14C" }}
          >
            <VideocamRoundedIcon />
          </Fab>
        </Grid>
      </Grid>

      <Card
        style={{
          height: "700px",
          borderRadius: "40px 40px 10px 10px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Grid container style={{ padding: "20px" }}>
          <Grid xs={12} style={{ textAlign: "center" }}>
            <h4>Chat with your Rider</h4>
            <hr />
          </Grid>
          <Grid xs={12} container>
            <Grid xs={2}>
              <center>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
                />
                <label>Rider</label>
              </center>
            </Grid>
            <Grid xs={6}>
              <Paper
                style={{
                  padding: "10px",
                  borderRadius: "0px 20px 20px 20px",
                  color: "#323435",
                  backgroundColor: "#F0F8FF",
                  fontFamily: "Arial",
                }}
              >
                Hi! Im your delivery rider for today.
              </Paper>
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
          <Grid xs={12} container>
            <Grid xs={4}></Grid>
            <Grid xs={6} style={{ marginTop: "10px" }}>
              <Paper
                style={{
                  padding: "10px",
                  borderRadius: "20px 0px 20px 20px",
                  color: "#323435",
                  backgroundColor: "#ECD14C",
                }}
              >
                Ok. thanks! Im hungry....
              </Paper>
            </Grid>
            <Grid xs={2} style={{ marginTop: "10px", textAlign: "center" }}>
              <center>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/512/219/219976.png"
                />
                <label>You</label>
              </center>
            </Grid>
          </Grid>
        </Grid>
         <Grid xs={12} style={{padding: "10px", marginTop: "380px"}}>     
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F0F8FF",
            mb: 1,
            borderRadius: "20px",
            padding: "10px"
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message"
            inputProps={{ "aria-label": "search google maps" }}
            fullWidth
            
          />
          
           <Fab size="small" style={{backgroundColor: "#323435", color: "#ECD14C"}}><SendRoundedIcon/></Fab>
          
          
        </Paper>
        </Grid>  
      </Card>
      <BottomNav_Chat />
    </div>
  );
}

export default Chat;
