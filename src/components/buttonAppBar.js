import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    color: '#fff',
    textDecoration: 'none'
  }
}));

export const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.linkStyle}>CoronaChecker.io</Link>
          </Typography>
          <Link to="/" className={classes.linkStyle}><Button color="inherit">Home</Button></Link>
          <Link to="/tweets" className={classes.linkStyle}><Button color="inherit">Tweets</Button></Link>
          <Link to="/map" className={classes.linkStyle}><Button color="inherit">Map</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}