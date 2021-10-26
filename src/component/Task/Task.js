import React from 'react';
import styles from './Task.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Task = (props) => {

  let classNames = [ styles.Task ];
  props.completed
    ? classNames.push(styles.Completed)
    : classNames.push(styles.Incomplete);


  return (
    <div className={classNames.join(' ')}>

    
          <h3 className={styles.inline}>{props.children}</h3>
          
      
     
    </div>
  );

}

export default Task;
