import React from 'react';
import { 
  makeStyles, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Container,
  Box,
  Slider
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    padding: "2%",
    fontSize: "200%",
  },
  slider: {
    marginTop:'7%',
    // padding: "3%",
  },
  stats: {
    textAlign: "center",
    padding: "2%",
    fontSize: "150%",
  },
  details: {
    marginTop: '7%',
    backgroundColor: '#404050',
  }
}));

const data = [
  {
    name: 'Janvier', "Solar Radiation": 420, 
  },
  {
    name: 'Février', "Solar Radiation": 440,
  },
  {
    name: 'Mars', "Solar Radiation": 430,
  },
  {
    name: 'Avril', "Solar Radiation": 481, 
  },
  {
    name: 'Mai', "Solar Radiation": 510, 
  },
  {
    name: 'Juin', "Solar Radiation": 727, 
  },
  {
    name: 'Juillet', "Solar Radiation": 616, 
  },
    {
    name: 'Aout', "Solar Radiation": 644, 
  },
    {
    name: 'Septembre', "Solar Radiation": 582,
  },
      {
    name: 'Octobre', "Solar Radiation": 537,
  },
      {
    name: 'Novembre', "Solar Radiation": 429,
  },
      {
    name: 'Décembre', "Solar Radiation": 381,
  }
];

export default function ChartSolarRadiation() {
  const { title, slider, stats, details } = useStyles();
  const marks = [
    {
      value: 0,
      label: 'H',
    },
    {
      value: 25,
      label: 'J',
    },
    {
      value: 50,
      label: 'S',
    },
    {
      value: 75,
      label: 'M',
    },
    {
      value: 100,
      label: 'A',
    }
  ];
    return (
      <Container>
      <Typography className={title}>Rayonnement Solaire</Typography>
      <div style={{ width: '95%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart  
            data={data}
            margin={{
              top: 10, right: 30, left: 0, bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Solar Radiation" stackId="1" stroke="#ff84d8" fill="#ff84d8" />

          </AreaChart>
        </ResponsiveContainer>
        <Slider className={slider}
              defaultValue={75}
              step={25}
              marks={marks}
              track={false}
              />
      </div>
      <Box className={stats}>
                Moyenne : 514 W/m2 | 
                Médiane : 497 W/m2
              </Box>
            <Accordion className={details}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color='primary'/>}
              >
                <Typography color='primary'>
                Détails
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography color='primary'>
                Rayonnement solaire 21 W/m2 moins élevé que l'année précédente
              </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Slider + analyse */}
      </Container>
    );
}