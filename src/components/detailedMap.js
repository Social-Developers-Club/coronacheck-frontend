import React from 'react';
import { Typography } from '@material-ui/core';
import { homeSearchInputStyles } from '../styles/homeSearchInputStyles';

export const DetailedMap = () => {
  const classes = homeSearchInputStyles();

  return (
    <div className={classes.wrapper}>
       <Typography>Detailed Map</Typography>
    </div>
  )
}
