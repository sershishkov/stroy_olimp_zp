import React from 'react';
import Head from 'next/head';

import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

import Navbar from './navbar';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    backgroundColor: theme.palette.common.white,
    padding: 0,
    // border: '1px solid #000',
    maxWidth: 1536,
  },
  main: {
    paddingTop: 100,
    maxWidth: 1200,
    minWidth: 600,

    // border: '1px solid #f00',
    margin: 'auto',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.layoutContainer}>
        <Head>
          <title>Олимп</title>
          <meta
            name='description'
            content='Строительная компания Олимп , г.Запорожье, Любые виды работ для ОСББ'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Navbar />
        <main className={classes.main}>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
