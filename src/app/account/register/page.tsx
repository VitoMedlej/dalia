"use client"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Typography,
    Grid,
    Container,
    Box,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FormControl,
} from '@mui/material';
import Link from 'next/link'
import { useState} from 'react';
import {AiOutlineEye,AiOutlineLock,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import SignUp from '@/Components/SignUp/SignUp';

// import LoginHook from '../../../src/Hooks/accountHooks/LoginHook';
// import {VisibilityOff, Visibility} from '@mui/icons-material';



const theme = createTheme();

const LoginForm = () => {
    const [showPassword,
        setShowPassword] = useState(false);
        const [checkbox, setCheckbox] = useState(false); 
const [checkbox2, setCheckbox2] = useState(false); 
    const [isLoading,
        setLoading] = useState(false);
const [error, setError] = useState(''); 

        const [creds,
            setCreds] = useState({email:'',password:'',name:''})
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event : React.MouseEvent < HTMLButtonElement >) => {
        event.preventDefault();
    };
const router= useRouter()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = async (event : any ) => {    
        event.preventDefault();
        try {
            
            if (!creds?.email) {
                setError('Please enter a valid email address');
                return;
            }
            
            // Regular expression to validate email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            
            if (!emailRegex.test(creds.email)) {
                setError('Invalid email format');
                return;
            }
            
            // Password Validation
            if (!creds?.password) {
                setError('Please enter a password');
                return;
            }
            
            if (creds.password.length < 4) {
                setError('Password must be at least 4 characters long');
                return;
            }
            
            // Name Validation
            if (!creds?.name || creds?.name?.length < 3) {
                setError('Please enter a valid name');
                return;
            }
        const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/create-user`,{
            method: "post",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
            //make sure to serialize your JSON body
            body: JSON.stringify({
            name : creds.name,
            email: creds.email,
            password: creds.password,

            })
            })
        const res = await req.json();
        if (res?.success && res?.jwt && res?.user  && res?.jwt?.length > 5 ) {
            localStorage.setItem('jiw3x2106',JSON.stringify(res?.jwt))
            localStorage.setItem('24j1i2cj4io-n92nzv531',JSON.stringify(res?.user))
            
            return router.push('/profile')
            
        }
        else {
            if (res?.message && !res?.success) {}
            setError(`Error signing you in, ${res?.message}`)
        }
    }
    catch(err) {
        console.log('err: ', err);
        setError('Error creating account..')    
    }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth='sm' sx={{
                width: '100%',my:4,maxWidth:'400px'
            }}>
                <Box
                    sx={{
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
                    p: {
                        xs: ' 2em 1em',
                        md: '2em 3em '
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
             <Avatar
className='bg'
                        sx={{
                            width: 50, height: 50,

                        m: 1,
                        // bgcolor: '#d42c2a'
                    }}>
                        <img src="https://ucarecdn.com/0abc6c11-ea28-433b-a205-e289be0e95f8/WhatsAppImage20240203at1050571.jpeg" alt="" className="img" />
                        {/* <AiOutlineLock/> */}
                    </Avatar>
                    <Typography
                        sx={{
                        fontSize: "1em",
                        textAlign: 'center'
                    }}
                        color={error
                        ? 'red'
                        : 'black'}
                        component="h1">
                        {error
                            ? error
                            : 'Sign in'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                        mt: 1
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={creds.name}
                            onChange={(e)=>setCreds({...creds,name:e.target.value})}
                            data-cy='create-name'
                            id="name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                            autoFocus/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={creds.email}
                            onChange={(e)=>setCreds({...creds,email:e.target.value})}
                            data-cy='create-email'
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>

                        <FormControl
                            sx={{
                            mt: 1,
                            width: '100%'
                        }}
                            variant="outlined">

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                sx={{
                                width: '100%'
                            }}
                            
                            value={creds.password}
                            onChange={(e)=>setCreds({...creds,password:e.target.value})}
                                id="outlined-adornment-password"
                                name='password'
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                endAdornment={< InputAdornment position = "end" > <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {showPassword
                                    ? <AiOutlineEyeInvisible/>
                                    : <AiOutlineEye/>}
                            </IconButton> 
                            </InputAdornment>}
                                label="Password"/>
                        </FormControl>

                      
                        <Grid sx={{fontSize:'.9em',mt:2}} item xs={12} sm={ 12}>
        <FormControlLabel
         value={checkbox}
         onChange={(e : any)=>setCheckbox(e?.target?.checked)}

         name='checkbox'
        sx={{fontSize:'.9em'}}
        required control={<Checkbox  />} label="I agree to the Terms and conditions." />
        </Grid>
        <Grid item xs={12} sm={ 12}>
        <FormControlLabel
         value={checkbox2}
         onChange={(e : any)=>setCheckbox2(e?.target?.checked)}
         name='checkbox2'
        required control={<Checkbox  />} label="I agree to receive emails." />
        </Grid>
                        <Button
    className='bg'
disabled={isLoading || !checkbox || !checkbox2}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                            mt: 3,
                            border: !isLoading
                                ? "1px solid "
                                : 'none',
                            mb: 2,
                            ":hover": {
                                color:'white',
                                background: 'white',
                                border: "1px solid black"
                            }
                        }}>
                            Sign In
                        </Button>
             
                        <Grid container>

                            <Grid className='link' item>
                                <Link href="/account/login">
                                    {"Already Registered? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
          <Box sx={{my:4}}>
          <Typography
            className='link'
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {'Copyright © '}
            <a target='_blank' href="https://onbeirut.com">
                OnBeirut Agency
            </a>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
          </Box>
            </Container>
            <SignUp/>
        </ThemeProvider>
    );
}
export default LoginForm