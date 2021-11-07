import {
  Card,
  Grid,
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import BottomNav_AddItem from "../../Components/BottomNav_AddItem";
import api from "../../api/menu";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import { useDispatch } from "react-redux";
import userRestriction from "../../HOC/userRestriction";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [pcs, setPcs] = useState("");
  const [desc, setDesc] = useState("");
  const [ftype, setType] = useState("");
  const dispatch = useDispatch();


  const NewItem = (e) => {
    e.preventDefault();
    if(
      !name || 
      !price ||
      !picture ||
      !pcs ||
      !desc
      )
      {
        store.addNotification({
        title: "Fill all fields!",
        message: "Other fields are empty.",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
      }
      else{
        const params = {
          id: uuidv4(),
          foodName: name,
          foodPrice: price,
          foodImage: picture,
          foodPcs: pcs,
          foodDesc: desc,
          foodType: ftype,
        };
        NewMenu(params);
      }
    
   
    // const apiNewItem = await api.post("/menu", params);
    // console.log("api",apiNewItem.data);
    
  };
  const NewMenu = async (params) => {
    const apiNewItem = await api.post("/menu", params);
    dispatch(getMenuChange(apiNewItem));
    store.addNotification({
      title: "Adding Success!",
      message: "You may check now on the menu",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
  };
  return (
    <div>
      <ReactNotification  />
      <h1>adding item</h1>
      <Card>
        <Grid container justifyContent="center">
          <form onSubmit={NewItem}>
            <Grid item xs={12}>
              <Input
                type="text"
                onInvalid={!name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="price"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="text"
                onChange={(e) => {
                  setPicture(e.target.value);
                }}
                placeholder="Picture"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="number"
                onChange={(e) => {
                  setPcs(e.target.value);
                }}
                placeholder="pcs"
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="text"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                placeholder="description"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
                <Select
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  style={{ width: "100px" }}
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Burger">Burger</MenuItem>
                  <MenuItem value="Pizza">Pizza</MenuItem>
                  <MenuItem value="Drinks">Drinks</MenuItem>
                  <MenuItem value="Dessert">Dessert</MenuItem>
                </Select>
              </FormControl>
              
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Add</Button>
            </Grid>
          </form>
        </Grid>
      </Card>
      <BottomNav_AddItem />
    </div>
  );
}

export default AddItem;
