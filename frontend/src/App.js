import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NavBar_Pollustat from './PolluStat/NavBar';
import Footer_Pollustat from './PolluStat/Footer';
import Infos_Pollustat from './PolluStat/Infos';
import MeteoStat from './MeteoStat/Meteostat';
import Releves_Pollustat from './PolluStat/Releves';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './PolluStat/App.css';

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
                     <Route path="/pollustat/infos">
                         <NavBar_Pollustat/>
                         <Infos_Pollustat/>
                         <Footer_Pollustat/>
                     </Route>
                     <Route path="/pollustat/releves">
                         <NavBar_Pollustat/>
                         <Releves_Pollustat/>
                         <Footer_Pollustat/>
                     </Route>
                     <Route path="/pollustat">
                         <NavBar_Pollustat/>
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
