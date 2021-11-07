import React from "react";
import { useHistory } from "react-router";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import FastfoodIcon from '@mui/icons-material/Fastfood';
function BottomNav_Accounts() {
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
      // title: "New Menu",

      icon: <AddBusinessIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <AddBusinessIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
      onClick: () => history.push("/addItem"),
    },

    {
      // title: "My Order",

      icon: <LocalShippingIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <LocalShippingIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),
    },

    {
      // title: "Account",

      icon: <ManageAccountsIcon style={{ fontSize: "35px" }} />,

      activeIcon: (
        <ManageAccountsIcon style={{ fontSize: "35px", color: "#F9D342" }} />
      ),

      onClick: () => history.push("/accounts"),
    },
  ];
  return (
    <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={3}
        onItemClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default BottomNav_Accounts;
