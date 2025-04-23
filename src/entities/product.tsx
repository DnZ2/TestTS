import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ProductItem } from "../app/redux/cart-slice"
import Price from "./price"
import AddToCart from "../features/Cart/add-to-cart"
import { memo } from "react"
import picture from "../assets/nopic.png"

interface Props {
  data: ProductItem
}

const Product = memo((props: Props) => {
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
        <Price price={data.price}/>
      </CardContent>
    </Card>
  )
})

export default Product