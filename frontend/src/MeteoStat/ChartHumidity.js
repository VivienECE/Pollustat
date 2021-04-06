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
  AreaChart, Area, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
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
// Ray entre 0 (200) et 950 en W/m2
// WindSpeed 0.5 a 5 en m/s
// Entre 50 et 100 en %
const data = [
  {
    name: 'Janvier', "Humidity": 70, 
  },
  {
    name: 'Février', "Humidity": 62,
  },
  {
    name: 'Mars', "Humidity": 66,
  },
  {
    name: 'Avril', "Humidity": 88, 
  },
  {
    name: 'Mai', "Humidity": 59, 
  },
  {
    name: 'Juin', "Humidity": 44, 
  },
  {
    name: 'Juillet', "Humidity": 42, 
  },
    {
    name: 'Aout', "Humidity": 57, 
  },
    {
    name: 'Septembre', "Humidity": 66,
  },
      {
    name: 'Octobre', "Humidity": 75,
  },
      {
    name: 'Novembre', "Humidity": 72,
  },
      {
    name: 'Décembre', "Humidity": 69,
  }
];

function ChartHumidity(){
  const { title, slider, stats, details } = useStyles();
  function valuetext(value) {
    return `${value}°C`;
  }
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
          <Typography className={title}>Humidité</Typography>
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
                <Area type="monotone" dataKey="Humidity" stackId="1" stroke="#9984f8" fill="#8884f8" />
    
              </AreaChart>
            </ResponsiveContainer>
            {/* Slider, vertical si possible */}
            <Slider className={slider}
              defaultValue={100}
              step={25}
              marks={marks}
              track={false}
              // onChange={func}
              />
              </div>
              <Box className={stats}>
                Moyenne : 67.32% | 
                Médiane : 64%
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
                Humidité 2.61% plus élevée que l'année précédente
              </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Slider + analyse */}
          </Container>
        );
}

export default ChartHumidity;
