import { Card,
    Fab,
     Grid,
      Avatar, 
      Paper,
      InputBase,
      IconButton
    } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MobileNav from "../../Components/MobileNav";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import BottomNav_Chat from "../../Components/BottomNav_Chat";
import api from "../../api/menu";
function RiderChat() {
 
 const [chat, setChatRoom] = useState([]);
 const [client, setClient] = useState("");
 const [currentUser, setCurrentUser] = useState([]);

 const [myMessage, setMyMessage] = useState("");
 useEffect(() => {
   ChatRoom();
   userList()
 }, [])

 const userList = async () => {
   const response = await api.get("/users");
   const result = response.data;
  console.log("jjjjjjjjsdf",result)
   const filterIsUser = await result.filter(function (users) {
     return users.userType.includes("Rider");
   });

   setCurrentUser(filterIsUser[0]);
   console.log("users",filterIsUser[0])
 };

 const ChatRoom = async () => {
   const response = await api.get("/chat/sort");
   const result = response.data;
   setChatRoom(result);
   console.log("ChatRoomasdasd", result);

   const filterBuyer = await result.filter(function (users) {
     return users.uType.includes("Buyer");
   });

   setClient(filterBuyer[0].uName);
   console.log("rider",filterBuyer[0].uName);
 }

 const postNewMessage = async () => {

   const params = {
     message: myMessage,
     uID: currentUser._id,
     uImage: currentUser.picture,
     uName: currentUser.name,
     uType: "Rider"
   }

   const response = await api.post("/chat",params);
   
   if(response.status===201){
    console.log("MESSAGE: ", response);
    setMyMessage("");
    ChatRoom();
   }
   
 }


 return (
   <div>
     <MobileNav />
     <Grid container style={{ padding: "10px" }}>
       <Grid xs={9}>
         <h5>Hi, Im {client} </h5>
         <p>Client</p>
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
       <Grid container style={{ padding: "20px", height: "400px" }}>
         <Grid xs={12} style={{ textAlign: "center" }}>
           <h4>Chat with your Client</h4>
           <hr />
         </Grid>
        
          {
            chat.length > 0 ? (
             chat.map((chats) => (
               <>
              { chats.uType === "Buyer" ? (
               <Grid xs={12} container style={{marginTop: "20px"}}>
          <Grid xs={2}>
             <center>
               <Avatar
                 alt="Remy Sharp"
                 src={chats.uImage}
               />
               <label>Client</label>
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
               {chats.message}
             </Paper>
           </Grid>
           <Grid xs={4}></Grid>
           </Grid>
                 ):(  
        <Grid xs={12} container style={{ marginTop: "10px"}}>
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
               {chats.message}
             </Paper>
           </Grid>
           <Grid xs={2} style={{ marginTop: "10px", textAlign: "center" }}>
             <center>
               <Avatar
                 alt="Remy Sharp"
                 src={chats.uImage}
               />
               <label>You</label>
             </center>
           </Grid>
         </Grid>
    
                 
                 )} 
                 </>
             )
              
               
             
             )
            ):null
          }
           </Grid>
     
        
        <Grid xs={12} style={{padding: "10px", marginTop: "220px"}}>     
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
           value={myMessage}
           onChange={(e) => {
             setMyMessage(e.target.value)
           }}
         />
         
          <Fab size="small" style={{backgroundColor: "#323435", color: "#ECD14C"}}
          onClick={() => {postNewMessage()}}
          ><SendRoundedIcon/></Fab>
         
         
       </Paper>
       </Grid>  
     </Card>
     <BottomNav_Chat />
   </div>
 );
}

export default RiderChat;
