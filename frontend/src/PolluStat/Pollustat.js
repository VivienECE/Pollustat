import React from 'react';
import AreaChart from '../AreaChart_Static_1';
import 'bootstrap/dist/css/bootstrap.min.css';

class Toolbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }
  
    render(){
        return (    
          <div class="d-flex justify-content-between nav">
                  <h2 class="p-2 texte"> Bienvenue </h2>
                  <form class="p-2 barre_recherche " method="POST" action="index.html" >
                      <input type="search" required class="search"/>
                      <input type="submit" name="submit" value="🔎" class="submit"/>
                  </form>
          </div> 
        );
    }
  }

  class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
  
    render(){
        return (           
            <div class="container" >
                  <h4 class="texte">Votre Dashboard</h4>
                  <div class = "dashboard o5 col-xl-12 "><AreaChart/></div>
                  <br></br>
            </div>
        );
    }
  }

class PolluStat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <Toolbar/>
                <hr></hr>
                <Dashboard/>
            </div>
        );
    }
}

export default PolluStat;