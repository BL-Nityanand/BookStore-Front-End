import React from 'react'
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Counter from '../components/counter';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import CustomerDetails from '../components/customerDetails';
import { add_order, getCartItem } from '../services/dataServices';
import { useHistory, useNavigate } from "react-router-dom";


const useStyles = makeStyles({

    CartContainerOne: {
        width: '50vw',
        height: 'auto',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
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
        height: '140px',
        // border: '1px solid yellow',
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
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
        // border: '1px solid pink',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        lineHeight: 0
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

})

function OrderSummery() {
    const classes = useStyles()
    const [cartItems, setCartItems] = React.useState([])

    let navigate = useNavigate();

    useEffect(() => {
        getCartItem()
            .then((response) => {
                console.log(response.data.result);
                // console.log(JSON.stringify(response.data.result));
                setCartItems(response.data.result)
            })
            .catch((err) => console.log(err))

    }, [])

    const submit = () => {
        console.log('clicked checkout');
        
        
        let obj;
        let arr = []
        for (let index = 0; index < cartItems.length; index++) {
            obj = {
                product_id: cartItems[index].product_id._id,
                product_name: cartItems[index].product_id.bookName,
                product_quantity: cartItems[index].quantityToBuy,
                product_price: cartItems[index].product_id.price
            }

            arr.push(obj)
            console.log(obj, 'arr obj')
        }

        let booksData = {
            orders: arr
        }

        add_order(booksData)
        .then((response) => {
            console.log(response);
            navigate('/orderplaced');
        })
        .catch((err) => console.log(err))

        
        
        // history.push('./orderPlace')

        //     add_order(obj)
        //         .then((response) => {
        //             console.log(response.data.result);
        //         })
        //         .catch((err) => console.log(err))
        // }

        // for (let index = 0; index < arr.length; index++) {
        //     console.log(index, 'arr index');

        // }



        // add_order(obj)
        // .then((response) => {
        //     console.log(response.data.result);
        // })
        // .catch((err) => console.log(err))
    }

    return (
        <Box className={classes.CartContainerOne}>
            <Box className={classes.headingBox}>
                <h6>Order summery</h6>
            </Box>


            {
                cartItems.map((book) => (
                    <Box className={classes.bodyBox}>
                        <Box className={classes.bodyBox}>
                            <Box className={classes.bodyBoxOne}>
                                <Box className={classes.imgbox}>
                                    <img style={{ width: '100px', height: '118px', }} src="./images/bookImage.png" alt="" />
                                </Box>
                                <Box className={classes.detailsBox}>
                                    <h4 style={{ position: 'relative', bottom: 10 }}>{book.product_id.bookName}</h4>
                                    <h6 style={{ fontWeight: 400, position: 'relative', bottom: 20 }}>{book.product_id.author}</h6>
                                    <h4 style={{ position: 'relative', bottom: 20 }}>Rs.{book.product_id.price}</h4>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                ))
            }


            <Box className={classes.buttonBox}>
                <Button size='small' style={{ borderRadius: 0 }} variant="contained" onClick={submit}>Checkout</Button>

            </Box>
        </Box>
    )
}

export default OrderSummery