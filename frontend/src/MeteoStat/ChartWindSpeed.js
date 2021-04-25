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
    name: 'Janvier', "WindSpeed": 4.71, 
  },
  {
    name: 'Février', "WindSpeed": 4.13,
  },
  {
    name: 'Mars', "WindSpeed": 2.86,
  },
  {
    name: 'Avril', "WindSpeed": 2.37, 
  },
  {
    name: 'Mai', "WindSpeed": 2.56, 
  },
  {
    name: 'Juin', "WindSpeed": 3.72, 
  },
  {
    name: 'Juillet', "WindSpeed": 1.90, 
  },
    {
    name: 'Aout', "WindSpeed": 2.43, 
  },
    {
    name: 'Septembre', "WindSpeed": 3.11,
  },
      {
    name: 'Octobre', "WindSpeed": 3.28,
  },
      {
    name: 'Novembre', "WindSpeed": 1.64,
  },
      {
    name: 'Décembre', "WindSpeed": 2.98,
  }
];

export default function ChartWindSpeed() {
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
      <Typography className={title}>Vitesse du vent</Typography>
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
            <Area type="monotone" dataKey="WindSpeed" stackId="1" stroke="#bbb4d8" fill="#bbb4d8" />

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
                Moyenne : 2.67 m/s | 
                Médiane : 2.51 m/s
              </Box>
            <Accordion className={details}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color='primary'/>}
              >
                <Typography color='primary'>
                Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography color='primary'>
                Vitesse de vent 0.47 m/s plus élevée que l'année précédente
              </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Slider + analyse */}
      </Container>
    );
}
