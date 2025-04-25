import { Box, Button, Typography } from '@mui/material'
import { formatPrice } from '@entities/product'
import { useAppSelector } from '@shared/model'
import { memo } from 'react'
import { selectCart } from '@entities/cart'

export const CartTotal = memo(() => {
    const cart = useAppSelector(selectCart)
  return (
    <Box borderRadius={"1rem"} bgcolor={"#fff"} padding={"1rem"} display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Subtotal:</Typography>
            <Typography>{formatPrice(cart.totalPrice)}</Typography>
        </Box>
        <Button disabled={!cart.items.length} variant="contained" sx={{bgcolor: "black", width: "100%", padding: "1rem 3rem"}}>Continue to checkout</Button>
    </Box>
  )
})

