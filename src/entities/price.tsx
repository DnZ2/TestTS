import {Typography, TypographyProps} from '@mui/material'
import { memo } from 'react'

interface Props extends TypographyProps {
    price: number
}

const Price = memo((props: Props) => {
  const {price, ...other} = props
  return (
    <Typography {...other}>
      ${price}
    </Typography>
  )
})

export default Price
