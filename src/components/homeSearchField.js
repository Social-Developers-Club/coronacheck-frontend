import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { homeSearchInputStyles } from '../styles/homeSearchInputStyles';

export const HomeSearchField = () => {
  const classes = homeSearchInputStyles();
  const [input, setInput] = useState({
    search: ''
  });

  const handleChange = (e) => {
    setInput({ [e.target.name]: e.target.value })
  }
  
  return (
    <div className={classes.wrapper}>
      <Input onChange={handleChange} name="search" placeholder="Get your news checked" value={input.search} />
      <Button variant="contained" className={classes.submitButton} color="primary" size="small">Check</Button>
    </div>
  )
}
