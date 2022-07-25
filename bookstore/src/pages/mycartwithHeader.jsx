import React from 'react'
import { Box } from '@mui/system'
import Header from '../components/header'
import Mycart from './mycart'
import { Container } from '@mui/material'
import Mycartcopy from './mycartcopy'



function MycartwithHeader() {
  return (
    <Box style={{display:'flex' , flexDirection:'column'}}>
        
        <Header/>
        <Container>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', right: 10, width: 1130 }}>
                    <Box style={{display:'flex' , position:'relative', left:5}}>
                        <h6>Home/My cart</h6>

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
        <Box style={{position:'relative', left:180}}>
        {/* <Mycart/> */}
        <Mycartcopy/>
        </Box>
        
    </Box>
  )
}

export default MycartwithHeader