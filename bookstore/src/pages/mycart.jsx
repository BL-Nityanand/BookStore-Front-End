import React from 'react'
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Counter from '../components/counter';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CustomerDetails from '../components/customerDetails';
import Header from '../components/header';
import OrderSummery from '../components/orderSummery';
import { useEffect } from 'react';
import { getCartItem } from '../services/dataServices';
import { colors } from '@mui/material';
import { removeCartItem } from '../services/dataServices'; 



const useStyles = makeStyles({
    // mainCartContainer: {
    //     width: '100vw',
    //     height: '100vh',
    //     border: '1px solid red',
    //     display:'flex',
    //     flexDirection:'column',
    //     justifyContent:'space-between',
    // },
    mainCartContainer: {
        width: '50vw',
        height: '65vh',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // margin: 100
    },
    CartContainerOne: {
        width: '100%',
        height: '300px',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headingBox: {
        width: '90%',
        height: '50px',
        // border: '1px solid red',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        fontSize: 25,
        fontStyle: 'inherit'
    },
    bodyBox: {
        width: '90%',
        height: '170px',
        border: '1px solid yellow',
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',
        color:'black'
    },
    buttonBox: {
        width: '90%',
        height: '50px',
        // border: '1px solid green',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    bodyBoxOne: {
        width: '400px',
        height: '120px',
        // border: '1px solid blue',
        display: 'flex',
        justifyContent: 'space-between'
    },
    imgbox: {
        width: '100px',
        height: '120px',
        // border: '1px solid green',
    },
    detailsBox: {
        width: '250px',
        height: '120px',
        backgroundColor: '1px solid pink',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        // lineHeight: 0
    },
    bodyBoxTwo: {
        width: '400px',
        height: '50px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bodyBoxTwo_inner: {
        width: '250px',
        height: '50px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    addrContainer: {
        width: '100%',
        height: '60px',
        border: '1px solid lightGrey',
        display: 'flex',
        justifyContent: 'center'
    },
    toggleBoxContainer: {
        width: '100%',
        height: 'auto',
    },
    orderSumContainer: {
        width: '100%',
        height: '60px',
        border: '1px solid lightGrey',
        display: 'flex',
        justifyContent: 'center'
    }
})

function Mycart(props) {
    const classes = useStyles()
    const [toggleAddr, setToggleAddr] = useState(true)
    const [continueBtnToggle, setContinueBtnToggle] = useState(true)
    const [cartItems, setCartItems] =React.useState([])

    const listenToPlaceOrder = () => {
        setToggleAddr(false)
    }

    const listenToCustomerDetails = () => {
        setContinueBtnToggle(false)
    }

    // const apiTest=()=>{
    //     getCartItem()
    //         .then((response) => {
    //             // console.log(JSON.stringify(response.data.result));
    //             console.log(response.data.result);
    //             // localStorage.setItem('token', response.data.result._id);
    //             setCartItems(response.data.result)
    //             console.log(cartItems,'testinf one');

    //         })
    //         .catch((err) => console.log(err))
    // }

    useEffect(() => {

        // let bookObj = {_id:[id]}
        getCartItem()
            .then((response) => {
                // console.log(JSON.stringify(response.data.result));
                console.log(response.data.result);
                // localStorage.setItem('token', response.data.result._id);
                setCartItems(response)
                // console.log(cartItems,'testinf one');

            })
            .catch((err) => console.log(err))

        // console.log(cartItems, 'testing one')
    }, [])

    // console.log(cartItems,'abc')

    const removeItem=(id)=>{
        removeCartItem(id).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
    }

    return (

        <Box className={classes.mainCartContainer}>
            <Paper elevation={1} className={classes.CartContainerOne}>
                <Box className={classes.headingBox}>
                    <h6>My cart ({cartItems.length})</h6>
                    {/* <button  style={{position:'relative', top:50}}> clickMe</button> */}
                </Box>
                {
                    cartItems.map((book) => (
                            <div>
                         <Box className={classes.bodyBox}>
                            <Box className={classes.bodyBoxOne}>
                                <Box className={classes.imgbox}>
                                    <img style={{ width: '100px', height: '118px', }} src="./images/bookImage.png" alt="" />
                                </Box>
                                <Box className={classes.detailsBox}>
                                    <h4 style={{ position: 'relative', bottom: 10 }}>{book.product_id.bookName}</h4>
                                    <h6 style={{ fontWeight: 400, position: 'relative', bottom: 20 }}>{book.product_id.author}</h6>
                                    <h4 style={{ position: 'relative', bottom: 20 }}>Rs.1500</h4>
                                </Box>
                            </Box>
                            <Box className={classes.bodyBoxTwo}>
                                <Box className={classes.bodyBoxTwo_inner}>
                                    <Counter />
                                    <h7 button onClick={()=>removeItem(book.product_id._id)}>Remove</h7>
                                </Box>
                               
                            </Box>

                         </Box>


                            
                            
                        </div>
                    ))
                }

                {
                    toggleAddr ?

                        <Box className={classes.buttonBox}>
                            <Button size='small' style={{ borderRadius: 0 }} variant="contained" onClick={listenToPlaceOrder}>Place Order</Button>

                        </Box> : null

                }
            </Paper>

            {/* <Box className={classes.toggleBoxContainer}>
                {
                    toggleAddr
                        ? <Box className={classes.addrContainer}> <h5 style={{ position: 'relative', right: 300, fontWeight: 600 }}>Address Details</h5> </Box>
                        : <CustomerDetails listenToCustomerDetails={listenToCustomerDetails} />
                        :null
                }
            </Box> */}

            <Box className={classes.toggleBoxContainer}>
                {
                    toggleAddr
                        ? <Box className={classes.addrContainer}> <h5 style={{ position: 'relative', right: 300, fontWeight: 600 }}>Address Details</h5> </Box>
                        : <CustomerDetails listenToCustomerDetails={listenToCustomerDetails} />

                }
            </Box>

            {/* <Box className={classes.addrContainer}>
                <h5 style={{position:'relative',right:300, fontWeight:600}}>Address Details</h5>
            </Box> */}

            <Box className={classes.toggleBoxContainer}>
                {
                    continueBtnToggle ? <Box className={classes.orderSumContainer}> <h5 style={{ position: 'relative', right: 300, fontWeight: 600 }}>Order Summery</h5> </Box> : <OrderSummery />
                }
            </Box>
        </Box>
    )
}

export default Mycart