import { IconButton, IconButtonProps } from "@mui/material"
import { addToCart } from "@entities/cart"
import { useAppDispatch, useAppSelector } from "@shared/model"
import { ShoppingCart } from "@mui/icons-material"
import { memo } from "react"
import { ProductItem } from "@shared/api"

interface Props extends IconButtonProps {
    data: ProductItem
}

export const AddToCart = memo((props: Props) => {
    const {data, ...other} = props
    const dispatch = useAppDispatch()
    const id = useAppSelector((state)=>state.cart.items.find(item=>item.id===data.id))
    const onClick =()=>dispatch(addToCart(data))
  return (
    <IconButton disabled={!!id} onClick={onClick} {...other}>
      <ShoppingCart />
    </IconButton>
  )
})

