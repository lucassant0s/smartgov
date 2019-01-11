import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { graphql, Query } from "react-apollo";
import { GET_UNITS } from "../graphql/queries";

import withRoot from "../withRoot";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SelectPlace extends Component {
  state = {
    unit: parseInt(localStorage.getItem("filterUnit")) || ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      localStorage.setItem("filterUnit", event.target.value);
      document.location.reload(true);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Query query={GET_UNITS}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }
          if (error) return <p>Error</p>;
          return (
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={{ color: "white" }} htmlFor="age-simple">
                  Unidade
                </InputLabel>
                <Select
                  style={{ color: "white" }}
                  value={this.state.unit}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>Todas</em>
                  </MenuItem>
                  {data.units.map(unit => (
                    <MenuItem key={unit.id} value={unit.id}>
                      {unit.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </form>
          );
        }}
      </Query>
    );
  }
}

SelectPlace.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(SelectPlace));
