import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: 'Sensor 1', uv: 5404, pv: 9865, amt: 6068},
      {name: 'Sensor 2', uv: 584, pv: 7244, amt: 4693},
      {name: 'Sensor 3', uv: 3082, pv: 7656, amt: 95},
      {name: 'Sensor 4', uv: 6859, pv: 2843, amt: 4737}
];
class SimpleLineChart extends Component {
	render () {
  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="KiloWatts/Reais" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Watts/Reais" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
