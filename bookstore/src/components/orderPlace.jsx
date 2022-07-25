import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import HomeTest from '../pages/homeTest';
import { Navigate, useHistory, useNavigate } from "react-router-dom";



const useStyles = makeStyles({
    orderMainContainer:{
        width:'60vw',
        height:'90vh',
        // border:'1px solid red',
        margin:'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

function OrderPlace() {

    let navigate = useNavigate();
    const classes = useStyles();

    const handleClick=()=>{
        navigate("/home");
    }
  return (
    <Box className={classes.orderMainContainer}>
        <img src="./images/orderplaced.jpeg" style={{width:400}} />
        <p >hurry!!! your order is confirmed <br />
            the order id is #123456 save the order id for <br />
            further communication..
        </p>

        <img src="./images/orderplacedTable.PNG" alt="" />
        <Button variant="contained"  onClick={handleClick}>Continue Shopping</Button>

    </Box>
  )
}

export default OrderPlace