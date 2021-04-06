import React from 'react';
import AreaChart from './AreaChart_DynamoDB';
import './App.css';
import './App.scss';
import { Nav,Navbar } from 'react-bootstrap';

class Toolbar extends React.Component{

  constructor(props){
      super(props);
      this.state = {
      };
  }

  render(){
      return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
        <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded float-left img-fluid" width="100" height="50" alt=""/>
        </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/releves">Relevés</Nav.Link>
            <Nav.Link href="/infos">Infos</Nav.Link>
            <Nav.Link href="/propos">A Propos</Nav.Link>
            <Nav.Link href="/meteostat">Meteostat</Nav.Link>
          </Nav>
        </Navbar>
      );
  }
}

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
      return (
          <div class="container ">
                <h4 class="texte">Votre Dashboard</h4>
                <div class = "dashboard o5 col-xl-12 "><AreaChart data={this.state.data}/></div>
                <br></br>
          </div>
      );
  }
}

class Page extends React.Component{

  constructor(props){
      super(props);
      this.state = {
      };
  }
  render(){
      return (
          <div class="">
              <meta name="viewport" content="width=device-width, initial-scale=0.7"></meta>
               <Toolbar/>
               <hr></hr>
               <Dashboard/>
          </div>
      );
  }
}

export default Page;
