import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import BookCompo from './bookCompo';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    mainContainerHeader: {
        // border: '2px solid red',
        width:'100%',
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#A03037',
        alignItems: 'center',
    },
    sub_mainContainer: {
        // border: '2px solid yellow',
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        backgroundColor: '#A03037',
        alignItems: 'center',
    },
    searchContainer: {
        width: 550,
        // border: '2px solid yellow',
        position: 'relative',
        left: 55
    },
    imgStyle: {
        width: 40,
        height: 30
    },
    iconLabelContainer: {
        width: 140,
        // border: '2px solid green',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    iconsContainer: {
        width: 160,
        height: 50,
        // border: '2px solid green',
        position: 'relative',
        left: 310,
        display: 'flex',
        flexDirection: 'column'
    },
    sub_iconsContainer1: {
        width: '100%',
        height: 25,
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    sub_iconsContainer2: {
        width: '100%',
        height: 25,
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    }
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();
    let navigate = useNavigate();
    const [iteamTobeSearch, setIteamTobeSearch] = useState('')
    const [bookListName, setBookListName] = useState([])

    const takeSearchItem=(event)=>{
        // setSearchIteam(event.target.value)
        setBookListName(props.bookList)
        setIteamTobeSearch(event.target.value)
        props.takeSearchItem(iteamTobeSearch);
    }

    const cartOpen=()=>{
        navigate('/mycart')
    }

    const backToHome=()=>{
        navigate('/home')
        props.listenToheader()
        console.log('render click');
    }


    // console.log(iteamTobeSearch,'in header');
    return (
        <Box className={classes.mainContainerHeader}>

            <AppBar position="static" style={{ backgroundColor: '#A03037', display:'flex', justifyContent:'center', alignItems:'center' }}>
                <Box className={classes.sub_mainContainer}>
                    <Toolbar>
                        <Box className={classes.iconLabelContainer}>
                            <img className={classes.imgStyle} src="./images/bIcon1.png" alt="" onClick={backToHome} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                Bookstore
                            </Typography>
                        </Box>

                        <Box className={classes.searchContainer}>
                            <Search style={{ backgroundColor: '#fff' }}>
                                <SearchIconWrapper>
                                    <SearchIcon style={{ color: 'black' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ color: 'black', position: 'relative', right: 70,width:400 }}
                                    onChange={takeSearchItem}
                                />
                                {/* {
                                    bookListName.filter((search)=>{
                                        if (searchIteam === '') {
                                            return search
                                        }
                                        else if (searchIteam === search.bookName.toLowerCase().includes(searchIteam.toLowerCase())) {
                                            console.log(search.bookName, 'item.................');
                                            return search
                                        }
                                        // setBookListName(search)
                                    })
                                    .map((search)=>{
                                        <Box>
                                            {
                                                search.bookName
                                                
                                            }
                                        </Box>
                                        
                                    })
                                } */}
                            </Search>
                        </Box>

                        <Box className={classes.iconsContainer}>
                            <Box className={classes.sub_iconsContainer1}>
                                <PermIdentityIcon fontSize='small' />
                                <ShoppingCartIcon fontSize='small' onClick={cartOpen} />
                            </Box>
                            <Box className={classes.sub_iconsContainer2}>
                                <h6 style={{ fontWeight: '200' }}>Profile</h6>
                                <h6 style={{ fontWeight: '200' }}>Cart</h6>
                            </Box>
                        </Box>

                    </Toolbar>
                </Box>
            </AppBar>


        </Box>
    );
}
