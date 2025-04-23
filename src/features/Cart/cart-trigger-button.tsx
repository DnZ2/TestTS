import { ShoppingCart } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material'
import  { memo, useState } from 'react'
import Cart from './cart';

const CartTriggerButton = memo(() => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
  return (
    <>
        <IconButton onClick={toggleDrawer(true)}>
            <ShoppingCart sx={{fill: "#e3e3e3"}}/>
        </IconButton>
        <Drawer sx={{minWidth: "40%",  bgcolor:"transparent", height:"100vh"}} slotProps={{paper: {sx:{bgcolor: "transparent", boxShadow: "none", height: "fit-content", maxHeight: "100vh"}}}} anchor='right' open={open} onClose={toggleDrawer(false)}>
            <Cart onClose={toggleDrawer(false)} />
        </Drawer>
    </>
  )
})

export default CartTriggerButton
