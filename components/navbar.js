import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';

import OlimpLogo from '../images/LogotipDS.PNG';
import MenuList from './menuList';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDrawerToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container maxWidth='lg'>
      <AppBar
        position='fixed'
        //  color='default'
      >
        <Toolbar style={{ padding: '2px 10px' }}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item xs={6}>
              <Grid container justifyContent='flex-start'>
                <Grid item>
                  <Tooltip title='Меню'>
                    <IconButton
                      size='large'
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                      onClick={handleDrawerToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <Link href='/'>
                    <a>
                      <Typography variant='h6' style={{ padding: 7 }}>
                        ОЛИМП
                      </Typography>
                    </a>
                  </Link>

                  {/* <Image
                    src={OlimpLogo}
                    alt='Logo'
                    width={80}
                    height={60}
                    // priority
                  /> */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container direction='column'>
                <Grid item>
                  <Typography variant='subtitle2' align='right'>
                    Быстро
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle2' align='right'>
                    Надежно
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle2' component='div' align='right'>
                    Качественно
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={menuOpen} onClose={handleDrawerToggle}>
        <MenuList handleCloseMenu={closeMenu} />
      </Drawer>
    </Container>
  );
};

export default Navbar;
