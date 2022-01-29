import React,{useContext} from 'react';
import { Nav,Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './App.scss';
import Context from './Context'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';


export default () => {
    const drawerWidth = 240;
    const useStyles = makeStyles(theme => ({
      root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
        color: theme.palette.primary,
        backgroundColor: theme.palette.primary.main
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
      },
    }));
    const {drawerVisible, setDrawerVisible} = useContext(Context)
    const classes = useStyles();
    const theme = useTheme();
    const handleDrawerToggle = (e) => {
      setDrawerVisible(!drawerVisible)
    }
    const drawer = (
      <div>
          <Nav>
              <NavLink style = {{color: 'white',  padding:'1em',fontSize:'3.5vw'}} activeStyle={{ color: 'green' }} to="/pollustat/releves">Relevés</NavLink>
              <NavLink style = {{color: 'white',padding:'1em',fontSize:'3.5vw'}} activeStyle={{ color: 'green' }} to="/pollustat/infos">Infos</NavLink>
              <NavLink style = {{color: 'white',padding:'1em',fontSize:'3.5vw'}} activeStyle={{ color: 'green' }}to="/pollustat/propos">A Propos</NavLink>
          </Nav>
      </div>
    );
      return (
        <div>

          <Hidden xsDown implementation="css">
            <Navbar bg="primary">
              <Navbar.Brand>
              <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded float-left img-fluid" width="100" height="50" alt=''/>
              </Navbar.Brand>
              <Nav>
                  <NavLink style = {{color: 'white',  padding:'1em',fontSize:'2vw'}} activeStyle={{ color: 'green' }} to="/pollustat/releves">Relevés</NavLink>
                  <NavLink style = {{color: 'white',padding:'1em',fontSize:'2vw'}} activeStyle={{ color: 'green' }} to="/pollustat/infos">Infos</NavLink>
                  <NavLink style = {{color: 'white',padding:'1em',fontSize:'2vw'}} activeStyle={{ color: 'green' }}to="/pollustat/propos">A Propos</NavLink>
              </Nav>
            </Navbar>
          </Hidden>

          <Hidden smUp >
            <Navbar bg="primary" class="nav navbar-nav navbar-right">
              <MenuIcon onClick={handleDrawerToggle}/>
              <SwipeableDrawer 
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={drawerVisible}
                  onClose={handleDrawerToggle}
                  onClick={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  >
                  <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                      <CloseIcon/>
                  </IconButton>
                  {drawer}
                </SwipeableDrawer>
                <div class="col-sm-4">
                <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded float-right img-fluid" width="50" height="50" alt=''/>
                </div>
              </Navbar>
          </Hidden>
          
          <div class="body-nav"/>
        </div >
      );
  }
