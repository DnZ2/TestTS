import { TextField } from "@mui/material"
import { ChangeEvent, memo } from "react"
import { useSearchParams } from "react-router-dom"
import { useDebounceCallback } from "@shared/lib"

export const SearchField = memo(() => {
  const [, setSearchParams] = useSearchParams()
  const onChange = useDebounceCallback((e: ChangeEvent<HTMLInputElement>)=>setSearchParams(prev=>{
    prev.set("search", e.target.value)
    return prev
  }), 700);
  return (
    <TextField sx={{width: "100%"}} id="search-input" label="Search" variant="outlined" onChange={onChange}/>
  )
})

