import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { display } from '@mui/system';
import BookOne from './bookOne';

const useStyles = makeStyles({
    paperMainBox: {
        width: 200,
        height: 162,
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    paperImageBox: {
        width: 103,
        height: 115,
        // border: '1px solid yellow'
    },
    paperBottomBox: {
        width: 180,
        height: 100,
        // border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',


    },
    htagBox: {
        width: 200, height: 29,
        // border: '1px solid red'
    },
    paperImageBoxImg: {
        width: 103,
        height: 115,
    }
})

function BookCompo(props) {
    const classes = useStyles();

    // const [bookObj, setbookObj] = useState({ _id: '', bookName: '', author: '', quantity: '', price: '', description:'' })

    const openBookOne=(bookObj)=>{
        props.listenToBookComp()
        console.log(bookObj,'from bookCOmp');
        // setbookObj({_id:bookObj._id, bookName:bookObj.bookName, author:bookObj.author, quantity:bookObj.quantity, price:bookObj.price, description:bookObj.description})
        
    }

    return (
        <Box style={{ margin: 50 }} onClick={()=>{openBookOne(props.books) 
         console.log(props.books,'testing props')}}>
            <Paper elevation={3} style={{ width: 200, height: 280, display: 'flex', flexDirection: 'column' }} >
                <Box className={classes.paperMainBox}>
                    <Box className={classes.paperImageBox}>
                        <img className={classes.paperImageBoxImg} src="./images/bookImage.png" alt="" />
                    </Box>
                </Box>
                <Box style={{
                    width: 200,
                    height: 118,
                    // border: '1px solid green',
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>



<Box className={classes.paperBottomBox}>
                        <Box className={classes.htagBox} >
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{props.books.bookName}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h6 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{props.books.author}</h6>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>Quantity :{props.books.quantity}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>Rs. {props.books.price}</h4>
                        </Box>
                        {/* <h4 style={{border:'1px solid red'}}>Dont make me think</h4>
                    <h6 style={{border:'1px solid red'}}>by Steve Krug</h6>
                    <h4 style={{border:'1px solid red'}}>ratings</h4>
                    <h4 style={{border:'1px solid red'}}>price</h4> */}
                    </Box>


                    {/* <Box className={classes.paperBottomBox}>
                        <Box className={classes.htagBox} >
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{props.books.bookName}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h6 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{props.books.author}</h6>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>Quantity :{props.books.quantity}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>Rs. {props.books.price}</h4>
                        </Box>
                       
                    </Box> */}



                </Box>


            </Paper>
        </Box>
    )
}

export default BookCompo