import React from "react";
import { useHistory } from "react-router";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BottomNavigation from "reactjs-bottom-navigation";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import "reactjs-bottom-navigation/dist/index.css";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
function BottomNav_AddItem() {
  const history = useHistory();
  const bottomNavItems = [
    {
      // title: "Home",

      icon: <FastfoodIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <FastfoodIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
      onClick: () => history.push("/home"),
    },
    {
      // title: "Home",

      icon: <AddBusinessIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <AddBusinessIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
      onClick: () => history.push("/addItem"),
    },

    {
      // title: "New Menu",

      icon: <LocalShippingIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <LocalShippingIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
      onClick: () => history.push("/shipment"),
    },

    {
      // title: "My Order",

      icon: <ChatIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <ChatIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
      onClick: () => history.push("/chat"),
    },

    {
      // title: "Account",

      icon: <PersonIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <PersonIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),

      onClick: () => history.push("/profile"),
    },
  ];
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={1}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default BottomNav_AddItem;
