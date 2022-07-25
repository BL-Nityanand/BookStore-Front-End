import { makeStyles } from '@mui/styles'
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/system'


const useStyles = makeStyles({
    ratingBox: {
        width: '46px',
        height: '20px',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#388E3C',
        color: '#FFFFFF'
    }
})

function RatingComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.ratingBox}>
            <h5>4.5</h5> <StarBorderIcon fontSize='x-small' />
        </Box>

    )
}

export default RatingComponent