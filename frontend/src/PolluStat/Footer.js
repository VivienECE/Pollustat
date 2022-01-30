import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import './App.scss';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
      return (
      <footer class="bg-primary text-center text-lg-start" variant="dark">
      <Hidden xsDown implementation="css"> 
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-4 text-center text-white p-3" >
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">pollu.stat@outlook.com</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Partenaires</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-4 text-center text-white">
                      <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded img-fluid" width="100" height="50" alt=""/>
                  </div>
                  <div class="col-sm-4 text-center text-white p-3" >
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">Relevés</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">A propos</a>
                      </li>
                    </ul>
                    </div>
                </div>
                <div class="row">
                  <div class="col-md-12 text-white">
                  Pollu-Stat TOUS DROITS RÉSERVÉS © - 2020
                  </div>
                </div>
              </div>
       
      </Hidden>

      <Hidden smUp >
        <div class="container">
          <center>
                      <img src="https://www.zupimages.net/up/21/13/lbxl.png" class="rounded img-fluid" width="100" height="50" alt=""/>
        </center>
          </div>
      </Hidden>
      </footer>
      );
  }

