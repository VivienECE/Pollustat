import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Janvier', "Station 1": 210, "Station 2": 291, "Station 3": 431, "Station 4": 81,
  },
  {
    name: 'Février', "Station 1": 171, "Station 2": 333, "Station 3": 389, "Station 4": 63,
  },
  {
    name: 'Mars', "Station 1": 197, "Station 2": 362, "Station 3": 397, "Station 4": 32,
  },
  {
    name: 'Avril', "Station 1": 221, "Station 2": 384, "Station 3": 462, "Station 4": 64,
  },
  {
    name: 'Mai', "Station 1": 263, "Station 2": 296, "Station 3": 498, "Station 4": 106,
  },
  {
    name: 'Juin', "Station 1": 238, "Station 2": 245, "Station 3": 473, "Station 4": 59,
  },
  {
    name: 'Juillet', "Station 1": 182, "Station 2": 328, "Station 3": 476, "Station 4": 150,
  },
    {
    name: 'Aout', "Station 1": 175, "Station 2": 296, "Station 3": 424, "Station 4": 86,
  },
    {
    name: 'Septembre', "Station 1": 214,"Station 2": 367, "Station 3": 395, "Station 4": 58,
  },
      {
    name: 'Octobre', "Station 1": 220,"Station 2": 310, "Station 3": 361, "Station 4": 91,
  },
      {
    name: 'Novembre', "Station 1": 257,"Station 2": 289, "Station 3": 413, "Station 4": 83,
  },
      {
    name: 'Décembre', "Station 1": 353,"Station 2": 331, "Station 3": 450, "Station 4": 70,
  }
];

export default class Example extends PureComponent {

  render() {
    return (
      <div>
      <h5 class="texte">NO2 en ug</h5>
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
            <Area type="monotone" dataKey="Station 1" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="Station 2" stackId="1" stroke="#182850" fill="#182850" />
            <Area type="monotone" dataKey="Station 3" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="Station 4" stackId="1" stroke="#FFBB28" fill="#FFBB28" />

          </AreaChart>
        </ResponsiveContainer>
      </div>
      </div>
    );
  }
}
