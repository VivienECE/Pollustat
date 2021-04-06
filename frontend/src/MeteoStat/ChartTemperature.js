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
  const { title } = useStyles();
    return (
      <Container>
      <Typography className={title}>
        Temperature
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
