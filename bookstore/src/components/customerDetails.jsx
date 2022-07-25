import React from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import { useState } from 'react';
import { useEffect } from 'react';
import { editUserAddress } from '../services/dataServices';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';



const useStyles = makeStyles({
  mainContainer: {
    width: '50vw',
    height: '95vh',
    border: '1px solid #DCDCDC',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  headingBox: {
    width: '100%',
    height: 80,
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-around'
  },
  headingBoxOne: {
    width: '40%',
    height: 80,
    // border: '1px solid blue',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: ''
  },
  headingBoxTwo: {
    width: '40%',
    height: 80,
    // border: '1px solid yellow',
    display: 'flex',

    justifyContent: 'flex-end',
    alignItems: 'center'

  },
  bodyConatiner: {
    width: '90%',
    height: 600,
    // border: '1px solid green',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  bodyConatinerBoxOne: {
    width: '90%',
    height: 80,
    // border: '1px solid yellow',
    display: 'flex',
    flexDirection: 'column',
  },
  lableBox: {
    width: '75%',
    height: 40,
    // border: '1px solid green',
    display: 'flex',
    justifyContent: 'space-around'
  },
  textFieldBox: {
    width: '75%',
    height: 40,
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between'
  },
  workLabel: {
    width: '100%',
    height: 60,
    // border: '1px solid green',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headingtag: {
    width: '190px',
    height: 40,
    // border: '1px solid green',
    display: 'flex',
  },
  bodyConatinerBoxTwo: {
    width: '90%',
    height: 100,
    // border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',

  },
  innerParaBox: {
    width: '75%',
    height: 100,
    border: '1px solid #878787',
    display: 'flex',
    fontSize: 12,
    textAlign: 'left'
  },
  innerheadingBox: {
    width: '75%',
    height: 20,
    // border: '1px solid yellow',
  },
  bottomButtonField: {
    width: '100%',
    height: 60,
    // border: '1px solid green',
    display: 'flex',

    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

function CustomerDetails(props) {
  const classes = useStyles()
  const [toggleContineu, setToggleContineu] = useState(true)
  // const [userAddress, setUserAddress]=useState({addressType:'', fullAddress:'', city:'', state:''})
  const [address, setAddress] = useState('')
  const [type, setType] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const takeAddress = (event) => {
    setAddress(event.target.value)
  }
  const takeCity = (event) => {
    setCity(event.target.value)
  }
  const takeState = (event) => {
    setState(event.target.value)
  }

  const takeType = (event) => {
    setType(event.target.value)
  }

  const listenToContinueBtn = () => {
    setToggleContineu(false)


    let custDetails = {
      'addressType': type,
      'fullAddress': address,
      'city': city,
      'state': state
    }

    editUserAddress(custDetails)
      .then((response) => {
        console.log(response, 'editUserAddress');
        props.listenToCustomerDetails()
      })
      .catch((err) => console.log(err))

  }



  // useEffect(()=>{
  //   editUserAddress()
  //   .then((response) => {
  //       console.log(response,'editUserAddress');
  //       setUserAddress(response)
  //   })
  //   .catch((err) => console.log(err))
  // },[userAddress])

  return (
    <Box className={classes.mainContainer} >
      <Box className={classes.headingBox} >
        <Box className={classes.headingBoxOne} >
          <h4>Customer Details</h4>
        </Box>
        <Box className={classes.headingBoxTwo} >
          <Button variant="outlined" size='small' style={{ width: 160, height: 35, border: '2px solid #A03037', color: '#A03037' }}>Add New Address</Button>
        </Box>
      </Box>
      <Box className={classes.bodyConatiner}>
        <Box className={classes.bodyConatinerBoxOne}>
          <Box className={classes.lableBox}>
            <h6 style={{ position: 'relative', right: 82 }}>Full Name</h6>
            <h6 style={{ position: 'relative', right: 52 }}>Mobile number</h6>
          </Box>
          <Box className={classes.textFieldBox}>
            <FormControl className={classes.fname_input} sx={{ width: '26ch', borderRadius: 0 }} size='small' >
              <OutlinedInput />
            </FormControl>
            <FormControl className={classes.fname_input} sx={{ width: '26ch', borderRadius: 0 }} size='small'  >
              <OutlinedInput />
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.workLabel}>
          <Radio size='small' style={{ color: '#A03037' }} />
          <Box className={classes.headingtag}>
            <h5 style={{ position: 'relative', bottom: 11 }}>1.WORK</h5>
            <h12 style={{ position: 'relative', top: 10, left: 40, color: '#A03037' }}>Edit</h12>
          </Box>
        </Box>
        <Box className={classes.bodyConatinerBoxTwo}>
          {/* <h6 style={{position:'relative', right:285, bottom:25}}>Address</h6> */}
          <Box className={classes.innerheadingBox}>
            <h6 style={{ position: 'relative', right: 210, bottom: 25 }}>Address</h6>
          </Box>

          <FormControl className={classes.fname_input} sx={{ width: '58.5ch', borderRadius: 0 }} onChange={takeAddress} >
            <OutlinedInput />
          </FormControl>
          {/* <Box className={classes.innerParaBox}>
            <p>
              Address
            </p>
          </Box> */}
        </Box>
        <Box className={classes.bodyConatinerBoxOne}>
          <Box className={classes.lableBox}>
            <h6 style={{ position: 'relative', right: 95 }}>city/town</h6>
            <h6 style={{ position: 'relative', right: 92 }}>State</h6>
          </Box>
          <Box className={classes.textFieldBox}>
            <FormControl className={classes.fname_input} sx={{ width: '26ch', borderRadius: 0 }} size='small' onChange={takeCity} >
              <OutlinedInput />
            </FormControl>
            <FormControl className={classes.fname_input} sx={{ width: '26ch', borderRadius: 0 }} size='small' onChange={takeState} >
              <OutlinedInput />
            </FormControl>
          </Box>
        </Box>
        <Box className={classes.workLabel}>
          {/* <Radio size='small' style={{ color: '#A03037' }} /> */}
          {/* <Box className={classes.headingtag}>
            <h5 style={{ position: 'relative', bottom: 11 }}>2.Home</h5>
          </Box> */}
        </Box>

        <Box className={classes.bodyConatinerBoxTwo}>
          <Typography style={{ fontSize: '16px', fontWeight: 'bold' }} className={classes.headingtag} >Type</Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className='radio-btn'
            onClick={takeType}>
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Box>
        {/* <Box className={classes.bodyConatinerBoxTwo}>

          <Box className={classes.innerheadingBox}>
            <h6 style={{ position: 'relative', right: 210, bottom: 25 }}>Address</h6>
          </Box>
          <Box className={classes.innerParaBox}>
            <p>
              Address
            </p>
          </Box>
        </Box> */}
        <Box className={classes.bottomButtonField}>
          {
            toggleContineu
              ? <Button variant="contained" size='small' style={{ width: 160, height: 35 }} onClick={listenToContinueBtn}>Continue</Button>
              : null
          }
          {/* <Button variant="contained" size='small' style={{ width: 160, height: 35 }} onClick={listenToContinueBtn}>Continue</Button> */}
        </Box>
      </Box>
    </Box>
  )
}

export default CustomerDetails