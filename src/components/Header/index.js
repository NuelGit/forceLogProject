import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Force Log App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;