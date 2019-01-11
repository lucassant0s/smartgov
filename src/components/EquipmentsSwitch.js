import React from "react";
import Switch from "@material-ui/core/Switch";
import { State } from "react-powerplug";
import { Mutation } from "react-apollo";
import { EQUIPMENT_TOGGLE } from "../graphql/mutations";

const EquipmentsSwitch = ({ item }) => (
  <Mutation mutation={EQUIPMENT_TOGGLE}>
    {equipmentToggle => (
      <State initial={{ isActive: item.active }}>
        {({ state, setState }) => (
          <Switch
            checked={state.isActive}
            onChange={() => {
              setState({ isActive: !state.isActive });
              equipmentToggle({
                variables: {
                  id: item.id,
                  isActive: !state.isActive
                }
              });
            }}
            value="on"
            color="primary"
          />
        )}
      </State>
    )}
  </Mutation>
);

export default EquipmentsSwitch;
