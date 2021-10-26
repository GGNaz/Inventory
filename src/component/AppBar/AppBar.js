import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '@mui/material/Modal';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import validator from 'validator';
import { useDispatch ,useSelector } from 'react-redux';
import { firstNameChange, lastNameChange } from '../../redux/reducers/user-reducer';
import withLoading from '../HOC/withLoading';
import userRestrict from '../HOC/userRestrict';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  radius: 5,
};

function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formErrors, setFromErrors] = useState({
    yourEmail: "",
    emailStyle: [],
    yourPassword: "",
    passwordStyle: []

  })



  // const [state, setState] = useState({
  //   email: '',
  //   password: ''
  // });


  const emailText = useSelector(state => state.user.email);
  const passwordText = useSelector(state => state.user.password);

  const dispatch = useDispatch();

  const inputNewTaskHandler = (event) => {
    // setState({
    //   email: event.target.value,
    // });

    switch (event.target.name) {
      case "email":
        dispatch(firstNameChange(event.target.value));
        break;
      case "password":
        dispatch(lastNameChange(event.target.value))
        break;

      default:
        break;
    }
  };




  const addTaskhandler = (title) => {
    const newAccount = {
      id: 20,
      email: title,
      password: ""

    }
    axios.post("https://jsonplaceholder.typicode.com/users", newAccount)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const validateForm = () => {
    let errors = {
      emailStyle: [],
      passwordStyle: [],

    }
    if (!emailText) {
      errors.yourEmail = "Please input an email.";
      errors.emailStyle.push(styles.red);
    }
    else if (!validator.isEmail(emailText)) {
      errors.yourEmail = "Email invalid.";
      errors.emailStyle.push(styles.green);
    }
    else if (validator.isEmail(emailText)) {
      errors.yourEmail = "Email verified.";
      errors.emailStyle.push(styles.green);
    }
    if (!passwordText) {
      errors.yourPassword = "Please input an password.";
      errors.passwordStyle.push(styles.red);
    }
    else if (passwordText.length <= 5) {
      errors.yourPassword = "Weak password.";
      errors.passwordStyle.push(styles.red);
    }
    else if (passwordText.length >= 6) {
      errors.yourPassword = "Strong password.";
      errors.passwordStyle.push(styles.green);
    }
    setFromErrors(errors);
  }

  useEffect(() => {
    validateForm();
  }, [passwordText, emailText])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <PetsIcon /> Puppy Co.
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Sign Up</Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box sx={style}>
              <center><h3>Create new user</h3></center>
              <label>Email:</label>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <input
                  type="text"
                  name="email"
                  value={emailText}
                  onChange={inputNewTaskHandler}
                  className="form-control"
                  placeholder="Enter email adress..."
                  required></input>
                {formErrors.yourEmail ? <p className={styles.black}>{formErrors.yourEmail}</p> : null}
              </Typography>

              <label>Password:</label>
              <Typography id="modal-modal-description" >
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={passwordText}
                  onChange={inputNewTaskHandler}
                  placeholder="Enter your password..."
                  required></input>
                {formErrors.yourPassword ? <p className={styles.black}>{formErrors.yourPassword}</p> : null}
              </Typography>

              <Button variant="contained" color="inherit" onClick={() => addTaskhandler(passwordText)}>Sign up</Button>
               <Button style={{marginLeft: "5px"}} variant="contained" color="inherit" onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default userRestrict(withLoading(ButtonAppBar));