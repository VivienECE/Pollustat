import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

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
    return (
      <div>
      <h5 class="texte">Temperature</h5>
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
            <Area type="monotone" dataKey="Temperature" stackId="1" stroke="#88f4f8" fill="#88f4f8" />

          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
}
