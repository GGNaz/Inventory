import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import BatteryCharging90OutlinedIcon from '@mui/icons-material/BatteryCharging90Outlined';
import { Grid, Paper } from '@mui/material';


function MobileNav() {
    return (
        <div>
            <Paper style={{opacity: "90%"}}>
            <Grid container>
                <Grid xs={3}>
                    <label style={{marginLeft: "2px"}}>9:30</label>
                </Grid>
                <Grid xs={9} style={{textAlign: "right"}}>
                    <SignalWifi2BarIcon/> <SignalCellularAltIcon/>  <span style={{marginRight: "2px"}}><BatteryCharging90OutlinedIcon/>81%</span>
                </Grid>
            </Grid>

        </Paper>
        </div>
    )
}

export default MobileNav
