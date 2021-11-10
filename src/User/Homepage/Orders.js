import { Card } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BottomNav_Orders from "../../Components/BottomNav_Orders";
import MobileNav from "../../Components/MobileNav";

function Orders() {
    const getOrders = useSelector((state) => state.getLogs.getLogs)
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
        // {
        //     getOrders.length > 0 ? (
        //         getOrders.map((logs) => {
        //             <label>{logs.id}</label>
        //         }
        //         )):null
        // }
      ></Card>
      <BottomNav_Orders/>
    </div>
  );
}

export default Orders;
