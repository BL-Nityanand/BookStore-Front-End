import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import Login from '../components/login'
import Signup from '../components/signup'
import Button from '@mui/material/Button';



const useStyles = makeStyles({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    logo_container: {
        width: '40%',
        height: '44%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        borderRadius: '21px'
    },
    form_container: {
        width: '360px',
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '380px',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6px'

    },
    paper_logo_container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },

    paper_container: {
        width: '360px',
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        
    },
    logo_box: {
        width: '330px',
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_class: {
        width: '200px',
        height: '200px',
        borderRadius: 200
    },
    header_paper_container: {
        width: '360px',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box_paper_container: {
        width: '360px',
        height: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subbox_paper_container: {
        width: '260px',
        height: '290px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Lander() {
    const classes = useStyles()
    const [pageView, setpageView] = useState(true)

    const openLonin = () => {
        setpageView(true)
    }

    const openSignup = () => {
        setpageView(false)
    }


    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.logo_container}>
                <Paper className={classes.paper_logo_container}>
                    <Box className={classes.logo_box}>
                        <img className={classes.img_class} src='images/lander_logo.png' alt="" />
                        <h4>ONLINE BOOK SHOPPING</h4>
                    </Box>
                </Paper>
            </Box>
            <Box className={classes.form_container}>
                <Paper className={classes.paper_container}>
                    <Box className={classes.header_paper_container}>
                        <Button color="secondary" onClick={openLonin} style={{color:'black', fontSize:20}}>LOGIN</Button>

                        <Button color="secondary" onClick={openSignup} style={{color:'black',fontSize:20}}>SIGNUP</Button>

                        {/* <h2 onClick={openLonin} itemType='button'>LOGIN</h2>
                        <h2 onClick={openSignup} itemType='button'>SIGNUP</h2> */}
                    </Box>
                    <Box className={classes.box_paper_container}>
                        <Box className={classes.subbox_paper_container}>
                            {/* <Signup/> */}
                            {/* <Login/> */}
                            {
                                pageView ? <Login /> : <Signup />
                            }
                        </Box>
                    </Box>
                </Paper>
            </Box>

        </Box>
    )
}

export default Lander