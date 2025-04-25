import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductItem } from "@shared/api" 
import {AddToCart} from "@features/cart"
import { memo } from "react"
import picture from "@assets/nopic.png"
import { formatPrice } from "../lib/formatPrice"

interface Props {
  data: ProductItem
}

export const ProductCard = memo((props: Props) => {
  const {data} = props
  return (
    <Card>
      <Box position={"relative"}>
        <CardMedia
          component={"img"}
          image={picture}
          title="product picture"
        />
        <AddToCart sx={{position: "absolute", right: "0.5rem", bottom: "0.5rem"}} data={data} />
      </Box>
      <CardContent>
        <Typography>{data.name}</Typography>
        <Typography>{formatPrice(data.price)}</Typography>
      </CardContent>
    </Card>
  )
})
