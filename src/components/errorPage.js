import React from 'react';
import { homeSearchInputStyles } from '../styles/homeSearchInputStyles';

export const ErrorPage = () => {
  const classes = homeSearchInputStyles();

  return (
    <div className={classes.wrapper}>
      <h1>404</h1>
    </div>
  )
}
