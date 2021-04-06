import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import PolluStat from './PolluStat/Main';
import Footer_Pollustat from './PolluStat/Footer';
import MeteoStat from './MeteoStat/Meteostat';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
        default: "#333841",
    },
    text: {
        primary:"#ffffff",
    },
    primary: {
      light: '#9bc0ff',
      main: '#82b1ff',
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

class Page extends React.Component{
  constructor(props){
      super(props);
      this.state = {
      };
  }

  render(){
      return (
              <ThemeProvider theme={theme}>
                  <CssBaseline/>
                  <meta name="viewport" content="width=device-width, initial-scale=0.7"></meta>
                 <Switch>
                      <Route path="/pollustat">
                          <PolluStat/>
                          <Footer_Pollustat/>
                      </Route>
                      <Route path="/meteostat">
                          <Header/>
                          <MeteoStat/>
                      </Route>
                      <Route path="/">
                          <Header/>
                      </Route>
                 </Switch>
              </ThemeProvider>
      );
  }
}

export default Page;
