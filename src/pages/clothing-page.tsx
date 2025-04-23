import { Box, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, TextField } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useGetClothingQuery } from '../app/redux/api'
import Product from '../entities/product'
import { SORT_OPTIONS } from '../shared/constants/sort-options'
import { useDebounce } from '../shared/hooks/use-debounce'

const ClothingPage = () => {
  const [searchValue, setSearchValue] = useState("")
  const [sortValue, setSortValue] = useState("")
  const [page, setPage] = useState(1)

  const debouncedSearch = useDebounce(searchValue, 500);

  const {data, isLoading} = useGetClothingQuery({page: page, per_page: 8, sort: sortValue, search: debouncedSearch})

  const onPageChange = (_e: React.ChangeEvent<unknown>, page: number)=>setPage(page)
  const onSortChange = (e: SelectChangeEvent)=>setSortValue(e.target.value)
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)

  useEffect(()=>console.log(searchValue, debouncedSearch))

  if(isLoading || !data) return <CircularProgress />
  return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "2rem", my: "4rem"}}>
      <Box sx={{display: 'flex', gap: "1rem"}}>
        <FormControl sx={{ width: 250 }}>
          <InputLabel id="sort-by-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-label"
            id="sort-by-label"
            value={sortValue}
            onChange={onSortChange}
            label="Sort By"
          >
            {SORT_OPTIONS.map((item) => (
              <MenuItem
                key={item.label}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField sx={{width: "100%"}} id="outlined-basic" label="Search" variant="outlined" value={searchValue} onChange={onSearchChange}/>
      </Box>
      <Grid container spacing={2}>
        {data.items.map(product=>(
          <Grid size={{xs: 6, sm: 4, md: 3}} key={product.id}>
            <Product data={product}/>
          </Grid>
        )
        )}
      </Grid>
      <Pagination sx={{display: "flex", justifyContent: 'center'}} count={data.pages} page={page} onChange={onPageChange} shape="rounded" />
    </Box>
  )
}

export default ClothingPage
