import React from 'react';
import './App.scss';
import { Navbar,NavDropdown } from 'react-bootstrap';

class Infos extends React.Component{

  constructor(props){
      super(props);
      this.state = {
      };
  }

  render(){
      return (
      <div>
        <Navbar bg="primary" variant="dark">
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        </Navbar>

        <section id="about">
        	<div class="container">
        		<div class="row">

              <div class="col-md-6 col-sm-12">
                <img src="img/photo.jpeg" class="img-responsive wow fadeInUp" alt="About"/>
              </div>

        			<div class="col-md-6 col-sm-12">
        				<div class="about-thumb">
        					<div class="section-title">
        						<h1 class="wow fadeIn" data-wow-delay="0.2s">Our earth dying!</h1>
        						<h3 class="wow fadeInUp" data-wow-delay="0.4s">Air/Water Pollution - Habitat Destruction</h3>
        					</div>
        					<div class="wow fadeInUp" data-wow-delay="0.6s">
        						<p>Global carbon emissions from fossil fuels accounts for 90% of all emissions from human activity. The burning of fossil fuels releases carbon dioxide and other greenhouse gases into the atmosphere, which pollutes the air we breathe. Carbon dioxide dissolves into the sea, causing acidification which affects the life cycles of marine organisms. Vast amounts of land are decimated to provide space for drilling wells, pipelines, and processing facilities used in oil and gas drilling operations.</p>
        					</div>
        				</div>
        			</div>

        		</div>
        	</div>
        </section>

        <section id="about">
        	<div class="container">
        		<div class="row">
        			<div class="col-md-6 col-sm-12">
        				<div class="section-title">
        					<h1 class="wow fadeIn" data-wow-delay="0.2s">We have to stop!</h1>
        					<h3 class="wow fadeInUp" data-wow-delay="0.4s"></h3>
        				</div>
        				<div class="wow fadeInUp" data-wow-delay="0.6s">
        					<p>Ending the climate crisis means we have to keep fossil fuel reserves in the ground. That means stopping all new coal, oil and gas infrastructure, and banning future fossil fuel projects.</p>
        				</div>
            			</div>

        			<div class="col-md-6 col-sm-12">
        				<div class="about-thumb">
        					 <img src="img/photo-2.jpeg" class="img-responsive wow fadeInUp" alt="About"/>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>

        <section id="about">
        	<div class="container">
        		<div class="row">

              <div class="col-md-6 col-sm-12">
                <img src="img/photo-3.jpeg" class="img-responsive wow fadeInUp" alt="About"/>
              </div>

        			<div class="col-md-6 col-sm-12">
        				<div class="about-thumb">
        					<div class="section-title">
        						<h1 class="wow fadeIn" data-wow-delay="0.2s">What to do?</h1>
        						<h3 class="wow fadeInUp" data-wow-delay="0.4s">Renewable energy, no fossil fuel project</h3>
        					</div>
        					<div class="wow fadeInUp" data-wow-delay="0.6s">
        						<p>Nuclear energy is one of the cleanest way to produce electricity, but uranium is always a fossil fuel. We have to develop green energy made from wind and solar power. And develop green car, boat, plane can be our future. </p>
        					</div>
        				</div>
        			</div>

        		</div>
        	</div>
                  </section>
        </div>

      );
  }
}

export default Infos;
