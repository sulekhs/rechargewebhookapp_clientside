import { AppBar, Box, Button, Container, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import CellTowerIcon from '@mui/icons-material/CellTower';
import React from 'react';
import { Link } from 'react-router-dom';


const LogoLg: any = styled(Box)(({theme}) => ({
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
}));

const LogoSm: any = styled("div")(({theme}) => ({
    logoSm: {
        display: "block",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    }
}))

const Navbar = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='sticky'>
        <Container maxWidth="xl" >
            <Toolbar disableGutters >
                <LogoLg>
                    <Typography 
                        variant='h6'
                        component='span' 
                        sx={{ display: { xs: "none", sm:"block", md:'block', lg:'block' } }}
                    >
                        <CellTowerIcon/>Recharge App
                    </Typography>
                    <Box sx={{ ml:70 , display:{ xs:'none', sm:'block', md:'block', lg:'block' } }} >
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'none', sm:'block', md:'block', lg:'block'},
                            }}
                        >
                            <MenuItem key='MyRecharges' onClick={handleCloseNavMenu} component={Link} to="/myRecharges" >
                            <Typography textAlign="center">MyRecharges</Typography>
                            </MenuItem> 
                        </Menu>
                    </Box>    
                </LogoLg>
                <LogoSm>
                    <Box>
                        <Typography 
                            variant='h5'
                            component='span' 
                            sx={{ mt:5 ,display: { xs: "block", sm:"none", md:"none" , lg:"none" } }}
                        >
                            Recharge
                        </Typography>
                    </Box>
                    <Box sx={{ mt:'0px' ,ml:40 ,display:{ xs:'block', md:'none', lg:"none" } }} >
                        <Button
                            key='MyRecharges'
                            onClick={handleCloseNavMenu}
                            component={Link} to="/myRecharges"
                            sx={{ my:2, color:'white', display:'block'  }}
                        >
                            MyRecharges
                        </Button>
                    </Box>
                </LogoSm>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar