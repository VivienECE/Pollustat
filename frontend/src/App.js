import React, {useState} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import InfosPollustat from './PolluStat/Infos';
import RelevesPollustat from './PolluStat/Releves';
import APropos from './PolluStat/Propos';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './PolluStat/App.css';
import NavBarPollustat from './PolluStat/NavBar';
import FooterPollustat from './PolluStat/Footer';

const theme = createTheme({
  palette: {
    background: {
        default: "#333841",
    },
    text: {
        primary:"#ffffff",
    },
    primary: {
      light: 'rgba(110, 181, 119, 0.59)',
      main: 'rgba(110, 181, 119)',
      dark: '#5b7bb2',
      contrastText: '#fff',
    },
    secondary: {
      light: '#70d9e7',
      main: '#4dd0e1',
      dark: '#35919d',
      contrastText: '#000',
    },
  },
});

export default () => {
      return (
              <ThemeProvider theme={theme}>
                  <CssBaseline/>
                  <meta name="viewport" content="width=device-width, initial-scale=0.7"></meta>
                  <NavBarPollustat/>
                 <Switch>
                     <Route exact path="/pollustat/infos">
                         <InfosPollustat/>
                     </Route>
                     <Route exact path="/pollustat/propos">
                         <APropos/>
                     </Route>
                     <Route exact path="/pollustat/releves">
                         <RelevesPollustat/>
                     </Route>
                     <Route exact path="/pollustat">
                     </Route>
                 </Switch>
                 <FooterPollustat/>
              </ThemeProvider>
      );
  }