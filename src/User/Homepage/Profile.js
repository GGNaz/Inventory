import {
  Avatar,
  Card,
  Grid,
  Box,
  Fab,
  Paper,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import BottomNav_Accounts from "../../Components/BottomNav_Accounts";
import MobileNav from "../../Components/MobileNav";
import EditIcon from "@mui/icons-material/Edit";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import api from "../../api/menu";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useHistory } from "react-router";
import LogoutLottie from "../../Components/LogoutLottie";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function Profile() {
  const history = useHistory();
  const [accountDetails, setAccoutnDetails] = useState([]);
  const [modalAlert, setModalAlert] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const successStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    p: 4,
  };

  useEffect(() => {
    userList();
  }, []);

  const updateProfile = async () => {
    const params = {
      name: name,
      picture: image,
      address: address,
    };

    const response = await api.put("/users/" + accountDetails._id, params);
    if (response.status === 200) {
      userList();
      setEditProfile(false);
    }
    console.log("profile :", response.status);
  };
  const userList = async () => {
    const response = await api.get("/users");
    const result = response.data;

    const filterIsUser = await result.filter(function (users) {
      return users.isUserLog === true;
    });
    setName(filterIsUser[0].name);
    setAddress(filterIsUser[0].address);
    setImage(filterIsUser[0].picture);

    setAccoutnDetails(filterIsUser[0]);
  };

  const logoutBtn = async (userID) => {
    const response = await api.put("/users/" + userID, { isUserLog: false });

    if (response.status === 200) {
      console.log("Logout success!");
      history.push("/login");
    }
  };

  return (
    <div>
      <MobileNav />
      <Card
        style={{
          margin: "20px",
          height: "750px",
          borderRadius: "40px",
          padding: "20px",
        }}
      >
        <center>
          <h3>My Profile</h3>
        </center>
        <hr />
        <Grid container>
          <Grid xs={4}>
            <Box
              sx={{ boxShadow: 10 }}
              style={{ borderRadius: "50%", height: "100px", width: "100px" }}
            >
              <img
                src={accountDetails.picture}
                style={{ borderRadius: "50%", height: "100px" }}
              />
            </Box>
          </Grid>

          <Grid xs={5} style={{ marginTop: "20px" }}>
            <h5>
              <b>{accountDetails.name}</b>
            </h5>
            <p>Junior Developer</p>
          </Grid>

          <Grid xs={3} style={{ marginTop: "20px" }}>
            <Fab
              variant="extended"
              size="medium"
              style={{
                backgroundColor: "#323435",
                color: "#ECD14C",
              }}
              onClick={() => {
                setEditProfile(true);
              }}
            >
              <EditIcon size="small" />
              Edit
            </Fab>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "20px" }}>
          <Grid xs={12}>
            <h5>My Purchases</h5>
          </Grid>

          <Grid xs={12}>
            <Link to="/cart">
              <Paper style={{ padding: "10px" }} sx={{ boxShadow: 2 }}>
                <AccountBalanceWalletOutlinedIcon
                  fontSize="large"
                  style={{ color: "#323435", marginRight: "10px" }}
                />
                <label>To Pay</label>
                <KeyboardArrowRightOutlinedIcon
                  fontSize="large"
                  style={{ float: "right", color: "#323435" }}
                />
              </Paper>
            </Link>
          </Grid>
          <Grid xs={12} style={{ marginTop: "5px" }}>
            <Link to="/shipment">
              <Paper style={{ padding: "10px" }} sx={{ boxShadow: 2 }}>
                <LocalShippingOutlinedIcon
                  fontSize="large"
                  style={{ color: "#323435", marginRight: "10px" }}
                />
                <label>To Ship</label>
                <KeyboardArrowRightOutlinedIcon
                  fontSize="large"
                  style={{ float: "right", color: "#323435" }}
                />
              </Paper>
            </Link>
          </Grid>
          <Grid xs={12} style={{ marginTop: "5px" }}>
            <Paper style={{ padding: "10px" }} sx={{ boxShadow: 2 }}>
              <InboxOutlinedIcon
                fontSize="large"
                style={{ color: "#323435", marginRight: "10px" }}
              />
              <label>To Receive</label>
              <KeyboardArrowRightOutlinedIcon
                fontSize="large"
                style={{ float: "right", color: "#323435" }}
              />
            </Paper>
          </Grid>
          <Grid xs={12} style={{ marginTop: "5px" }}>
            <Paper style={{ padding: "10px" }} sx={{ boxShadow: 2 }}>
              <GradeOutlinedIcon
                fontSize="large"
                style={{ color: "#323435", marginRight: "10px" }}
              />
              <label>To Rate</label>
              <KeyboardArrowRightOutlinedIcon
                fontSize="large"
                style={{ float: "right", color: "#323435" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "20px" }}>
          <Grid xs={12}>
            <h5>Settings</h5>
          </Grid>

          <Grid xs={12} style={{ marginTop: "5px" }}>
            <Paper style={{ padding: "10px" }} sx={{ boxShadow: 2 }}>
              <SettingsOutlinedIcon
                fontSize="large"
                style={{ color: "#323435", marginRight: "10px" }}
              />
              <label>Account</label>
              <KeyboardArrowRightOutlinedIcon
                fontSize="large"
                style={{ float: "right", color: "#323435" }}
              />
            </Paper>
          </Grid>
          <Grid xs={12} style={{ marginTop: "5px" }}>
            <Paper
              style={{ padding: "10px" }}
              sx={{ boxShadow: 2 }}
              onClick={() => {
                setModalAlert(true);
              }}
            >
              <ExitToAppOutlinedIcon
                fontSize="large"
                style={{ color: "#323435", marginRight: "10px" }}
              />
              <label>Logout</label>
            </Paper>
          </Grid>
        </Grid>
      </Card>
      <BottomNav_Accounts />

      <Modal
        open={modalAlert}
        onClose={!modalAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={successStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <LogoutLottie />
            <div style={{ textAlign: "center" }}>
              <h4>Are you sure?</h4>
            </div>
          </Typography>
          <Grid container>
            <Grid xs={6}>
              <Box style={{ textAlign: "right" }}>
                <Fab
                  variant="extended"
                  size="medium"
                  style={{ backgroundColor: "#23C833", color: "white" }}
                  onClick={() => {
                    logoutBtn(accountDetails._id);
                  }}
                >
                  Yes
                </Fab>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Box style={{ textAlign: "left", marginLeft: "5px" }}>
                <Fab
                  variant="extended"
                  size="medium"
                  style={{ backgroundColor: "#e57373", color: "white" }}
                  onClick={() => {
                    setModalAlert(false);
                  }}
                >
                  No
                </Fab>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Modal
        open={editProfile}
        onClose={!editProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={successStyle}>
          <Box style={{ marginBottom: "10px", textAlign: "right" }}>
            <Fab
              size="small"
              onClick={() => setEditProfile(false)}
              style={{ backgroundColor: "#e57373", color: "white" }}
            >
              <CloseOutlinedIcon />
            </Fab>
          </Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ textAlign: "center" }}
          >
            <h4>Edit Profile</h4>
          </Typography>
          <Grid container>
            <Grid xs={12}>
              <center>
                <Box
                  sx={{ boxShadow: 10 }}
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  <img
                    src={image}
                    style={{ borderRadius: "50%", height: "100px" }}
                  />
                </Box>
              </center>
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                variant="outlined"
                name="email"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                fullWidth
                style={{ backgroundColor: "#F5FAFE" }}
              />
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Image"
                variant="outlined"
                name="image"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                fullWidth
                style={{ backgroundColor: "#F5FAFE" }}
              />
            </Grid>
            <Grid xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Address"
                variant="outlined"
                name="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                fullWidth
                style={{ backgroundColor: "#F5FAFE" }}
              />
            </Grid>
            <Grid xs={12} sx={{ mt: 3 }}>
              <Fab
                variant="extended"
                size="large"
                style={{
                  backgroundColor: "#323435",
                  color: "#ECD14C",
                  width: "100%",
                }}
                onClick={() => {
                  updateProfile();
                }}
              >
                Update
              </Fab>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default Profile;
