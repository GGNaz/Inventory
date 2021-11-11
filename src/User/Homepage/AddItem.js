import {
  Card,
  Grid,
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CardMedia,
  TextField,
  Box,
  Fab,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import BottomNav_AddItem from "../../Components/BottomNav_AddItem";
import api from "../../api/menu";
import { getMenuChange } from "../../redux/reducers/getMenuReducer";
import { useDispatch } from "react-redux";
import userRestriction from "../../HOC/userRestriction";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import { withRouter } from "react-router";
import MobileNav from "../../Components/MobileNav";
import addicon from "./addicon.png";
import { alpha, styled } from "@mui/material/styles";
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [pcs, setPcs] = useState("");
  const [desc, setDesc] = useState("");
  const [ftype, setType] = useState("");
  const dispatch = useDispatch();

  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: false }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "2px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",

        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor:
          theme.palette.primary.main === "light" ? "#ffc107" : "#ffc107",
      },
    },
  }));

  const NewItem = (e) => {
    console.log("addbtn");
    e.preventDefault();
    if (!name || !price || !picture || !pcs || !desc) {
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
          onScreen: true,
        },
      });
    } else {
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
        onScreen: true,
      },
    });
  };
  return (
    <div>
      <MobileNav />
      <ReactNotification />

      <Grid
        container
        spacing={2}
        direction="column"
        style={{ textAlign: "center", padding: "10px", marginTop: "10px" }}
      >
        <Grid item xs={12}>
          <Card style={{ padding: "40px", borderRadius: "20px" }}>
            {picture.length !== 0 ? (
              <CardMedia
              sx={{boxShadow: 10}}
                component="img"
                height="250"
                image={picture}
                alt="Image shows here!"
                style={{borderRadius: "10px"}}
                // border="2px solid white"
              />
            ) : (
              <CardMedia
                component="img"
                height="250"
                image={addicon}
                alt="Image shows here!"
                // border="2px solid white"
              />
            )}
            <Grid xs={12}>
              <label
                style={{
                  fontFamily: "Apple Chancery, cursive",
                  fontSize: "30px",
                  color: "#323435",
                }}
              >
                <b>Tara Eat</b>
              </label>
            </Grid>

            <form style={{ marginTop: "30px" }} onSubmit={NewItem}>
              <Grid xs={12}>
                <Grid xs={12}>
                  <TextField
                    type="text"
                    color="warning"
                    label="Image Link"
                    id="reddit-input"
                    variant="filled"
                    style={{
                      marginTop: 11,
                      border: "2px solid #e2e2e1",
                      borderRadius: "5px",
                    }}
                    name="image"
                    onChange={(e) => {
                      setPicture(e.target.value);
                    }}
                    fullWidth
                  />
                </Grid>

                <Grid container>
                  <Grid xs={6} style={{ paddingRight: "5px" }}>
                    <TextField
                      color="warning"
                      label="Name"
                      id="reddit-input"
                      variant="filled"
                      style={{
                        marginTop: 11,
                        border: "2px solid #e2e2e1",
                        borderRadius: "5px",
                      }}
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>

                  <Grid xs={6}>
                    <FormControl
                      variant="filled"
                      sx={{ mt: 1.5, minWidth: 200 }}
                    >
                      <InputLabel
                        id="demo-simple-select-filled-label"
                        color="warning"
                      >
                        Type
                      </InputLabel>
                      <Select
                        color="warning"
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      >
                        <MenuItem value="Burger">Burger</MenuItem>
                        <MenuItem value="Pizza">Pizza</MenuItem>
                        <MenuItem value="Drinks">Drinks</MenuItem>
                        <MenuItem value="Dessert">Dessert</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid xs={6} style={{ paddingRight: "5px" }}>
                    <TextField
                      type="number"
                      color="warning"
                      label="Price"
                      id="reddit-input"
                      variant="filled"
                      style={{
                        marginTop: 11,
                        border: "2px solid #e2e2e1",
                        borderRadius: "5px",
                      }}
                      min="1"
                      name="price"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={6}>
                    <TextField
                      type="number"
                      color="warning"
                      label="Stocks"
                      id="reddit-input"
                      variant="filled"
                      style={{
                        marginTop: 11,
                        border: "2px solid #e2e2e1",
                        borderRadius: "5px",
                      }}
                      min="1"
                      name="stocks"
                      onChange={(e) => {
                        setPcs(e.target.value);
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid xs={12}>
                  <TextField
                    type="text"
                    color="warning"
                    label="Ingredients"
                    id="reddit-input"
                    variant="filled"
                    style={{
                      marginTop: 11,
                      border: "2px solid #e2e2e1",
                      borderRadius: "5px",
                    }}
                    name="Ingredients"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid xs={12} style={{ textAlign: "right" }}>
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <Fab
                    size="medium"
                    variant="extended"
                    style={{ color: "#F9D342", backgroundColor: "#323435" }}
                    aria-label="add"
                    type="submit"
                  >
                   Add to Menu <RestaurantMenuOutlinedIcon/>
                  </Fab>
                </Box>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
      <BottomNav_AddItem />
    </div>
  );
}

export default AddItem;
