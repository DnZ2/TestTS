import { useMediaQuery, Box, List, ListItem, ListItemButton } from '@mui/material';
import { NAV_LINKS } from '@shared/model';
import {Menu} from '../../Menu/ui/Menu';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
  
    if(isMobile) return <Menu />

  return (
        <Box sx={{ display: "flex", gap: 2 }}>
          <List sx={{display: 'flex'}}>
              {NAV_LINKS.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton component={NavLink} to={link.path}>
                    {link.label}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Box>
  )
}

