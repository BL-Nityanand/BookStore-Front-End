import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/material'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { login } from '../services/userServices';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyles = makeStyles({
    login_container: {
        width: '260px',
        height: '290px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    email_tag: {
        position: 'relative',
        right: 110,
        top:20,
        // bottom: 10,

    },
    email_input: {
        position: 'relative',
    },
    pass_tag: {
        position: 'relative',
        right: 107,
        bottom: 10,
    },
    pass_input: {
        position: 'relative',
        bottom: 30,
    },
    fpass_tag: {
        position: 'relative',
        left: 80,
        bottom: 50,
    },
    btn_class: {
        position: 'relative',
        bottom: 60,
    },
    or_box: {
        width: '100px',
        height: 20,
        position: 'relative',
        bottom: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'


    },
    btn_box: {
        width: '260px',
        height: 33,
        position: 'relative',
        bottom: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

function Login() {
    const classes = useStyles()
    let navigate = useNavigate();

    const [signInObj, setSignUpObj] = React.useState({  email: "", password: ""})

    const [regexObj, setRegexObj] = React.useState({
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: ""
    })

    const [loggedIn, setLoggedIn]= React.useState('')

    const takeEmail=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, email: Event.target.value }))
    }
    const takePassword=(Event)=>{
        setSignUpObj(prevState => ({ ...prevState, password: Event.target.value }))
    }

    const submit=()=>{
        let emailTest = emailRegex.test(signInObj.email)
        let passwordTest = passwordRegex.test(signInObj.password)

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

        if (emailTest === true && passwordTest === true) {
            console.log('user logged in');
            login(signInObj)
            .then((response) => { console.log(response);setLoggedIn(response.status); localStorage.setItem('token', response.data.result.accessToken);navigate('/home') })
                .catch((error) => { console.log(error) })
        }

       
    }

    

    return (
        <Box className={classes.login_container}>
            <h6 className={classes.email_tag}>Email id</h6>
            <FormControl className={classes.email_input} sx={{ width: '30ch' }} size='small' error={regexObj.emailBorder} helperText={regexObj.emailHelper} onChange={takeEmail}>
                <OutlinedInput />
            </FormControl>
            <h6 className={classes.pass_tag}>Password</h6>
            <FormControl className={classes.pass_input} sx={{ width: '30ch' }} size='small' error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={takePassword}>
                <OutlinedInput />
            </FormControl>
            <h6 className={classes.fpass_tag}>Forgot  password?</h6>
            <Button className={classes.btn_class} variant="contained" style={{ backgroundColor: 'brown', width: '33ch' }} onClick={submit}>
                Login
            </Button>
            <Box className={classes.or_box}>
                <h6 >-----</h6>
                <h6 >OR</h6>
                <h6 >-----</h6>
            </Box>
            <Box className={classes.btn_box}>
                <Button variant="contained" size='small' style={{width:120}}>Facebook</Button>
                <Button variant="contained" size='small' style={{width:120}} disabled>
                    Google
                </Button>
            </Box>
        </Box>
    )
}

export default Login
