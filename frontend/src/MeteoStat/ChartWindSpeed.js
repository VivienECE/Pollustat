import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

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
    return (
      <div>
      <h5 class="texte">WindSpeed</h5>
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
      </div>
    );
}
