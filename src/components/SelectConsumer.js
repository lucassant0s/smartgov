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
import { GET_CONSUMERS } from "../graphql/queries";
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

class SelectConsumer extends Component {
  state = {
    consumer: parseInt(localStorage.getItem("filterConsumer")) || ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      localStorage.setItem("filterConsumer", event.target.value);
      document.location.reload(true);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Query query={GET_CONSUMERS}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }
          if (error) return <p>Error</p>;
          return (
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={{ color: "white" }} htmlFor="consumer">
                  Consumidor
                </InputLabel>
                <Select
                  style={{ color: "white" }}
                  value={this.state.consumer}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "consumer",
                    id: "consumer"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {data.consumers.map(consumer => (
                    <MenuItem key={consumer.id} value={consumer.id}>
                      {consumer.name}
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

const withFilter = () => {};

export default withRoot(withStyles(styles)(SelectConsumer));
