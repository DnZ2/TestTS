import { Delete } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, ListItem, Typography } from '@mui/material'
import { CartItem, removeFromCart, updateQuantity } from '../api/cartSlice'
import { useAppDispatch } from '@shared/model'
import {NumberInput} from '@shared/ui'
import picture from "@assets/nopic.png"
import { formatPrice } from '../../product/lib/formatPrice'
import { memo } from 'react'

interface Props {
    data: CartItem
}

export const CartProduct = memo((props: Props) => {
    const {data} = props
    const dispatch = useAppDispatch()
    const onChange = (value: number | null)=>{
        dispatch(updateQuantity({...data, value: value || data.quantity}))
    }
    const onDeleteFromCart = ()=>{
        dispatch(removeFromCart(data))
    }
  return (
      <ListItem>
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
                 <NumberInput min={1} onValueChange={onChange} value={data.quantity}/>
               </CardActions>
               <Typography alignContent={"center"}>{formatPrice(+(data.price*data.quantity).toFixed(2))}</Typography>
             </Box>
           </CardContent>
         </Card>
      </ListItem>
      
  )
})

