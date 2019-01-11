import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

class ChartSimpleLine extends Component {
  render() {
    return (
      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={this.props.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {this.props.XAxis && <XAxis dataKey={this.props.XAxis.dataKey} />}
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            {this.props.showLegend && <Legend />}
            {this.props.Line && (
              <Line
                type="monotone"
                name={this.props.Line.name && this.props.Line.name}
                dataKey={this.props.Line.dataKey}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ChartSimpleLine;
