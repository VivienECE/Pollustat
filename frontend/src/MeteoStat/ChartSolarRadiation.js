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
    name: 'Janvier', "Solar Radiation": 320, 
  },
  {
    name: 'Février', "Solar Radiation": 340,
  },
  {
    name: 'Mars', "Solar Radiation": 330,
  },
  {
    name: 'Avril', "Solar Radiation": 380, 
  },
  {
    name: 'Mai', "Solar Radiation": 410, 
  },
  {
    name: 'Juin', "Solar Radiation": 427, 
  },
  {
    name: 'Juillet', "Solar Radiation": 420, 
  },
    {
    name: 'Aout', "Solar Radiation": 532, 
  },
    {
    name: 'Septembre', "Solar Radiation": 412,
  },
      {
    name: 'Octobre', "Solar Radiation": 392,
  },
      {
    name: 'Novembre', "Solar Radiation": 329,
  },
      {
    name: 'Décembre', "Solar Radiation": 328,
  }
];

export default function ChartSolarRadiation() {
  const { title } = useStyles();
    return (
      <Container>
      <Typography className={title}>Solar Radiation</Typography>
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