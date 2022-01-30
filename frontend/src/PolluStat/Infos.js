import React from 'react';
import './App.scss';
import './App.css';
import { Navbar,Nav } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
	 const PollutionContent = {
		 NO2 : {
			 h1 : "Dioxyde d'azote (NO2)",
			 h3 : ["Qu'est ce que c'est?","Un danger pour l'homme et l'environnement"],
			 p : ["Le dioxyde d'azote est un gaz toxique suffocant à l'allure brun et rouge. Il à l'odeur âcre et piquante. Ce gaz est produit en majorité par les moteurs des véhicules terrestres ainsi que par les centrales thermiques. C'est un polluant majeur de l'atmosphere.",
			"Ce gaz participe à la formation de pluies d'acides, à la dégradation de la couche d'ozone et à l'effet de serre. De plus, au delà d'une certaine concentration dans l'air, le dioxyde d'azote est sources d'irritations, d'aggravations de maladie respiratoires (asthme) et de développement de maladies respiratoires."],
			img : ["https://www.innovationnewsnetwork.com/wp-content/uploads/2020/05/NO2-concentrations.jpg","https://wallpaperaccess.com/full/1323543.jpg"]
		},
		 PM : {
			h1 : "Particules en suspension (PM10 et PM2,5)",
			h3 : ["Qu'est ce que c'est?","Un danger pour l'homme et l'environnement"],
			p : ["Pour faire court les particules en suspension (notées « PM » en anglais pour « Particulate matter »)  sont de la poussière. Dans le cas de la pollution de l’air, ces poussières sont souvent issues de combustions qui ne sont pas totales. Elles génèrent ce qu’on appelle des imbrûlés. Quand on voit la fumée sortir du cheminée, d’un pot d’échappement ou quand on recrache de la fumée de cigarettes, c’est parce qu’il y a énormément de particules, de plus ou moins petites tailles. Les particules sont d’origines anthropiques (humaines) et naturelles.",
		   "Les particules fines pénètrent en profondeur dans les poumons. Elles peuvent être à l’origine d’inflammations, et de l’aggravation de l’état de santé des personnes atteintes de maladies cardiaques et pulmonaires. De plus, elles peuvent transporter des composés cancérigènes absorbés sur leur surface jusque dans les poumons."],
		   img : ["https://www.citycle.com/wp-content/uploads/2014/03/pollution-particules-fines.jpg","http://www.auxerretv.com/content/public/1430321248058e05c4ed722f4fb0433e11cfe58329-201306_france_origines_particules_pm10.png"]
	   },
	   COV : {
		h1 : "Les composés organiques volatils (COV)",
		h3 : ["Qu'est ce que c'est?","Un danger pour l'homme et l'environnement"],
		p : ["Les composés organiques volatils regroupent une multitude de substances, qui peuvent être d'origine biogénique (naturelle) ou anthropique (humaine). Les plus connus sont le butane, le toluène, l'éthanol (alcool à 90°), l'acétone et le benzène que l’on retrouve dans l’industrie, le plus souvent sous la forme de solvants organiques (par exemple, dans les peintures ou les encres).",
	   "Le dioxyde d'azote est un gaz toxique suffocant à l'allure brun et rouge. Il à l'odeur âcre et piquante. Ce gaz est produit en majorité par les moteurs des véhicules terrestres ainsi que par les centrales thermiques. C'est un polluant majeur de l'atmosphere."],
	   img : ["https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/f/9/c/f9cd322b6b_86194_9fs-9-shutterstock-40584751.jpg","https://wallpaperaccess.com/full/1323543.jpg"]
		},
		SO2 : {
			h1 : "Dioxyde de souffre (SO2)",
			h3 : ["Qu'est ce que c'est?","Un danger pour l'homme et l'environnement"],
			p : ["Le SO2 est un gaz incolore, à l’odeur piquante. Il est produit par la combustion des énergies fossiles (charbon et pétrole) et la fonte des minerais de fer contenant du soufre. La source anthropique principale de SO2 est la combustion des énergies fossiles contenant du soufre pour le chauffage domestique, la production d’électricité ou les véhicules à moteur.",
		"Le SO2 affecte le système respiratoire, le fonctionnement des poumons et il provoque des irritations oculaires. L’inflammation de l’appareil respiratoire entraîne de la toux, une production de mucus, une exacerbation de l’asthme, des bronchites chroniques et une sensibilisation aux infections respiratoires. Le nombre des admissions à l’hôpital pour des cardiopathies et la mortalité augmentent les jours de fortes concentrations en SO2. Chez les personnes souffrant d’asthme, il peut perturber le bon fonctionnement des poumons même à faible concentration. "],
		img : ["data:image/png;base64,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","https://whyy.org/wp-content/uploads/2019/10/smog-copy.jpg"]
		},
		O3 : {
			h1 : "Ozone (O3)",
			h3 : ["Qu'est ce que c'est?","Un danger pour l'homme et l'environnement"],
			p : ["Il ne faut pas confondre l’ozone de la couche protectrice dans la haute atmosphère avec celui qui l’on retrouve au niveau du sol et qui est l’un des principaux constituants du smog photochimique. Dans ce cas, l’ozone se forme sous l’effet de réactions photochimiques (c’est-à-dire en présence du rayonnement solaire) entre divers polluants, comme les oxydes d’azote (NOx, émis par les véhicules et l’industrie) et les composés organiques volatiles (COV, émis par les véhicules, les solvants et l’industrie). On observe par exemple des pics de concentration pendant les périodes de temps ensoleillé.",
		"À des concentrations trop élevées, l’ozone a des effets marqués sur la santé de l’homme. On observe alors des problèmes respiratoires, le déclenchement de crises d’asthme, une diminution de la fonction pulmonaire et l’apparition de maladies respiratoires."],
		img : ["https://www.sciencesetavenir.fr/assets/afp/2018/08/03/f7668a92e76f5f945dca57d0db721204308e4d57.jpg","https://cdn.futura-sciences.com/buildsv6/images/wide1920/0/6/e/06eadc83d4_129290_pollution-ozone-01.jpg"]
		},
	 }

	 const [particule,setParticule] = React.useState('NO2');
	  const handleClick = (event) => {
		setParticule(event.target.innerText);
	  };
	  
      return (
      <div class="text-dark bg-white">
        <Navbar bg="primary">
        <Nav className="m-auto">
		<ButtonGroup onClick={handleClick} size="large" aria-label="large button group info ">
		  <Button>NO2</Button>
		  <Button>PM</Button>
		  <Button>COV</Button>
		  <Button>SO2</Button>
		  <Button>O3</Button>
        </ButtonGroup>
        </Nav>
        </Navbar>

		
        <section >
        	<div class="container">
        		<div class="row col-md-12 col-sm-6">
				<p>
				<h1>{PollutionContent[particule].h1}</h1>
					<img src={PollutionContent[particule].img[0]} id="img_left" alt=""/>
					
					<h3>{PollutionContent[particule].h3[0]}</h3>
					{PollutionContent[particule].p[0]}</p>
				</div>
			</div>
  
        	<div class="container">
        		<div class="row col-md-12 col-sm-6">
					<p><img src={PollutionContent[particule].img[1]} id="img_right" alt=""/>
					<h3>{PollutionContent[particule].h3[1]}</h3>
					{PollutionContent[particule].p[1]}
					</p>		  
        		</div>
        	</div>
		</section>
		<div class="body-second"/>
	</div>

      );
}