import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Counter from './counter';


function TestCompo() {
    const [toggleBtnCnt,settoggleBtnCnt ]= useState(true)
    const toggle=()=>{
        settoggleBtnCnt(false)
    }

  return (
    <div>


        
        {
            toggleBtnCnt? <Button onClick={toggle}>Add To bag</Button> : <Counter/>
        }
    </div>
  )
}

export default TestCompo