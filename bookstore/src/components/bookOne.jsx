import React, { useState } from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RatingComponent from './ratingComponent';
import Counter from './counter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { add_to_cart_item, add_wish_list, cart_item_quntity, getCartItem } from '../services/dataServices';
import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';


const useStyles = makeStyles({
    bookOneContainer: {
        width: '70vw',
        height: '80vh',
        display: 'flex',
        position: 'relative',
        left: 135,
        top: 20
    },
    bookOneContainerleft: {
        width: '45%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    bookOneContainerRight: {
        width: '55%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    bookOneContainerleft_inner: {
        width: '400px',
        height: '500px',
        display: 'flex'
    },
    innerOne: {
        width: '70px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column'
    },
    innerTwo: {
        width: '330px',
        height: '500px',
        display: 'flex',
        flexDirection: 'column'
    },
    innerTwo_subboxOne: {
        width: '330px',
        height: '400px',
        border: '1px solid #878787',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    innerTwo_imgBox: {
        width: '270px',
        height: '360px',
    },
    innerTwo_ButtonBox: {
        width: '330px',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',


    },
    innerOne_subOne: {
        width: '70px',
        height: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerOne_subOneImg: {
        width: '60px',
        height: '80px',
    },
    innerOne_subTwo: {
        width: '70px',
        height: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerOne_subTwoImg: {
        width: '60px',
        height: '80px',
    },
    rightBoxHeader: {
        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        lineHeight: 0.3,

    },
    ratingContainer: {
        width: '120px',
        height: '60',
        display: 'flex',
        flexDirection: 'row'
    },
    bookDetailsBox: {
        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        lineHeight: 0.3,

    }


})

function BookOne(props) {
    const classes = useStyles();

    const [toggleBtnCnt, settoggleBtnCnt] = useState(true)
    // const [count, setCount]= useState(1)
    // const [quantityData, setQuntityData]= useState({ id :'', quantity:''})
    const [bookState, setBookState] = useState([])
    const [quantitystate, setQuantityState] = useState(1)
    const [wishlistObj, setWishlistObj] = useState([])
    const [cartId, setCartId]= useState([])

    const wishlistMethod = () => {
        setWishlistObj(false)
        add_wish_list(props.id)
        .then((response) => {
            console.log(response);
            // setCount(response)

        })
        .catch((err) => console.log(err))
    }


    const decrementCount = () => {
        setQuantityState(prevCount => prevCount - 1)
        let dataQunt = {
            quantityToBuy: quantitystate - 1
        }
        Counter(dataQunt)
    }

    const incrementCount = () => {
        setQuantityState(prevCount => prevCount + 1)
        let dataQunt = {
            quantityToBuy: quantitystate + 1
        }
        Counter(dataQunt)
    }

    const addToBag = () => {
        settoggleBtnCnt(false)

        // let dataQunt = {
        //     quantityToBuy:props.quantity
        // }

        console.log(props.id, 'id...................');
        // console.log(props.quantity, 'quntity...................');

        add_to_cart_item(props.id)
            .then((response) => {
                console.log(response);
                // setCount(response)

            })
            .catch((err) => console.log(err))

        // cart_item_quntity(dataQunt)
        // .then((response) => {
        //     console.log(response);
        //     setCount(response)

        // })
        // .catch((err) => console.log(err))
    }

    useEffect(() => {
        getCartItem()
            .then((response) => {
                console.log(response);
                let filter = response.data.result.filter((book) => {
                    if (props.id === book.product_id._id) {
                        setQuantityState(book.quantityToBuy)
                        setCartId(book._id)
                        console.log(book.quantityToBuy, 'quantity')

                        return book
                    }
                })

                setBookState(filter)


            })
            .catch((err) => console.log(err))
    }, [])

    // console.log(props.bookName, 'in bookOne');
    // console.log(cartId.length);

    const Counter = (data) => {

        cart_item_quntity(data, props.id)
            .then((response) => {
                console.log(response);
                // setCount(response)

            })
            .catch((err) => console.log(err))
    }
    // const [bookObj, setbookObj] = useState({ _id: '', bookName: '', author: '', quantity: '', price: '', description:'' })

    const openBookOne = (bookObj) => {
        // console.log(bookObj,'data from bookOne');
        // setbookObj({_id:bookObj._id, bookName:bookObj.bookName, author:bookObj.author, quantity:bookObj.quantity, price:bookObj.price, description:bookObj.description})

    }



    return (
        <Box className={classes.bookOneContainer}>
            <Box className={classes.bookOneContainerleft}>
                <Box className={classes.bookOneContainerleft_inner}>
                    <Box className={classes.innerOne}>
                        <Box className={classes.innerOne_subOne}>
                            <Box className={classes.innerOne_subOneImg}>
                                <img style={{ width: '60px', height: '80px', }} src="./images/bookImage.png" alt="" />
                            </Box>
                        </Box>
                        <Box className={classes.innerOne_subTwo}>
                            <Box className={classes.innerOne_subTwoImg}>
                                <img style={{ width: '60px', height: '80px', }} src="./images/bookImage.png" alt="" />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.innerTwo}>
                        <Box className={classes.innerTwo_subboxOne}>
                            <Box className={classes.innerTwo_imgBox}>
                                <img style={{ width: '270px', height: '360px', }} src="./images/bookImage.png" alt="" />
                            </Box>
                        </Box>
                        <Box className={classes.innerTwo_subboxTwo}>
                            <Box className={classes.innerTwo_ButtonBox}>
                                {
                                    (cartId.length === 0)
                                        ? <Button variant="contained" style={{ backgroundColor: '#A03037', borderRadius: '0px' }} size='medium' onClick={addToBag}>ADD TO BAG</Button>
                                        // : <Counter/>
                                        : <Box style={{ width: 120, height: 35, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <RemoveIcon fontSize='small' style={{ borderRadius: 100, border: '1px solid lightGrey' }} onClick={decrementCount} />
                                            <Box style={{ width: 50, height: 30, border: '1px solid lightGrey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{quantitystate}</Box>
                                            <AddIcon fontSize='small' style={{ borderRadius: 100, border: '1px solid lightGrey' }} onClick={incrementCount} />
                                        </Box>
                                }
                                {/* <Button variant="contained" style={{ backgroundColor: '#A03037', borderRadius: '0px' }} size='medium'>ADD TO BAG</Button> */}
                                {
                                    wishlistObj
                                        ? <Button variant="contained" style={{ backgroundColor: '#333333', borderRadius: '0px' }} size='medium' onClick={()=>wishlistMethod(props.id)}><FavoriteBorderOutlinedIcon fontSize='small'  /> Wishlist</Button>
                                        : <Button style={{ backgroundColor: 'white' }}><FavoriteIcon sx={{ color: 'brown' }} /></Button>

                                }


                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.bookOneContainerRight}>
                <Box className={classes.rightBoxHeader}>
                    <h2 style={{ position: 'relative', bottom: 10 }}>{props.bookName}</h2>
                    <h5 style={{ position: 'relative', bottom: 20 }}>{props.author}</h5>
                    <Box className={classes.ratingContainer} style={{ position: 'relative', bottom: 10 }}>
                        {/* 4.5 <StarBorderIcon fontSize='x-small' /> */}
                        <RatingComponent />
                    </Box>
                    <h2>Rs.{props.price}</h2>
                </Box>

                <Box style={{ width: '100%', height: '1px', border: '1px solid grey' }} />

                <Box className={classes.bookDetailsBox}>
                    <h4 style={{ fontWeight: 400 }}>Book Details:</h4>
                    <p style={{ width: '100%', height: 130, lineHeight: 1.2, fontSize: 12, position: 'relative', bottom: 20 }}>
                        {
                            props.desc
                        }
                    </p>
                </Box>

                <Box style={{ width: '100%', height: '1px', border: '1px solid grey' }} />

            </Box>
        </Box>
    )
}

export default BookOne