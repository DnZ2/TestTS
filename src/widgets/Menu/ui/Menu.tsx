import { IconButton, Typography, Drawer, Box, List, ListItem, ListItemButton } from '@mui/material'
import { useState } from 'react'
import { NAV_LINKS } from '@shared/model'
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => () => {
      setDrawerOpen(open);
    };
  return (
    <>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">LOGO</Typography>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
            <List>
              {NAV_LINKS.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton component={NavLink} to={link.path}>
                    {link.label}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
    </>
  )
}

