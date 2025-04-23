import { Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { CartItem, removeFromCart, updateQuantity } from '../app/redux/cart-slice'
import { useAppDispatch } from '../app/redux/hooks'
import NumberInput from '../shared/UI/number-input'
import Price from "./price"
import picture from "../assets/nopic.png"

interface Props {
    data: CartItem
}

const CartProduct = (props: Props) => {
    const {data} = props
    const dispatch = useAppDispatch()
    const onChange = (value: number | null)=>{
        dispatch(updateQuantity({...data, value: value || data.quantity}))
    }
    const onDeleteFromCart = ()=>{
        dispatch(removeFromCart(data))
    }
  return (
      
      <Card sx={{display: "flex", width: "100%"}}>
          <CardMedia sx={{maxHeight: 250, maxWidth: 250, minHeight: 100, minWidth:100, objectFit:"contain"}}
            component={"img"}
            image={picture}
            title="product picture"
          />
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "space-between", minWidth: 250}}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant='h6' alignContent={"center"}>{data.name}</Typography>
            <IconButton onClick={onDeleteFromCart}>
              <Delete/>
            </IconButton>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <CardActions>
              <NumberInput onChange={onChange}/>
            </CardActions>
            <Price alignContent={"center"} price={data.price}/>
          </Box>
        </CardContent>
      </Card>
  )
}

export default CartProduct
