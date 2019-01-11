import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  WithRouter
} from "react-router-dom";
import { graphql, Query } from "react-apollo";
import styled from "styled-components";
import Layout from "./components/Layout";
import HomeContainer from "./containers/HomeContainer";
import Equipments from "./pages/Equipments";
import EnergyConsumption from "./pages/EnergyConsumption";
import EconomyMode from "./pages/EconomyMode";
import InvoiceReport from "./pages/InvoiceReport";
import Configurations from "./pages/Configurations";
import Login from "./pages/Login";
import { isAuthenticated } from "./auth";
import { GET_USER_ME } from "./graphql/queries";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import customClientApi from './customClient';

const Wrapper = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Query query={GET_USER_ME} client={customClientApi}>
          {({ loading, error, data }) => {
            console.log('data', data);
            if (loading) {
              return (
                <Wrapper>
                  <Loading />
                </Wrapper>
              );
            }
            return (
              <Layout
                header={<Header user={data.user} />}
                sidebar={<Sidebar user={data.user} />}
              >
                <Component {...props} />
              </Layout>
            );
          }}
        </Query>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/" exact component={HomeContainer} />
      <PrivateRoute
        path="/energy-consumption"
        exact
        component={EnergyConsumption}
      />
      <PrivateRoute path="/equipments" exact component={Equipments} />
      <PrivateRoute path="/economy-mode" exact component={EconomyMode} />
      <PrivateRoute path="/invoice-report" exact component={InvoiceReport} />
      <PrivateRoute path="/configurations" exact component={Configurations} />
    </Switch>
  </Router>
);

export default Routes;
