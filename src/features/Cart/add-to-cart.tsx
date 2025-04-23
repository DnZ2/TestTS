import { IconButton, IconButtonProps } from "@mui/material"
import { addToCart, ProductItem } from "../../app/redux/cart-slice"
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks"
import { ShoppingCart } from "@mui/icons-material"
import { memo } from "react"

interface Props extends IconButtonProps {
    data: ProductItem
}

const AddToCart = memo((props: Props) => {
    const {data, ...other} = props
    const dispatch = useAppDispatch()
    const id = useAppSelector(state=>state.cart.items.find(item=>item.id===data.id))
    const onClick = ()=>dispatch(addToCart(data))
  return (
    <IconButton disabled={!!id} onClick={onClick} {...other}>
      <ShoppingCart />
    </IconButton>
  )
})

export default AddToCart
