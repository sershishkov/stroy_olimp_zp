import React from 'react';
import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ourLogo from '../images/LogotipDS.PNG';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#e0e0e0',
    marginTop: '1rem',
    // border: '1px solid red'
  },
  btnLogotip: {
    // width: '100%',
    margin: 'auto',
    // display: 'block'
  },
  wrapSlogan: {
    // border: '1px solid red',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  wrapLogo: {
    // border: '1px solid green',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    logotip: {
      border: '1px solid yellow',
      // width: '100%'
    },
  },
  wrapPhones: {
    // border: '1px solid blue',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        md={4}
        container
        flexdirextion='column'
        className={classes.wrapSlogan}
      >
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            Быстро
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            Надежно
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            Качественно
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        className={classes.wrapLogo}
        container
        justify='center'
        alignItems='center'
      >
        <Button color='inherit' href='/' className={classes.btnLogotip}>
          <Image
            src={ourLogo}
            className={classes.logotip}
            alt='logo'
            width={240}
          />
        </Button>
      </Grid>

      <Grid
        item
        md={4}
        container
        flexdirextion='column'
        className={classes.wrapPhones}
      >
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            +38 098 310 47 99
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            +38 050 926 06 99
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component='h4' variant='h5' align='center'>
            +38 099 180 98 04
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
