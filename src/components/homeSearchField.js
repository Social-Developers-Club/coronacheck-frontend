import React from 'react';
import { Button, Input } from '@material-ui/core';
import { homeSearchInputStyles } from '../styles/homeSearchInputStyles';

export const HomeSearchField = () => {
  const classes = homeSearchInputStyles();

  return (
    <div className={classes.wrapper}>
      <Input name="search" placeholder="Get your news checked" />
      <Button variant="contained" className={classes.submitButton} color="primary" size="small">Check</Button>
    </div>
  )
}
