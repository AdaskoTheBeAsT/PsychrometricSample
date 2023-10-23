import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Psychrometrics
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Settings
        </Button>
        <Button color="inherit" component={Link} to="/calculation">
          Calculation
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
