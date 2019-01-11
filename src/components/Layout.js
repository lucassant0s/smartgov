import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InboxIcon from "@material-ui/icons/Inbox";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import SubHeader from "./SubHeader";

import HomeContainer from "../containers/HomeContainer";
// import EnergyConsumption from '../pages/EnergyConsumption';
// import EconomyModeContainer from '../containers/EconomyModeContainer';
// import InvoiceReport from '../pages/InvoiceReport';
// import Configurations from '../pages/Configurations';
import Login from "../pages/Login";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {
    backgroundColor: "white",
    /* position: "absolute", */
    boxShadow: "none",
    borderBottom: "1px solid #E8E8E8",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    fill: "white"
  },
  drawerPaper: {
    backgroundColor: "#2d3537",
    border: 0,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  toolbar: {
    minHeight: 135
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            className={classNames(
              classes.appBar,
              this.state.open && classes.appBarShift
            )}
            style={{ boxShadow: 0 }}
          >
            <Toolbar style={{ background: "#202427" }}>
              <IconButton
                color="default"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
                style={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              {this.props.header}
            </Toolbar>
            {/*<SubHeader />*/}
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {this.props.sidebar}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              style={{ backgroundColor: "black" }}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {this.props.sidebar}
            </Drawer>
          </Hidden>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            {this.props.children}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Layout);
