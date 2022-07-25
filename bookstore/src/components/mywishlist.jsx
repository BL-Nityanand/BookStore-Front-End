import React from 'react'
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Box, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { get_wishlist_items } from '../services/dataServices';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Header from './header';
import { Container } from '@mui/material'


const useStyles = makeStyles({
    bodyBox: {
        width: '90%',
        height: '140px',
        // border: '1px solid green',
        display: 'flex',
        display: 'flex',
        // flexDirection: 'column',
        margin: 45
    },
    bodyBoxsub: {
        width: '90%',
        height: '140px',
        // border: '1px solid yellow',
        display: 'flex',
        display: 'flex',
        flexDirection: 'column',

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
        // border: '1px solid red',
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
    }

})

function Mywishlist() {
    const classes = useStyles()
    const [wishListObj, setWishListObj] = React.useState([])

    useEffect(() => {

        get_wishlist_items()
            .then((response) => {
                console.log(response.data.result);
                setWishListObj(response.data.result);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Box style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center' }}>
            <Header/>
            <Container>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', right: 10, width: 1130 }}>
                    <Box>
                        <h4>Home/wishlist</h4>

                    </Box>
                    {/* <Box>

                        <label for='books' >
                            <select id="sortBooks">
                                <option value="Relevance">sort by Relevance</option>
                                <option value="Name">Name</option>
                                <option value="Category">Category</option>
                                <option value="Author">Author</option>
                            </select>
                        </label>

                    </Box> */}
                </Box>

            </Container>
            <Box style={{ width: '74vw', height: 'auto', display: 'flex', flexDirection: 'column',border: '1px solid lightGrey' }}>
            <Box style={{ width: '100%', height: '50px', backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <h3 style={{ position: 'relative', left: 50 }}>My Wishlist ({wishListObj.length})</h3>
            </Box>
            {
                wishListObj.map((book) => (
                    <Box style={{ width: '100%', height: '200px', border: '1px solid lightGrey'}}>
                        <Box className={classes.bodyBox}>
                            <Box className={classes.bodyBoxsub}>
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
                            <Box style={{ width: '100px', height: '130px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <IconButton>
                                <DeleteTwoToneIcon/>
                                </IconButton>
                                
                            </Box>
                        </Box>
                    </Box>
                ))
            }

        </Box>
        </Box>
        
    )
}

export default Mywishlist