import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { updateAuthentication } from '../../features/authenticationSlice';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated: any = useSelector((state: RootState) => state.isAuthenticated);

  const [handlerAuthenticated, setHandlerAuthenticated] = useState(false)

  useEffect(() => {
    setHandlerAuthenticated(isAuthenticated.value);
    console.log(isAuthenticated)
  }, [isAuthenticated])

  const signUp = () => {
    dispatch(updateAuthentication(false));
    navigate("/");
  }

  const logIn = () => {
    dispatch(updateAuthentication(false));
    navigate("/login");
  }


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Virtual Store
        </Typography>
        <TextField
          color="primary"
          InputProps={{
            style: { color: '#fff' },
            placeholder: 'search',
          }}
        />
        <Button color="inherit">Home</Button>
        <Button color="inherit">Categories</Button>
        <Button startIcon={<ShoppingCartIcon />} color="inherit"></Button>
        {
          handlerAuthenticated ?
            <Button onClick={signUp} color="inherit">Salir</Button> :
            <Button onClick={logIn} color="inherit">Login</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
