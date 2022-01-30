import React, {useContext} from 'react';
import AreaChart from './AreaChart_DynamoDB';
import './App.scss';
import { Navbar,NavDropdown } from 'react-bootstrap';
import Context from './Context'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {

  const {setDomain, setTickFormatter} = useContext(Context)
  const setTime = (domain,ticket) => {
    setDomain(domain)
    setTickFormatter(ticket)
  }
  var date = new Date();

  function getMonday() {
    var d = new Date();
    var day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

    return (
        <div >
        <Navbar bg="primary">
        <NavDropdown bg="secondary" title="Temps" id="nav-dropdown">
        <NavDropdown.Item onClick={()=>setTime(['auto', 'auto'],'DD/MM')}>Automatique</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>setTime([(new Date()).setUTCHours(0,0,0,0), (new Date()).setUTCHours(23,59,59,59)],'h:mm')}>Aujourd'hui</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>setTime([getMonday().getTime(), 'dataMax'],'DD/MM')}>Cette semaine</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>setTime([(new Date(date.getFullYear(), date.getMonth(), 1)).getTime(), 'dataMax'],'DD/MM')}>Ce mois-ci</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>setTime([(new Date(new Date().getFullYear(), 0, 1)).getTime(), 'dataMax'],'DD/MM')}>Cette année</NavDropdown.Item>
      </NavDropdown>
        </Navbar>
          <div class="container ">
              <hr/>
              <div class = "dashboard o5 col-xl-12 "><AreaChart/></div>
              <br></br>
            </div>
          <div class="body-second"/>
        </div>
    );
}
