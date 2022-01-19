import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Tsokol = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <List>
        <ListItem>
          <Typography variant='h6'>Ремонт цоколя</Typography>
        </ListItem>
      </List>
    </Grid>
  );
};

export default Tsokol;
