import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ourLogo from '../images/LogotipDS.PNG';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    margin: '2rem auto',

    backgroundColor: '#e0e0e0',

    padding: '0px 5px',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  slogan_wrap: {},
  slogan_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  slogan_item: {},

  logotip_wrap: {},
  logotip_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logotip_item: {},
  logotip_image: {},

  phone_wrap: {},
  phone_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phone_item: {},
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.slogan_wrap}>
        <Grid container className={classes.slogan_container}>
          <Grid item className={classes.slogan_item}>
            <Typography component='h4' variant='h5' align='center'>
              Быстро
            </Typography>
          </Grid>
          <Grid item className={classes.slogan_item}>
            <Typography component='h4' variant='h5' align='center'>
              Надежно
            </Typography>
          </Grid>
          <Grid item className={classes.slogan_item}>
            <Typography component='h4' variant='h5' align='center'>
              Качественно
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.logotip_wrap}>
        <Grid container className={classes.logotip_container}>
          <Grid item className={classes.logotip_item}>
            <Button color='inherit' href='/' className={classes.btnLogotip}>
              <Image
                src={ourLogo}
                className={classes.logotip_image}
                alt='logo'
                width={240}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.phone_wrap}>
        <Grid container className={classes.phone_container}>
          <Grid item className={classes.phone_item}>
            <Link href={`tel:+380983104799`}>
              <a>
                <Typography component='h4' variant='h5' align='center'>
                  +38 098 310 47 99
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid item className={classes.phone_item}>
            <Link href={`tel:+380509260699`}>
              <a>
                <Typography component='h4' variant='h5' align='center'>
                  +38 050 926 06 99
                </Typography>
              </a>
            </Link>
          </Grid>
          <Grid item className={classes.phone_item}>
            <Link href={`tel:+380991809804`}>
              <a>
                <Typography component='h4' variant='h5' align='center'>
                  +38 099 180 98 04
                </Typography>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
