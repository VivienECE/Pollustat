import React from 'react';
import './App.scss';
import './App.css';
import { Navbar,Nav } from 'react-bootstrap';

class Infos extends React.Component{

  constructor(props){
      super(props);
      this.state = {
      };
  }

  render(){
      return (
      <div class="text-dark bg-white ">
        <Navbar bg="primary" variant="dark" text="dark">
        <Nav className="m-auto">
          <Nav.Link href="/pollustat/infos">NO2</Nav.Link>
          <Nav.Link href="/pollustat/infos">PM10</Nav.Link>
          <Nav.Link href="/pollustat/infos">COV</Nav.Link>
          <Nav.Link href="/pollustat/infos">SO2</Nav.Link>
          <Nav.Link href="/pollustat/infos">NH10</Nav.Link>
        </Nav>
        </Navbar>

        <section >
        	<div class="container">
        		<div class="row">
              		<div class="col-md-6 col-sm-12">
               			<img src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/05/NO2-concentrations.jpg" width="500px" height="300px"/>
					</div>
					<div class="col-md-6 col-sm-12">
						<div>
							<h1>Dioxyde d'azote (NO2)</h1>
							<h3>Qu'est ce que c'est?</h3>
						</div>
						<div>
							<p>Le dioxyde d'azote est un gaz toxique suffocant à l'allure brun et rouge. Il à l'odeur âcre et piquante.</p>
							<p> Ce gaz est produit en majorité par les moteurs des véhicules terrestres ainsi que par les centrales thermiques. C'est un polluant majeur de l'atmosphere. </p>
						</div>
					</div>
				</div>
			</div>
  
        	<div class="container">
        		<div class="row">
        			<div class="col-md-6 col-sm-12">
        				<div>
        					<h3>Un danger pour l'homme et l'environnement</h3>
        				</div>
        				<div>
        					<p>Ce gaz participe à la formation de pluies d'acides, à la dégradation de la couche d'ozone et à l'effet de serre.</p>
               			   <p>De plus, au delà d'une certaine concentration dans l'air, le dioxyde d'azote est sources d'irritations, d'aggravations de maladie respiratoires (asthme) et de développement de maladies respiratoires.</p>
        				</div>
            		</div>
        			<div class="col-md-6 col-sm-12">
        					   <img src="https://wallpaperaccess.com/full/1323543.jpg" width="500" height="300"/>
        			</div>
        		</div>
        	</div>
		</section>
		<div class="body-second"/>
	</div>

      );
  }
}

export default Infos;
