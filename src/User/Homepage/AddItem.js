import { Card, Grid, Input, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import BottomNav_AddItem from '../../Components/BottomNav_AddItem';
import api from "../../api/menu";
import { getMenuChange } from '../../redux/reducers/getMenuReducer';
import { useDispatch } from 'react-redux';
function AddItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [pcs, setPcs] = useState("");
    const [desc, setDesc] = useState("");
   
    const dispatch = useDispatch();

    const NewItem = () => {
       
      
        const params = {
            id: uuidv4(),
            foodName : name,
            foodPrice : price,
            foodImage : picture,
            foodPcs : pcs,
            foodDesc : desc,
        }
        // const apiNewItem = await api.post("/menu", params);
        // console.log("api",apiNewItem.data);
       NewMenu(params);
    }
    const NewMenu = async (params) => {
        const apiNewItem = await api.post("/menu", params);
        dispatch(getMenuChange(apiNewItem));
            console.log("api :",apiNewItem.data);
    }
    return (
        <div>
            <h1>adding item</h1>
            <Card>
                <Grid container justifyContent="center">
                    <form onSubmit={NewItem}>
                    <Grid item xs={12}>
                       <Input type="text" onChange={(e) => {
                           setName(e.target.value);
                       }} placeholder="Name" />
                    </Grid>
                    <Grid item xs={12}>
                    <Input type="number" onChange={(e) => {
                           setPrice(e.target.value);
                       }} placeholder="price" />
                    </Grid>
                    <Grid item xs={12}>
                       <Input type="text" onChange={(e) => {
                           setPicture(e.target.value);
                       }} placeholder="Picture" />
                    </Grid>
                    <Grid item xs={12}>
                     <Input type="number" onChange={(e) => {
                           setPcs(e.target.value);
                       }} placeholder="pcs" />
                    </Grid>
                    <Grid item xs={12}>
                     <Input type="text" onChange={(e) => {
                           setDesc(e.target.value);
                       }} placeholder="description" />
                    </Grid>
                    <Grid item xs={12}>
                     <Button type="submit">Add</Button>
                    </Grid>
                    </form>
                </Grid>
            </Card>
            <BottomNav_AddItem/>
        </div>
    )
}

export default AddItem
