import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { LanguageSelector } from '../common/LanguageSelector';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArticleIcon from '@mui/icons-material/Article';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { name: t('navbar.home'), icon: <HomeIcon />, path: '/' },
    { name: t('navbar.about'), icon: <EmojiPeopleIcon />, path: '/nosotros' },
    { name: t('navbar.blog'), icon: <ArticleIcon />, path: '/blog' },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        color: 'white',
        backgroundColor: '#333',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton to={page.path} component={Link}>
              <ListItemIcon sx={{ color: 'white' }}>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Menú Hamburguesa para vista móvil */}
          <Box sx={{display: {xs:'flex', md:'none'}}}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              color="inherit"
              sx={{ ml: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>

          {/* Contenedor del logo y título para vista móvil */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', flexGrow: 1 }}>
            <IconButton component={Link} to="/" sx={{ p: 0, mr: 'auto', ml: 'auto' }}>
              <Avatar
                alt="WoodBench Logo"
                src="/WoodBenchLogoWhiteNoBackground.png"
                sx={{ width: 80, height: 80 }}
              />
            </IconButton>
            {/* <Typography
              variant="h4"
              noWrap
              component={Link}
              to="/"
              sx={{
                ml: 2,
                fontFamily: 'Chakra Petch, Arial, sans-serif',
                fontWeight: 500,
                letterSpacing: '.4rem',
                color: 'white',
                textDecoration: 'none',
                flexGrow: 1,
                fontSize: 10
              }}
            >
              WOODBENCH
            </Typography> */}
          </Box>

          

          {/* Contenido para vista desktop */}
          <IconButton component={Link} to="/" sx={{ p: 0, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Avatar
              alt="WoodBench Logo"
              src="/WoodBenchLogoWhiteNoBackground.png"
              sx={{ width: 100, height: 100, my: 1, mx: 1 }}
            />
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component={Link}
            to="/"
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Chakra Petch, Arial, sans-serif',
              fontWeight: 500,
              letterSpacing: '.4rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            WOODBENCH
          </Typography>

          {/* Menú de Navegación - Vista Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.path}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mx: 1,
                  border: '1px solid white',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: {xs: 'none', md: 4}, borderLeft: {xs: 'none', md: '1px solid white'}, pl: 2 }}>
            <LanguageSelector />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
