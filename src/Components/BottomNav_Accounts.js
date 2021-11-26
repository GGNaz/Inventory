import React from "react";
import { useHistory } from "react-router";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
function BottomNav_Accounts() {
  const history = useHistory();
  const bottomNavItems = [
    {
      // title: "Home",

      icon: <FastfoodIcon style={{ fontSize: "35px",cursor: "pointer" }} />,

      activeIcon: (
        <FastfoodIcon style={{ fontSize: "35px", color: "#F9D342",cursor: "pointer" }} />
      ),
      onClick: () => history.push("/home"),
    },

    {
      // title: "New Menu",

      icon: <AddBusinessIcon style={{ fontSize: "35px",cursor: "pointer" }} />,

      activeIcon: (
        <AddBusinessIcon style={{ fontSize: "35px", color: "#F9D342",cursor: "pointer" }} />
      ),
      onClick: () => history.push("/addItem"),
    },

    {
      // title: "My Order",

      icon: <LocalShippingIcon style={{ fontSize: "35px",cursor: "pointer" }} />,

      activeIcon: (
        <LocalShippingIcon style={{ fontSize: "35px", color: "#F9D342",cursor: "pointer" }} />
      ),
      onClick: () => history.push("/shipment"),
    },
    {
      // title: "My Order",

      icon: <ChatIcon style={{ fontSize: "35px",cursor: "pointer" }} />,

      activeIcon: (
        <ChatIcon style={{ fontSize: "35px", color: "#F9D342",cursor: "pointer" }} />
      ),
      onClick: () => history.push("/chat"),
    },

    {
      // title: "Account",

      icon: <PersonIcon style={{ fontSize: "35px",cursor: "pointer" }} />,

      activeIcon: (
        <PersonIcon style={{ fontSize: "35px", color: "#F9D342",cursor: "pointer" }} />
      ),

      onClick: () => history.push("/profile"),
    },
  ];
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={4}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default BottomNav_Accounts;
