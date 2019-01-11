import React, { Component } from "react";
import {
  BarChart,
  XAxis,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  HighlightAndZoomLineChart
} from "recharts";
import {
  COLOR_DARK_GRAY,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_RED
} from "../constants";

const ChartBar = props => (
  <div style={{ height: 300 }}>
    <ResponsiveContainer>
      <BarChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="KiloWattsReais"
          name="KiloWatts/Reais"
          fill={COLOR_BLUE}
        />
        <Bar dataKey="WattsReais" name="Watts/Reais" fill={COLOR_RED} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ChartBar;
