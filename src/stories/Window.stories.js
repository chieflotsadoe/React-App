import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { action } from '@storybook/addon-actions';
import './../App.css';

// console.log(css);

import Window from './../components/Window.js';


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    error: {
      main: '#FF0080'
    },
    warning: {
      main: '#FFFF00'
    },
    info: {
      main: '#0000FF'
    },
    success: {
      main: '#00FF80'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Poppins, Playfair Display',
    fontWeightRegular: 800,
  },
});

export default {
  component: Window,
  title: 'Window'
};

export const Static = () => (
  <ThemeProvider theme={theme}>
    <Window onClick={action('clicked')}>
    </Window>
  </ThemeProvider>
  );