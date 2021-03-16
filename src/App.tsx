import { Typography } from '@material-ui/core';
import React from 'react';
import Routes from './components/Routes';
import { AppWrapper } from './components/structure/AppWrapper';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}

export default App;
