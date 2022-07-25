import React from 'react'
import Header from '../components/header'
import { Box } from '@mui/system'
import { useState } from 'react'
import BookCompo from '../components/bookCompo'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import { useEffect } from 'react';
import {getBook} from '../../src/services/dataServices'
import Footer from '../components/footer'
import BookOne from '../components/bookOne'
import { useHistory, useNavigate } from "react-router-dom";


function Home() {
    let navigate = useNavigate()
    const [bookList, setBookList] = useState([])
    const [pageState, setPageState]= useState(false)

    const listenToBookComp=()=>{
        // history.push('/bookOne')
        setPageState(true)
    }

    useEffect(()=>{
        getBook().then((response)=> {
      console.log(response.data.result)
      setBookList(response.data.result)
    } ).catch((err)=>console.log(err))

    },[])

    

    return (
        <Box>
            <Header />
            <Container>
                <Box style={{display:'flex', alignItems:'center', justifyContent:'space-between', position:'relative', right:10, width:1130}}>
                    <Box>
                        <h2>Books</h2>

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
              
                pageState? <BookOne books={bookList} /> : 
            

            <Grid container style={{ flexGrow: 1, width: '83vw', height: 'auto', position: 'relative', left: 128 }} spacing={1} columns={{ xs: 8, sm: 12, md: 12 }} >
            {
                bookList.map((book)=>(<Grid item lg={9}><BookCompo style={{ border: '1px solid red' }} books={book}  listenToBookComp={listenToBookComp}/></Grid>))
            }
        </Grid>
}
        <Footer/>
        </Box>
    )
}

export default Home