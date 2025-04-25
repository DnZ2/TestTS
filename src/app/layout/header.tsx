import { AppBar, Toolbar } from '@mui/material'
import {CartTriggerButton} from '@widgets/Cart'
import {Navbar} from '@widgets/Navbar/ui/Navbar';


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
