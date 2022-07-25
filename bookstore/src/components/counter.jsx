import React from 'react'
import { Box } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Counter() {
    const [count, setCount]= useState(1)

    const decrementCount=()=>{
        setCount(prevCount=>prevCount-1)
    }

    const incrementCount=()=>{
        setCount(prevCount=>prevCount+1)
    }

  return (
    <Box style={{width:120, height:35,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <RemoveIcon fontSize='small' style={{ borderRadius:100, border:'1px solid lightGrey'}} onClick={decrementCount}/>
        <Box style={{width:50, height:30,border:'1px solid lightGrey',display:'flex',justifyContent:'center',alignItems:'center'}}>{count}</Box>
        <AddIcon fontSize='small' style={{ borderRadius:100, border:'1px solid lightGrey'}} onClick={incrementCount}/>
    </Box>
  )
}

export default Counter