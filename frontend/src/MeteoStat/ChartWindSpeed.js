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
    name: 'Janvier', "WindSpeed": 30, 
  },
  {
    name: 'Février', "WindSpeed": 23,
  },
  {
    name: 'Mars', "WindSpeed": 27,
  },
  {
    name: 'Avril', "WindSpeed": 25, 
  },
  {
    name: 'Mai', "WindSpeed": 22, 
  },
  {
    name: 'Juin', "WindSpeed": 18, 
  },
  {
    name: 'Juillet', "WindSpeed": 17, 
  },
    {
    name: 'Aout', "WindSpeed": 20, 
  },
    {
    name: 'Septembre', "WindSpeed": 21,
  },
      {
    name: 'Octobre', "WindSpeed": 22,
  },
      {
    name: 'Novembre', "WindSpeed": 25,
  },
      {
    name: 'Décembre', "WindSpeed": 29,
  }
];

export default function ChartWindSpeed() {
  const { title } = useStyles();
    return (
      <Container>
      <Typography className={title}>WindSpeed</Typography>
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
