import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import Card from "../components/Card";
import GridItem from "../components/GridItem";
import Layout from "../components/Layout";
import {
  COLOR_DARK_GRAY,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_RED
} from "../constants";

class EnergyConsumption extends Component {
  state = {
    age: "",
    name: "hai"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  renderChart() {
    const data = [
    ];

    return (
      <div style={{ height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
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
  }

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Consumo Energético
            </Typography>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem lg={3} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Unidade</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange("age")}
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem lg={3} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Departamento</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange("age")}
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem lg={3} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Pavimento</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange("age")}
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem lg={3} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Módulo</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange("age")}
                inputProps={{
                  name: "age",
                  id: "age-native-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
        <div style={{ paddingTop: 40 }}>
          <Grid container>
            <GridItem item xs={12} sm={12} md={12}>
              <Card>{this.renderChart()}</Card>
            </GridItem>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default EnergyConsumption;
