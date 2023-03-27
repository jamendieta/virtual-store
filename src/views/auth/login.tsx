import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateAuthentication } from '../../features/authenticationSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signIn = () => {
        dispatch(updateAuthentication(true));
        navigate("/");
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Log In
                    </Typography>
                    <TextField label="User" variant="outlined" fullWidth sx={{ mb: 2 }} />
                    <TextField label="Password" variant="outlined" fullWidth type="password" sx={{ mb: 2 }} />
                    <CardActions>
                        <Button onClick={signIn} variant="contained" size="large" fullWidth sx={{ bgcolor: 'primary.main', '&:hover': { bgcolor: '#5248c2' } }}>
                            Log In
                        </Button>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Login;
