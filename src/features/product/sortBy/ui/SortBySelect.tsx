import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { SORT_OPTIONS } from '../model/sortOptions'
import { useSearchParams } from 'react-router-dom'
import { memo, useState } from 'react'

export const SortBySelect = memo(() => {
    const [, setSearchParams] = useSearchParams()
    const [value, setValue] = useState("")
    const onChange = (e: SelectChangeEvent)=>{
        setValue(e.target.value);
        setSearchParams(prev=>{
            prev.set("sort", e.target.value[0])
            prev.set("order", e.target.value[1])
            return prev
        })
    }
  return (
    <FormControl sx={{ width: 250 }}>
        <InputLabel id="sort-by-label">Sort By</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-label"
          value={value}
          onChange={onChange}
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
  )
})

