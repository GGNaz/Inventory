import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React, { useEffect, useRef } from 'react';
import styles from './Loader.module.css';
import logo from '../User/Homepage/TaraEat.png';
import taraLabel from './taraLabel.png';

const Loader = (props) => {
 
  return props.show? (
    <div className={styles.Backdrop}>
      <img className={styles.logo} src={logo} />
      <br/>
      <label>Tara Eat</label>
    </div> 
  ) : null
}

export default Loader
