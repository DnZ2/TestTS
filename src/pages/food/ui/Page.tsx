import { Box } from "@mui/material"
import {ProductList} from "@widgets/ProductList/ui/ProductList"
import {SearchField, SortBySelect} from "@features/product"

const FoodPage = () => {

  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "2rem", my: "4rem"}}>
        <Box sx={{display: 'flex', gap: "1rem"}}>
            <SearchField />
            <SortBySelect />
        </Box>
        <ProductList category={"food"}/>
    </Box>
  )
}

export default FoodPage
