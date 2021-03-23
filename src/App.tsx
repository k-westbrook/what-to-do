import { CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import Routes from './components/Routes';
import { AppWrapper } from './components/structure/AppWrapper';
import logo from './logo.svg';
import './App.css';
import sea from './sea.mp4';

function App() {
  return (
    <AppWrapper>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={sea} type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" label="english_captions" />
      </video>

      <Routes />
    </AppWrapper>
  );
}

export default App;
