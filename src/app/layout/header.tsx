import { AppBar, Toolbar } from '@mui/material'
import CartTriggerButton from '../../features/Cart/cart-trigger-button'
import Navbar from './navbar';


const Header = () => {
  
    return (
      <>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
             <Navbar/>
             <CartTriggerButton />
          </Toolbar>
        </AppBar>
      </>
    );
  };

export default Header
