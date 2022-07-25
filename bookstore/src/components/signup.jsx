import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { signUp } from '../services/userServices';

const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex =  /^[6-9]{1}[0-9]{9}$/;

const useStyles = makeStyles({
    signup_container: {
        width: '260px',
        height: '305px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 80,
    },
    fname_tag:{
            position:'relative',
            top :45,
            right:105
    },
    fname_input:{
        position:'relative',
            top :22,
            
    },
    email_tag:{
        position:'relative',
        top :5,
        right:110
    },
    email_input:{
        position:'relative',
            bottom :19,
    },
    pass_tag:{
        position:'relative',
        bottom :35,
        right:106
    },
    pass_input:{
        position:'relative',
            bottom :58,
    },
    phone_tag:{
        position:'relative',
        bottom :75,
        right:92
    },
    phone_input:{
        position:'relative',
            bottom :98,
    },
    btn_class:{
        position:'relative',
            bottom :73
    }
})

function Signup() {
    const classes = useStyles()

    const [signUpObj, setSignUpObj] = React.useState({ fullName: "",  email: "", password: "", phone: "advance" })

    const [regexObj, setRegexObj] = React.useState({
        fnameBorder: false, fnameHelper: "", 
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: "",
        phoneBorder:false, phoneHelper:""
    })

    const takeFullname=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, fullName: Event.target.value }))
    }
    const takeEmail=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, email: Event.target.value }))
    }
    const takePassword=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, password: Event.target.value }))
    }
    const takePhone=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, phone: Event.target.value }))
    }

    const submit=()=>{
        let fnameTest = fnameRegex.test(signUpObj.fullName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let phoneTest = phoneRegex.test(signUpObj.phone)

        if (fnameTest === false) {
            setRegexObj(prevState => ({ ...prevState, fnameBorder: true, fnameHelper: "Enter correct first name" }))
        } else if (fnameTest === true) {
            setRegexObj(prevState => ({ ...prevState, fnameBorder: false, fnameHelper: "" }))
        }
        if (emailTest === false) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email " }))
        } else if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        if (passwordTest === false) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password " }))
        } else if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }
        if (phoneTest === false) {
            setRegexObj(prevState => ({ ...prevState, phoneBorder: true, phoneHelper: "Enter correct phone " }))
        } else if (phoneTest === true) {
            setRegexObj(prevState => ({ ...prevState, phoneBorder: false, phoneHelper: "" }))
        }

        if (fnameTest === true && phoneTest === true && emailTest === true && passwordTest === true) {
            console.log('User registered!');
            signUp(signUpObj).then((response) => { console.log(response); localStorage.setItem('token', response.data.result.accessToken) })
                .catch((error) => { console.log(error) })
        }
    }

    return (
        <div>
            <Box className={classes.signup_container}>
                <h6 className={classes.fname_tag}>Full name</h6>
                <FormControl className={classes.fname_input} sx={{ width: '30ch' }} size='small' error={regexObj.fnameBorder} helperText={regexObj.fnameHelper} onChange={takeFullname}>
                    <OutlinedInput />
                </FormControl>
                <h6 className={classes.email_tag}>Email id</h6>
                <FormControl className={classes.email_input} sx={{ width: '30ch' }} size='small' error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={takeEmail}>
                    <OutlinedInput />
                </FormControl>
                <h6 className={classes.pass_tag}>Password</h6>
                <FormControl className={classes.pass_input} sx={{ width: '30ch' }} size='small' error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={takePassword}>
                    <OutlinedInput />
                </FormControl>
                <h6 className={classes.phone_tag}>Phone Number</h6>
                <FormControl className={classes.phone_input} sx={{ width: '30ch' }} size='small' error={regexObj.phoneBorder} helperText={regexObj.phoneHelper} onChange={takePhone}>
                    <OutlinedInput />
                </FormControl>
                <Button className={classes.btn_class} variant="contained" style={{ backgroundColor: 'brown', width: '33ch' }} onClick={submit}>
                SignUp
            </Button>
            </Box>

        </div>
    )
}

export default Signup