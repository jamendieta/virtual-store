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

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated: any = useSelector((state: RootState) => state.isAuthenticated);
  const productsCart: any = useSelector((state: RootState) => state.productsCart);

  const [handlerAuthenticated, setHandlerAuthenticated] = useState(false)

  useEffect(() => {
    setHandlerAuthenticated(isAuthenticated.value);
  }, [isAuthenticated])

  const signUp = () => {
    dispatch(updateAuthentication(false));
    navigate("/");
  }

  const logIn = () => {
    dispatch(updateAuthentication(false));
    navigate("/login");
  }

  const handleClick = () => {
    navigate("/productsCart");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Virtual Store
        </Typography>
        <Button onClick={() => navigate("/")} color="inherit">Home</Button>
        <Button disabled={productsCart.items.length === 0} onClick={handleClick} startIcon={<ShoppingCartIcon />} color="inherit">{productsCart.items.length}</Button>
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
