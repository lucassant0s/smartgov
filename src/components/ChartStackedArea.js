import React, { Component } from "react";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import {
  COLOR_DARK_GRAY,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_RED
} from "../constants";

const colors = [
  { stroke: COLOR_DARK_GRAY, fill: COLOR_DARK_GRAY },
  { stroke: COLOR_GREEN, fill: COLOR_GREEN },
  { stroke: COLOR_RED, fill: COLOR_RED },
  { stroke: COLOR_BLUE, fill: COLOR_BLUE }
];

const formatter = value => `R$ ${value}`;

const ChartStackedArea = props => (
  <div style={{ height: 300 }}>
    <ResponsiveContainer>
      <AreaChart
        width={600}
        height={400}
        data={props.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {props.XAxis && <XAxis dataKey={props.XAxis.dataKey} />}
        <YAxis tickFormatter={formatter} />
        <Tooltip />
        {props.areas.map((area, i) => {
          return (
            <Area
              key={i}
              name={area.name}
              type="monotone"
              dataKey={area.dataKey}
              stackId="1"
              stroke={colors[i].stroke}
              fill={colors[i].fill}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default ChartStackedArea;
