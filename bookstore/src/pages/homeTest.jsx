import React from 'react'
import Header from '../components/header'
import { Box } from '@mui/system'
import { useState } from 'react'
import BookCompo from '../components/bookCompo'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import { useEffect } from 'react';
import { getBook } from '../../src/services/dataServices'
import Footer from '../components/footer'
import BookOne from '../components/bookOne'
import { useHistory, useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import RatingComponent from '../components/ratingComponent'
import PaginationComponent from '../components/paginationcomp'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from '@mui/material/usePagination';
import TestCart from '../components/TestCart'



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


function HomeTest() {
    const classes = useStyles();
    let navigate = useNavigate()
    
    const [bookList, setBookList] = useState([])
    const [pageState, setPageState] = useState(false)
    const [bookDetails, setBookDetails] = useState({})
    // const [searchItem, setSearchItem] = useState([])
    const [searchIteam, setSearchIteam] = useState('')
    const per_page_count = 4;

    // const [count, setCount]= useState(Math.ceil(bookDetails.length/per_page_count)) 
    const [page, setPage] = useState(1)

    // const _DATA = usePagination(bookDetails, per_page_count)
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: per_page_count
    })


    const pageCount = (pagination.count)
    const [pageNumber, setPageNumber]=useState([])


    const listenToBookComp = () => {
        // history.push('/bookOne')
        setPageState(true)
    }

    // useEffect(() => {
    //     getBook().then((response) => {
    //         // console.log(response.data.result)
    //         console.log(response.data)
    //         setBookList(response.data.result)
    //     }).catch((err) => console.log(err))

    // }, [])
    const GetAllBook=()=>{
        getBook({ from: pageState.from, to: pagination.to }).then((response) => {
            // console.log(response.data.result)
            console.log(response.data)
            setBookList(response.data.result)
            // setPagination({...pagination, count:response.data})
            setPagination({ ...pagination, count: response.data })
        }).catch((err) => console.log(err))

    }

    useEffect(() => {
        GetAllBook();
    }, [pagination.from, pagination.to])

    const takeSearchItem = (item) => {
        setSearchIteam(item)
    }

    const listenToheader=()=>{
        GetAllBook();
    }

    const handleChange = (event, page) => {
        // setPage(p);
        // _DATA.jump(p);
        const from = (page - 1) * per_page_count;
        const to = (page - 1) * per_page_count + per_page_count;
        setPagination({ ...pagination, from: from, to: to })
        setPage(page)
        console.log(page, 'page.......');

    }

    console.log(searchIteam, 'in homePage');
    console.log(pagination, 'in homePage');
    // console.log(pageCount.result.length, 'in pageCount homePage');
    // console.log(pagination.count, 'in count homePage');


    // const filterMethod=()=>{
    //     bookList.filter((search)=>{
    //         if (searchIteam === '') {
    //             // console.log(search.bookName, 'item11111111111');
    //             return search
    //         }
    //         else if (searchIteam === search.bookName.toLowerCase().includes(searchIteam.toLowerCase())) {
    //             // console.log(search.bookName, 'item222222222222.');
    //             return search
    //         }
    //     })   
    // }


    useEffect(()=>{
        paginationFun()
    },[])
    const paginationFun=()=>{
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(pageCount?.result?.length / per_page_count); i++) {
            pageNumbers.push(i);
          }
        
        setPageNumber(pageNumbers)
        console.log(pageNumbers, 'pageNumber..........');
    }



    return (
        <Box style={{border:'1px solid red'}}>
            <Header
                //  bookName={bookDetails.bookName}
                // bookList={bookList}
                // bookDetails={bookDetails}
                takeSearchItem={takeSearchItem}
                listenToheader={listenToheader}
            />

            <Container>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', right: 10, width: 1130 }}>
                    <Box>   
                        <h2>Books ({bookList.length})</h2>

                    </Box>
                    <Box>

                        <label for='books' >
                            <select id="sortBooks">
                                <option value="Relevance">sort by Relevance</option>
                                <option value="Name">Name</option>
                                <option value="Category">Category</option>
                                <option value="Author">Author</option>
                            </select>
                        </label>

                    </Box>
                </Box>

            </Container>

            {
                pageState ? <BookOne
                    id={bookDetails._id}
                    bookName={bookDetails.bookName}
                    author={bookDetails.author}
                    price={bookDetails.price}
                    desc={bookDetails.description}
                    quantity={bookDetails.quantityToBuy}

                /> :

                // for (let index = 1; index < Math.ceil(pageCount.result.length/per_page_count); index++) {

                <Grid container style={{ flexGrow: 1, width: '83vw', height: '61vh', position: 'relative', left: 128 }}  columns={{ xs: 12, sm: 12, md: 12 }} >
                    {

    
                        bookList
                        .slice(pagination?.from, pagination?.to)
                        .filter((search) => {
                            if (searchIteam === '') {
                                console.log(search.bookName, 'item11111111111');
                                return search
                            }
                            else if (searchIteam === search.bookName.toLowerCase().includes(searchIteam.toLowerCase())) {
                                console.log(search.bookName, 'item222222222222.');
                                return search.bookName
                            }
                        })


                            .map((book) => (<Grid item lg={12}>

                                {/* <TestCart book={book}/> */}
                                {/* <BookCompo style={{ border: '1px solid red' }} books={book}  listenToBookComp={listenToBookComp}/> */}

                                <Box style={{ margin: 50 }}
                                    onClick={() => {
                                        setPageState(true)
                                        setBookDetails(book)
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
                                                    <h4 style={{ position: 'relative', bottom: 30, textAlign: 'left'}}>{book.bookName}</h4>
                                                </Box>
                                                <Box className={classes.htagBox}>
                                                    <h6 style={{ position: 'relative', bottom: 23, textAlign: 'left' }}>{book.author}</h6>
                                                </Box>
                                                <Box className={classes.htagBox}>
                                                    <h4 style={{ position: 'relative', bottom: 25, textAlign: 'left' }}>{<RatingComponent />}</h4>
                                                </Box>
                                                <Box className={classes.htagBox}>
                                                    <h4 style={{ position: 'relative', bottom: 32, textAlign: 'left' }}>Rs. {book.price}</h4>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid>
                            ))

                            // ))
                    }
                </Grid>
                
            }
            <Box style={{ width: '100%', height: 80, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <PaginationComponent /> */}
                <Stack  >
                    <Pagination
                        // count={Math.ceil(pagination.length/per_page_count)}
                        count={Math.ceil(pageCount?.result?.length / per_page_count)}
                        page={page}
                        onChange={handleChange}
                        shape="rounded" style={{ color: '#8F2B2F', borderRadius: 100 }} />
                </Stack>
            </Box>

            <Footer />
        </Box>
    )
}

export default HomeTest