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
    name: 'Janvier', "Temperature": 8, 
  },
  {
    name: 'Février', "Temperature": 6,
  },
  {
    name: 'Mars', "Temperature": 9,
  },
  {
    name: 'Avril', "Temperature": 11, 
  },
  {
    name: 'Mai', "Temperature": 14, 
  },
  {
    name: 'Juin', "Temperature": 18, 
  },
  {
    name: 'Juillet', "Temperature": 21, 
  },
    {
    name: 'Aout', "Temperature": 22, 
  },
    {
    name: 'Septembre', "Temperature": 17,
  },
      {
    name: 'Octobre', "Temperature": 16,
  },
      {
    name: 'Novembre', "Temperature": 15,
  },
      {
    name: 'Décembre', "Temperature": 13,
  }
];

export default function ChartTemperature() {
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
      <Typography className={title}>
        Température
      </Typography>
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
            <Area type="monotone" dataKey="Temperature" stackId="1" stroke="#88b4b8" fill="#88b4b8" />

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
                Moyenne : 14.21 °C | 
                Médiane : 15 ° C
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
                Température 0.3°C moins élevée que l'année précédente
              </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Slider + analyse */}
      </Container>
    );
}
