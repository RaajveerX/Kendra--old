import * as React from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppLogo from '../resources/samplelogo.svg'
import { useNavigate } from 'react-router-dom';





//Adds Custom Shadow to AppBar
const ShadowAppBar = styled(AppBar)({
  boxShadow:"0px 24px 50px 4px rgba(90, 82, 128, 0.1)"
})

//AppBar is based on MUI AppBar Specimen
export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';

  //Handles profile click dropdown menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Coming</MenuItem>
      <MenuItem onClick={handleMenuClose}>Soon!</MenuItem>
    </Menu>
  );

  //Sets up navigation in appbar
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ShadowAppBar position="static" color="default" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>navigate("/")}
          >
            <img src={AppLogo} height="20" width="20"/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >Kendra</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </ShadowAppBar>
      {renderMenu}
    </Box>
  );
}
