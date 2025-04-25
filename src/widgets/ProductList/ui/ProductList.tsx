import { CircularProgress, Grid } from '@mui/material'
import {ProductCard, useGetProductsQuery} from '@entities/product'
import {Pagination} from '@shared/ui'
import { useSearchParams } from 'react-router-dom'
import { ServerRoutes } from '@shared/api'

interface Props {
    category: ServerRoutes
}

export const ProductList = (props: Props) => {
    const [params,] = useSearchParams()
    
    const page = params.get("page") || "1"
    const search = params.get("search")||""
    const sort = {by:params.get("sort") || "", method: params.get("order") || "asc"}

    const {data, isLoading} = useGetProductsQuery({category: props.category, per_page: 8, page, search, sort})

    
    if(isLoading || !data) return <CircularProgress />
  
    return (
    <>
        <Grid container spacing={2}>
          {data.items.map(product=>(
            <Grid size={{xs: 6, sm: 4, md: 3}} key={product.id}>
              <ProductCard data={product}/>
            </Grid>
          )
          )}
        </Grid>
        <Pagination count={data.pages}/>
    </>

  )
}
