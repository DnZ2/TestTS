import {Box, CircularProgress, Container, CssBaseline} from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const RootLayout = () => {
  return (
    <Box sx={{minHeight: "100vh", display: "flex", "flexDirection": "column"}}>
        <CssBaseline/>
        <Header/>
        <Container fixed sx={{ flex: 1}}>
            <Suspense fallback={<CircularProgress/>}>
                <Outlet/>
            </Suspense>
        </Container>
    </Box>
  )
}

export default RootLayout
