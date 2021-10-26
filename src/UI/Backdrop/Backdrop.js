import React from 'react';
import styles from './Backdrop.module.css';
import PetsIcon from '@mui/icons-material/Pets';
const Backdrop = (props) => {
    return props.show?(

        <div className={styles.Backdrop}>
            <PetsIcon /> <h3>Puppy Co.</h3>
        </div>
    ) : null
}
export default Backdrop;