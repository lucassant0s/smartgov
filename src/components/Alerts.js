import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { graphql, Query } from "react-apollo";
import { GET_ALERTS } from "../graphql/queries";
import {
  ALERT_WARNING_COLOR,
  ALERT_DANGER_COLOR,
  ALERT_INFORMATIONS_COLOR,
  ALERT_DEFAULT_COLOR
} from "../constants";

import Loading from "./Loading";
import GridItem from "./GridItem";

const Wrapper = styled.span`
  height: 800px;
  max-height: 800px;
  font-size: 14px;
`;

const Time = styled.div`
  margin: 0;
  display: block;
  color: rgba(0, 0, 0, 0.38);
  font-weight: 400;
  padding-top: 5px;
`;

const alertColor = {
  inform: ALERT_INFORMATIONS_COLOR,
  danger: ALERT_DANGER_COLOR,
  warning: ALERT_WARNING_COLOR,
  default: ALERT_DEFAULT_COLOR
};

class Alerts extends Component {
  renderAlert(alert, index) {
    return (
      <React.Fragment key={index}>
        <ListItem button style={{ background: alertColor[alert.type] }}>
          <div>
            <div style={{ fontWeight: "bold" }}>{alert.title}</div>
            <div>{alert.message}</div>
            <Time>04:00</Time>
          </div>
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Grid container>
            <GridItem>
              <div
                style={{
                  color: "#9a9a9a",
                  paddingLeft: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                  fontSize: 12,
                  textTransform: "Uppercase"
                }}
              >
                Notificações
              </div>
            </GridItem>
          </Grid>
          <Divider />
          <Query query={GET_ALERTS}>
            {({ loading, error, data }) => {
              if (loading) {
                return <Loading />;
              }
              return (
                <React.Fragment>
                  {data.alerts.map((alert, index) =>
                    this.renderAlert(alert, index)
                  )}
                </React.Fragment>
              );
            }}
          </Query>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Alerts;
