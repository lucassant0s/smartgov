import React, { Component } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";

import withRoot from "../withRoot";
import IconHome from "./Icons/IconHome";
import IconEnergyConsumption from "./Icons/IconEnergyConsumption";
import IconEconomyMode from "./Icons/IconEconomyMode";
import IconInvoiceReport from "./Icons/IconInvoiceReport";
import IconConfiguration from "./Icons/IconConfiguration";
import { COLOR_RED } from "../constants";

const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  & svg path {
    fill: ${COLOR_RED};
  }
  text-decoration: none;
  &.${activeClassName} li,
  &.${activeClassName} > div,
  &.${activeClassName} {
    color: #f0f0f0 !important;
    background: ${COLOR_RED};
    text-decoration: none;
  }
  &.${activeClassName} svg path {
    fill: #f0f0f0;
  }
`;

const ListItemS = styled(ListItem)`
  &:hover {
    background: "red";
  }
`;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  title: {
    color: "#f0f0f0"
  },
  toolbar: {
    backgroundColor: "white"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  icon: {
    color: "yellow"
  }
});

class Sidebar extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className="sidenav">
        <div className={classes.toolbar}>
          <Toolbar style={{ background: "#2d3537" }}>
            <Typography variant="title" className={classes.title}>
              Smart <span style={{ color: "#f34f37" }}>GOV</span>
            </Typography>
          </Toolbar>
        </div>
        <List>
          <StyledNavLink exact to="/">
            <ListItemS button>
              <ListItemIcon>
                <IconHome className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Home
                  </Typography>
                }
              />
            </ListItemS>
          </StyledNavLink>
          <StyledNavLink exact to="/energy-consumption">
            <ListItem button>
              <ListItemIcon>
                <IconEnergyConsumption />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Consumo Energético
                  </Typography>
                }
              />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink exact to="/equipments">
            <ListItem button>
              <ListItemIcon>
                <IconEnergyConsumption />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Equipamentos
                  </Typography>
                }
              />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink exact to="/economy-mode">
            <ListItem button>
              <ListItemIcon>
                <IconEconomyMode />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Modo Economia
                  </Typography>
                }
              />
            </ListItem>
          </StyledNavLink>
          <StyledNavLink exact to="/invoice-report">
            <ListItem button>
              <ListItemIcon>
                <IconInvoiceReport />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Relatório Fatura
                  </Typography>
                }
              />
            </ListItem>
          </StyledNavLink>
          {this.props.user &&
            this.props.user.role === "ADMIN" && (
              <StyledNavLink exact to="/configurations">
                <ListItem button>
                  <ListItemIcon>
                    <IconConfiguration />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography type="body2" style={{ color: "#FFFFFF" }}>
                        Configurações
                      </Typography>
                    }
                  />
                </ListItem>
              </StyledNavLink>
            )}
        </List>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRoot(
  withStyles(styles, { withTheme: true })(withRouter(Sidebar))
);
