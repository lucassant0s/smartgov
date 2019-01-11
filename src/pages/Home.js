import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
import { graphql, Query } from "react-apollo";
import GridItem from "../components/GridItem";
import Card from "../components/Card";
import IconProfits from "../components/Icons/IconProfits";
import IconMoney from "../components/Icons/IconMoney";
import IconUsersAdded from "../components/Icons/IconUsersAdded";
import Loading from "../components/Loading";
import { GET_MAINBOX } from "../graphql/queries";
import { FilterConsumer } from "../components/FilterContext";
import ToggleRealtime from "../components/ToggleRealtime";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {
  COLOR_DARK_GRAY,
  COLOR_GREEN,
  COLOR_BLUE,
  COLOR_RED
} from "../constants";

const styles = theme => ({
  card: {
    display: "flex",
    padding: 10,
    alignItems: "center"
  },
  cardIcon: {
    flexGrow: 1
  },
  cardTitle: {
    color: "white",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardDescription: {
    color: "#3C4858",
    marginTop: "0px",
    minHeight: "auto",
    fontSize: "33px",
    fontWeight: "300",
    marginBottom: "3px",
    textDecoration: "none"
  },
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: `${theme.spacing.unit}px 0`,
    background: theme.palette.background.default
  }
});

class Home extends Component {
  state = {
    alignment: "left",
    formats: ["bold"]
  };

  handleFormat = (event, formats) => this.setState({ formats });

  handleAlignment = (event, alignment) => this.setState({ alignment });

  renderIcon(icon) {
    const iconType = {
      IconProfits,
      IconMoney,
      IconUsersAdded
    };
    const $component = iconType[icon];
    return <$component />;
  }

  renderMainBox({ data, classes }) {
    return (
      <Grid container>
        {data.mainbox.map((mainBox, index) => (
          <GridItem key={index} item xs={12} sm={6} md={4}>
            <Card>
              <div className={classes.card}>
                <div className={classes.cardIcon}>
                  {this.renderIcon(mainBox.icon)}
                </div>
                <div>
                  <p className={classes.cardTitle}>{mainBox.title}</p>
                  <h3 className={classes.cardDescription}>
                    {mainBox.pre} {mainBox.value} {mainBox.pos}
                  </h3>
                </div>
              </div>
            </Card>
          </GridItem>
        ))}
      </Grid>
    );
  }

  renderAlternative({ classes }) {
    const data = [
      { id: 1, title: "Demanda de Ultrapassagem", value: 12, pos: "%" },
      { id: 2, title: "Demanda Reativa", value: "7.890,00", pre: "R$" },
      { id: 3, title: "Grupo Tarifário", value: 9, pos: "%" },
      { id: 4, title: "Fator de Carga", value: 0.33 },
      { id: 5, title: "Dividas Evitáveis", value: "3.445,00", pre: "R$" },
      {
        id: 6,
        title: "Ranking de Consumo",
      },
      { id: 7, title: "Preço Médio da Energia", value: "0,30", pre: "R$" },
      { id: 8, title: "Balançeamento de Demanda", value: 38, pos: "%" }
    ];

    const colors = {
      red: "#ff4b39ff",
      blue: "#0099deff",
      green: "#00cc66ff",
      gray: "#2c3437ff"
    };

    return (
      <Grid container>
        {data.map((mainBox, index) => (
          <GridItem key={index} item xs={12} sm={6} md={3}>
            <div
              style={{
                borderRadius: 10,
                // borderTopRightRadius: 70,
                // borderBottomRightRadius: 70,
                backgroundColor: Object.values(colors)[Math.ceil(index % 4)],
                marginBottom: 30,
                padding: 10
              }}
            >
              <div className={classes.card} style={{ minHeight: 90 }}>
                <div>
                  <p className={classes.cardTitle} style={{ minHeight: 30 }}>
                    {mainBox.title}
                  </p>
                  {mainBox.value ? (
                    <h3
                      className={classes.cardDescription}
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 26,
                        fontWeight: 400,
                        color: "white"
                      }}
                    >
                      {mainBox.pre} {mainBox.value} {mainBox.pos}
                    </h3>
                  ) : (
                    <BarChart width={150} height={40} data={mainBox.chart}>
                      <Bar dataKey="uv" fill="white" />
                    </BarChart>
                  )}
                </div>
              </div>
            </div>
          </GridItem>
        ))}
      </Grid>
    );
  }

  renderChart(props) {
    const data = [

    ];

    return (
      <React.Fragment>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div className={props.classes.toggleContainer}>
              <ToggleButtonGroup value="" exclusive>
                <ToggleButton value="left">Último mês</ToggleButton>
                <ToggleButton value="center">Último Ano</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          <div>
            <ToggleRealtime />
          </div>
        </div>
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
      </React.Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    const { alignment, formats } = this.state;

    return (
      <div>
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Página inicial do Smart GOV
            </Typography>
          </GridItem>
        </Grid>
        {/*<Grid container>
          <Query query={GET_MAINBOX}>
            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <Grid>
                    <GridItem>
                      <Loading />
                    </GridItem>
                  </Grid>
                );
              }
              if (error) return <p>Error</p>;

              return (
                <React.Fragment>
              {this.renderAlternative({ classes })}*/}
                  {/* {this.renderMainBox({ data, classes })} */}
                {/*</React.Fragment>
              );
            }}
          </Query>
          </Grid>*/}
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Ranking Faturamento X Economia
            </Typography>
          </GridItem>
        </Grid>

        <Grid container>
          <GridItem item xs={12} sm={12} md={12}>
            <Card>{this.renderChart(this.props)}</Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
