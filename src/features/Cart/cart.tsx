import { Box, Button, IconButton, List, ListItem, Typography } from "@mui/material"
import { useAppSelector } from "../../app/redux/hooks"
import CartProduct from "../../entities/cart-product"
import { Close } from "@mui/icons-material"
import Price from "../../entities/price"
import { useEffect } from "react"

interface Props {
    onClose: ()=>void
}

const Cart = (props: Props) => {
    const {onClose} = props
    const cartItems = useAppSelector(state=>state.cart.items)
    const cartTotal = useAppSelector(state=>state.cart.totalPrice)
    useEffect(()=>console.log(cartItems))
  return (
        <Box margin={"1rem"} display={"flex"} flexDirection={"column"} gap={"1rem"} maxHeight={"100vh"}>
            <Box display={"flex"} flexDirection={"column"} bgcolor={"#fff"} borderRadius={"1rem"} padding={"1rem"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="h4">Cart {`(${cartItems.length})`}</Typography>
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </Box>
                <List sx={{ overflowY: "auto", maxHeight: "70vh"}}>
                    {cartItems.map(item=>
                        <ListItem key={item.id}>
                            <CartProduct data={item}/>
                        </ListItem>
                    )}
                </List>
            </Box>
            <Box borderRadius={"1rem"} bgcolor={"#fff"} padding={"1rem"} display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography>Subtotal:</Typography>
                    <Price price={cartTotal}/>
                </Box>
                <Button disabled={!cartItems.length} variant="contained" sx={{bgcolor: "black", width: "100%", padding: "1rem 3rem"}}>Continue to checkout</Button>
            </Box>
        </Box>
  )
}

export default Cart
