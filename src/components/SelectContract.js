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
import { GET_CONTRACTS } from "../graphql/queries";
import withRoot from "../withRoot";

const styles = theme => ({
  root: {
    float: "left"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SelectContract extends Component {
  state = {
    contract: parseInt(localStorage.getItem("filterContract")) || ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      localStorage.setItem("filterContract", event.target.value);
      document.location.reload(true);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Query query={GET_CONTRACTS}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }
          if (error) return <p>Error</p>;
          return (
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                <InputLabel style={{ color: "white" }} htmlFor="contract">
                  Contrato
                </InputLabel>
                <Select
                  style={{ color: "white" }}
                  value={this.state.contract}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "contract",
                    id: "contract"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  {data.contracts.map(contract => (
                    <MenuItem key={contract.id} value={contract.id}>
                      {contract.name}
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

SelectContract.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(SelectContract));
