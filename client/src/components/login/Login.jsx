import { useState } from "react";
import {Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button} from "@material-ui/core";
import { authenticateSignup, authenticateLogin } from "../../services/api";

const useStyle = makeStyles({
    component:{
        height: '70vh',
        width: '90vh'
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background:"#2874f0",
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *':{
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop:20
        }
    },
    text:{
        color: '#878787',
        fontSize: 12
    },
    loginBtn:{
        textTransform: 'none',
        background: '#FB641B',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    requestBtn:{
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText:{
        textAlign: 'center',
        marginTop:'auto',
        fontSize:14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error:{
        fontSize: 10,
        color:"#ff6161",
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }
})

const initialValue = {
    login:{
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: 'signup',
        heading: 'Looks like you are new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email:'',
    password:'',
    phone:''
}

const loginInitialValue = {
    username: '',
    password: ''
}

const Login = ({open, setOpen, setAccount }) =>{
    const classes = useStyle();

    const [account, toggleAccount]= useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] = useState(false);

    const handleClose =() => {
        setOpen(false);
        toggleAccount(initialValue.login);
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup);
    }

    const signUpUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const onInputChange = (e) => {
        setSignup({...signup,[e.target.name]: e.target.value})
    }

    const onValueChange = (e) => {
        setLogin({...login,[e.target.name]:e.target.value})
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
    }

    return (
        <Dialog open = {open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className={classes.login}>
                            <TextField onChange={(e)=> onValueChange(e)} name="username" label="Enter Username"/>
                            <TextField onChange={(e)=> onValueChange(e)} name = "password" type="password" label="Enter Password" />
                            { error && <Typography className={classes.error}>Invalid Username or Password</Typography>}
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant='contained' className={classes.loginBtn} onClick={()=> loginUser()}>Login</Button>
                            <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                            <Button variant='contained' className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={()=> toggleUserAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
                        </Box> :
                        <Box className={classes.login}>
                            <TextField onChange={(e)=> onInputChange(e)} name="firstname" label="Enter Firstname"/>
                            <TextField onChange={(e)=> onInputChange(e)} name="lastname" label="Enter Lastname" />
                            <TextField onChange={(e)=> onInputChange(e)} name="username" label="Username"/>
                            <TextField onChange={(e)=> onInputChange(e)} name="email" label="Enter Email-ID" />
                            <TextField onChange={(e)=> onInputChange(e)} name="password" type="password" label="Enter Password"/>
                            <TextField onChange={(e)=> onInputChange(e)} name="phone" label="Enter Contact Number" />
                            <Button variant='contained' className={classes.loginBtn} onClick={()=> signUpUser()}>SignUp</Button>
                        </Box>
                    }
                    
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;