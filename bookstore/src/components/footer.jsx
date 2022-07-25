import { Box } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { border } from '@mui/system';

const useStyles = makeStyles({
    footerContainer:{
        width:'100vw',
        height:'7vh',
        backgroundColor:'#2E1D1E',
        display:'flex',
        alignItems:'center',
        
    },
    textAreaBox:{
        color:'#FFFFFF',
        // font: 'normal normal medium 12px/15px Lato',
        fontSize:12,
        position:'relative',
        left:175
    }
})

function Footer() {
    const classes = useStyles();
  return (
    <Box className={classes.footerContainer}>
            <Box className={classes.textAreaBox}>
                Copyright © 2020, Bookstore Private Limited. All Rights Reserved
            </Box>
    </Box>
  )
}

export default Footer