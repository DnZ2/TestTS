import { ShoppingCart } from '@mui/icons-material';
import { Badge, Box, Drawer, IconButton } from '@mui/material'
import  { memo, useState } from 'react'
import {CartList} from '../CartList/CartList';
import {CartTotal} from '../CartTotal/CartTotal';
import { selectCart } from '@entities/cart';
import { useAppSelector } from '@shared/model';

export const CartTriggerButton = memo(() => {
    const [open, setOpen] = useState(false);
    const cart = useAppSelector(selectCart)
    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
  return (
    <>
        <IconButton onClick={toggleDrawer(true)}>
            <Badge badgeContent={cart.items.length} color='success'>
                <ShoppingCart sx={{fill: "#e3e3e3"}}/>
            </Badge>
        </IconButton>
        <Drawer sx={{minWidth: "40%",  bgcolor:"transparent", height:"100vh"}} slotProps={{paper: {sx:{bgcolor: "transparent", boxShadow: "none", height: "fit-content", maxHeight: "100vh"}}}} anchor='right' open={open} onClose={toggleDrawer(false)}>
            <Box margin={"1rem"} display={"flex"} flexDirection={"column"} gap={"1rem"} maxHeight={"100vh"}>
               <CartList onClose={toggleDrawer(false)} />
               <CartTotal />
            </Box>
        </Drawer>
    </>
  )
})
