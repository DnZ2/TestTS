import { Pagination as MPagination, PaginationProps } from "@mui/material"
import { memo } from "react"
import { useSearchParams } from "react-router-dom"

export const Pagination = memo((props: PaginationProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page") || ""
    const onChange = (_e: React.ChangeEvent<unknown>, page: number)=>{
        setSearchParams(prev=>{
            prev.set("page", page.toString())
            return prev
        })
    }
  return (
    <MPagination sx={{display: "flex", justifyContent: 'center'}} page={+page} onChange={onChange} shape="rounded" {...props} />
  )
})

