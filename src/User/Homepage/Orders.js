import { Card, Fab } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BottomNav_Orders from "../../Components/BottomNav_Orders";
import MobileNav from "../../Components/MobileNav";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import withLoading from "../../HOC/withLoading";
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
      >
        <h4>My Purchaces</h4>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead style={{backgroundColor: "#323435"}}>
          <TableRow>
            <TableCell style={{color: "#ECD14C"}}>Order ID</TableCell>
           
            <TableCell align="center" style={{color: "#ECD14C"}}>Date</TableCell>
            <TableCell align="center" style={{color: "#ECD14C"}}>Received</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getOrders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
             
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="right" >
                <CheckCircleOutlineOutlinedIcon color="success" />
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
      <BottomNav_Orders/>
    </div>
  );
}

export default withLoading(Orders);
