import React from 'react';
import './App.scss';
import './App.css';
import { Navbar,Nav } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import { useTheme } from '@material-ui/core/styles';

export default () => {

	 const [particule,setParticule] = React.useState('NO2');
	  const handleClick = (event) => {
		setParticule(event.target.innerText);
	  };
	  
	  const theme = useTheme();
      return (
      <div class="text-dark bg-white">
        <Navbar bg="primary">
        <Nav className="m-auto" style = {{color: 'white',fontSize:'3.5vw'}}>
		A Propos
        </Nav>
        </Navbar>

        <div class>
        <center> 
        <h1 style = {{fontSize:'3.5vw'}}>Qui sommes-nous?</h1>
        </center>
        <center> 
            <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded img-fluid" width="200" height="200" alt=""/>
        </center>
        </div>
			

        <Navbar bg="primary">
        <Nav className="m-auto" style = {{color: 'white',fontSize:'calc(10px + 2.5vw)'}}>
		Notre équipe
        </Nav>
        </Navbar>

        <Navbar bg="primary">
        <Nav className="m-auto" style = {{color: 'white',fontSize:'calc(10px + 1.5vw)'}}>
        <center> <p>Crée en 2020, Pollu-Stat est un projet mené par un groupe de 5 étudiants-ingénieurs de l'Ecole Centrale d'Electronique (ECE Paris.Lyon)</p>
        </center>
        </Nav>
        </Navbar>
       
        <Navbar bg="primary">
        <Nav className="m-auto">
        <div> <center>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGdl72MiCLSoA/profile-displayphoto-shrink_200_200/0/1615052455429?e=1648684800&v=beta&t=2JFxZ6zWlbGOYTHf-yow-c8Z3Ah86F6Hz-ASabr_zb8"  class="avatar" width="200" height="200" alt=""/>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFG7mkqmuScKA/profile-displayphoto-shrink_200_200/0/1543925485217?e=1648684800&v=beta&t=zCXIUvxGIiEgcIT0LU-75F61g_fSrDMQw7snDpa91gg"  class="avatar" width="200" height="200" alt=""/>
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGpLneHAOakAw/profile-displayphoto-shrink_200_200/0/1636711633993?e=1648684800&v=beta&t=d2EAktauzYMNrcTVx1Lb-MRlWtYdlXFocP1Sz6HQlJw"  class="avatar" width="200" height="200" alt=""/>
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFfaXUF4NZmlw/profile-displayphoto-shrink_200_200/0/1619636879784?e=1648684800&v=beta&t=5Y8f3qUgY-SGqIwuUbPsYfXVcQ73_sUAeMpIEccGL1M"  class="avatar" width="200" height="200" alt=""/>
        <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-1/p200x200/121037054_2913550302207224_1414469915315694485_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Op3MPt1XmvgAX_rDWax&_nc_ht=scontent-cdg2-1.xx&oh=00_AT_ZjbABdvIU_qEeSd1yo4G_fGV-0aH83Z2Mz2AAkJXu5Q&oe=621A73ED"  class="avatar" width="200" height="200" alt=""/>
        </center></div>
        </Nav>
        </Navbar>
      
 
        <div>
            <h1 style = {{fontSize:'calc(10px + 2.5vw)'}}>Notre objectif?</h1>
            <center>
            <p style = {{fontSize:'calc(10px + 1.5vw)'}}> Nous souhaitons informer sur l'importance de la qualité de l'air à Paris et les dangers que cela peut représenter sur la santé des Parisiens.</p>
            <p style = {{fontSize:'calc(10px + 1.5vw)'}}> Dans cet objectif, nous surveillons le niveau de pollution grâce à un dispositif de mesures</p>
            </center>
        </div>

        <div class="body-second"/>
	
	</div>
    	

      );
}