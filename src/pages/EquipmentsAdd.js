import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import { State, Value } from "react-powerplug";
import { Rifm } from "rifm";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import CustomExpand from "../components/CustomExpand";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { withFormik, Field, Form, FastField } from "formik";
import ResponsiveModal from "../components/Modal/ResponsiveModal";
import GridItem from "../components/GridItem";
import { timeFormatSym } from "../format";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const EquipmentsAdd = ({ onRequestClose, ...otherProps }) => (
  <ResponsiveModal
    isOpen
    onRequestClose
    dialogTitle={"Novo Equipamento"}
    dialogActions={
      <Fragment>
        <Button onClick={onRequestClose} color="primary">
          Cancelar
        </Button>
        <Button color="primary" autoFocus>
          Salvar
        </Button>
      </Fragment>
    }
    {...otherProps}
  >
    <div>
      <div>
        <span style={{ paddingRight: 40 }}>
          <form>
            <FormControl>
              <InputLabel htmlFor="age-simple">Grupo</InputLabel>
              <State initial={{ group: "" }}>
                {({ state, setState }) => (
                  <Select
                    style={{ minWidth: 150 }}
                    value={state.group}
                    onChange={event => setState({ group: event.target.value })}
                    inputProps={{
                      name: "group",
                      id: "group"
                    }}
                  >
                    <MenuItem value="">
                      <em>Nenhum</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                )}
              </State>
              <State initial={{ name: "" }}>
                {({ state, setState }) => (
                  <TextField
                    id="name"
                    label="Equipamento"
                    value={state.name}
                    onChange={event => setState({ name: event.target.value })}
                    margin="normal"
                  />
                )}
              </State>
            </FormControl>
          </form>
        </span>
      </div>
    </div>
  </ResponsiveModal>
);

export default withMobileDialog()(EquipmentsAdd);
