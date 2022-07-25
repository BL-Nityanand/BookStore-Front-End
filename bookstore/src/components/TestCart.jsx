import React from 'react'
import { Box } from '@mui/system'
import { useState } from 'react'
import BookCompo from '../components/bookCompo'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import { useEffect } from 'react';
import { getBook } from '../../src/services/dataServices'
import Footer from '../components/footer'
import BookOne from '../components/bookOne'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import RatingComponent from '../components/ratingComponent'

const useStyles = makeStyles({
    paperMainBox: {
        width: 210,
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



function TestCart({book}) {
    const classes = useStyles();

    return (
        <Box style={{ margin: 50 }}
            onClick={() => {
                // setPageState(true)
                // setBookDetails(book)
                // setSearchItem(book)
                console.log(book)
            }}
        >
            <Paper elevation={3} style={{ width: 210, height: 280, display: 'flex', flexDirection: 'column' }} >
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
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Box className={classes.paperBottomBox}>
                        <Box className={classes.htagBox} >
                            <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{book.bookName}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h6 style={{ position: 'relative', bottom: 30, textAlign: 'left' }}>{book.author}</h6>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 30, textAlign: 'left' }}>{<RatingComponent />}</h4>
                        </Box>
                        <Box className={classes.htagBox}>
                            <h4 style={{ position: 'relative', bottom: 32, textAlign: 'left' }}>Rs. {book.price}</h4>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>

    )
}

export default TestCart