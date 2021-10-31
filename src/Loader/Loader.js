import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React from 'react';
import styles from './Loader';

const Loader = (props) => {
   
    return props.show ? (
        <div >
          <h1 styles={{backgroundColor: "red"}} >hello</h1> 
        </div>
    ) : null
}

export default Loader
