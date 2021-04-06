import React from 'react';
import { 
  makeStyles, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Container,
  Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
  }
}));

const data = [
  {
    name: 'Janvier', "Humidity": 210, 
  },
  {
    name: 'Février', "Humidity": 171,
  },
  {
    name: 'Mars', "Humidity": 197,
  },
  {
    name: 'Avril', "Humidity": 221, 
  },
  {
    name: 'Mai', "Humidity": 263, 
  },
  {
    name: 'Juin', "Humidity": 238, 
  },
  {
    name: 'Juillet', "Humidity": 182, 
  },
    {
    name: 'Aout', "Humidity": 175, 
  },
    {
    name: 'Septembre', "Humidity": 214,
  },
      {
    name: 'Octobre', "Humidity": 220,
  },
      {
    name: 'Novembre', "Humidity": 257,
  },
      {
    name: 'Décembre', "Humidity": 353,
  }
];

function ChartHumidity(){
  const { title } = useStyles();
  return (
          <Container>
          <Typography className={title}>Humidity</Typography>
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
                <Area type="monotone" dataKey="Humidity" stackId="1" stroke="#8884d8" fill="#8884d8" />
    
              </AreaChart>
            </ResponsiveContainer>
              </div>
              <Box>
                Moyenne : 21
                Mediane : 19
              </Box>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
              >
                <Typography color='primary'>
                Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Typography color='primary'>
                This is details section
              </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Slider + analyse */}
          </Container>
        );
}

export default ChartHumidity;
