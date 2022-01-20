import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import alpinist from '../images/alpinist.jpeg';
import asfalt from '../images/asfalt.jpeg';
import kozyrek from '../images/kozyrek.jpeg';
import kryltso from '../images/kryltso.jpeg';
import metallo from '../images/metallo.jpeg';
import podiezd from '../images/podiezd.jpeg';
import roof from '../images/roof.jpeg';
import santeh from '../images/santeh.jpeg';
import tsokol from '../images/tsokol2.jpeg';
import window from '../images/window2.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    // color: '#ff0000',
    // border: '1px solid red',
    // height: 2000,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h2' align='center'>
          Компания Олимп-ДС осуществляет услуги по ремонтам для ОСББ:
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Асфальтные работы
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/asfalt'>
                  <a>
                    <Image
                      src={asfalt}
                      alt='Асфальтные работы'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Высотные работы
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/alpinist'>
                  <a>
                    <Image
                      src={alpinist}
                      alt='Высотные работы'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Ремонт козырьков
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/kozyrek'>
                  <a>
                    <Image
                      src={kozyrek}
                      alt='Ремонт козырьков'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Ремонт козырьков
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/kryltso'>
                  <a>
                    <Image
                      src={kryltso}
                      alt='Ремонт козырьков'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Металлоконструкции
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/metallokonstr'>
                  <a>
                    <Image
                      src={metallo}
                      alt='Металлоконструкции'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Ремонт подъездов
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/podiezd'>
                  <a>
                    <Image
                      src={podiezd}
                      alt='Ремонт подъездов'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Ремонт кровли
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/roof'>
                  <a>
                    <Image
                      src={roof}
                      alt='Ремонт кровли'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Сантехнические работы
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/santeh'>
                  <a>
                    <Image
                      src={santeh}
                      alt='Сантехнические работы'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Ремонт цоколя
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/tsokol'>
                  <a>
                    <Image
                      src={tsokol}
                      alt='Ремонт цоколя'
                      responsive='true'
                      // fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.itemWrap}>
        <Grid
          container
          direction='column'
          justifyContent='center'
          className={classes.itemContainer}
        >
          <Grid item className={classes.itemDescription}>
            <Typography variant='h3' align='center'>
              Металлопластковые окна и двери
            </Typography>
          </Grid>
          <Grid item className={classes.itemImage}>
            <Grid container justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <Link href='/windows_doors'>
                  <a>
                    <Image
                      src={window}
                      alt='Металлопластковые окна и двери'
                      responsive='true'
                      fill='true'
                    />
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
