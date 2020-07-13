import React, { ReactNode } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, makeStyles } from '@material-ui/core';
import { APP_NAME } from '../constants'

export interface HeaderProps {
  children: ReactNode;
}
const useStyles = makeStyles(() => ({
  root: {
    height: '100px'
  },
  h4: {
    flexGrow: 1,
  }
}));
export const Header = ({ children }: HeaderProps) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root} style={{ padding: '0 16px' }}>
        <Typography variant="h4" component="h1" className={classes.h4}>
          {APP_NAME}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};