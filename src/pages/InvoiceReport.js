import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GridItem from "../components/GridItem";
import Card from "../components/Card";
import ChartSimpleLine from "../components/ChartSimpleLine";
import ChartStackedArea from "../components/ChartStackedArea";
import ChartBar from "../components/ChartBar";

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const dataDemands = () => {
  const arr = Array.from({ length: 5 }, (v, k) => {
    let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];
    return { year: `${months[k]} de 2018`, demand: randomNumber() };
  });
  return arr;
};

const dataEconomyAction = () => {
  const arr = Array.from({ length: 5 }, (v, k) => {
    return {
      year: 2000 + k,
      unit1: `${randomNumber()}.20`,
      unit2: `${randomNumber()}.40`,
      unit3: `${randomNumber()}.65`
    };
  });
  return arr;
};

const dataDemandConsumption = () => {
  const arr = Array.from({ length: 5 }, (v, k) => {
    return {
      demand: randomNumber(),
      time: randomNumber()
    };
  });
  return arr;
};

const dataReactiveConsumption = () => {
  const data = [
    {
      name: "Unidade 1",
      KiloWattsReais: 10,
      WattsReais: 20,
      teste: 12,
      ss: 2323
    },
    { name: "Unidade 2", KiloWattsReais: 20, WattsReais: 30 },
    { name: "Unidade 3", KiloWattsReais: 30, WattsReais: 60 },
    { name: "Unidade 4", KiloWattsReais: 40, WattsReais: 10 },
    { name: "Unidade 5", KiloWattsReais: 50, WattsReais: 40 },
    { name: "Unidade 6", KiloWattsReais: 60, WattsReais: 30 },
    { name: "Unidade 7", KiloWattsReais: 30, WattsReais: 20 }
  ];
  return data;
};

class InvoiceReport extends Component {
  state = {
    age: "",
    name: "hai"
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Ranking Faturamento X Economia
            </Typography>
          </GridItem>
        </Grid>

        <Grid container>
          <GridItem lg={4} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Filtro 1</InputLabel>
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

          <GridItem lg={4} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Filtro 2</InputLabel>
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

          <GridItem lg={4} sm={12} md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Filtro 3</InputLabel>
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
            <GridItem>
              <Typography variant="headline" paragraph>
                Ranking Indicadores
              </Typography>
            </GridItem>
          </Grid>
          <Grid container>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Demanda Máxima
                </Typography>
                <ChartSimpleLine
                  showLegend={false}
                  XAxis={{ dataKey: "year" }}
                  Line={{ dataKey: "demand" }}
                  data={dataDemands()}
                />
              </Card>
            </GridItem>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Demanda Ultrapassada
                </Typography>
                <ChartSimpleLine
                  showLegend={false}
                  XAxis={{ dataKey: "year" }}
                  Line={{ dataKey: "demand" }}
                  data={dataDemands()}
                />
              </Card>
            </GridItem>
          </Grid>
          <Grid container>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Ações Economicas
                </Typography>
                <ChartStackedArea
                  XAxis={{ dataKey: "year" }}
                  data={dataEconomyAction()}
                  areas={[
                    { name: "Unidade 1", dataKey: "unit1" },
                    { name: "Unidade 2", dataKey: "unit2" },
                    { name: "Unidade 3", dataKey: "unit3" }
                  ]}
                />
              </Card>
            </GridItem>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Consumo Reativo
                </Typography>
                <ChartBar data={dataReactiveConsumption()} />
              </Card>
            </GridItem>
          </Grid>

          <Grid container>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Variação de Demanda Consumidor A
                </Typography>
                <ChartSimpleLine
                  showLegend={false}
                  XAxis={{ dataKey: "demand", name: "Demanda" }}
                  Line={{ dataKey: "time", name: "Tempo" }}
                  data={dataDemandConsumption()}
                />
              </Card>
            </GridItem>
            <GridItem item xs={12} lg={6} sm={12} md={12}>
              <Card>
                <Typography variant="subheading" paragraph>
                  Variação de Demanda Consumidor B
                </Typography>
                <ChartSimpleLine
                  showLegend={false}
                  XAxis={{ dataKey: "demand", name: "Demanda" }}
                  Line={{ dataKey: "time", name: "Tempo" }}
                  data={dataDemandConsumption()}
                />
              </Card>
            </GridItem>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default InvoiceReport;
