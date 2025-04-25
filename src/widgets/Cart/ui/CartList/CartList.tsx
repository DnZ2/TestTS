import { Close } from "@mui/icons-material"
import { Box, Typography, IconButton, List } from "@mui/material"
import {CartProduct, selectCart} from "@entities/cart"
import { useAppSelector } from "@shared/model"

interface Props {
    onClose: ()=>void
}

export const CartList = (props: Props) => {
    const {onClose} = props
      const cart = useAppSelector(selectCart)
  
      return (
        <Box display={"flex"} flexDirection={"column"} bgcolor={"#fff"} borderRadius={"1rem"} padding={"1rem"}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h4">Cart {`(${cart.items.length})`}</Typography>
                <IconButton onClick={onClose}>
                    <Close/>
                </IconButton>
            </Box>
            <List sx={{ overflowY: "auto", maxHeight: "70vh"}}>
                {cart.items.map(item=>
                    <CartProduct key={item.id} data={item}/>
                )}
            </List>
        </Box>
  )
}

