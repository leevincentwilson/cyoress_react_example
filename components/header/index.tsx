import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth0 } from "@auth0/auth0-react";
import If from '../if'
import {isClientSide} from "../../helpers/isClientSide";
import {primaryMain} from "../../theme/theme";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const { user,logout,isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>logout()}>Logout</MenuItem>
      </Menu>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cypress React Redux Example
          </Typography>

          <If condition={!user && !isLoading }>
            <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
          </If>
          <If condition={isLoading}>
            <Avatar alt={'Loading'} sx={{ bgcolor: primaryMain }}  color={'primary'}  >
              <CircularProgress color="secondary"/>
            </Avatar>
          </If>
          <If condition={isAuthenticated && !!user && !isLoading }>
            <IconButton aria-label="user" size="medium" onClick={handleClick}>
              <Avatar alt={user?.name} src={user?.picture}/>
            </IconButton>
          </If>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header