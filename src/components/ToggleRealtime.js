import React from "react";
import Switch from "@material-ui/core/Switch";
import { State } from "react-powerplug";

const ToggleRealtime = () => (
  <State initial={{ isRealtime: false }}>
    {({ state, setState }) => (
      <Switch
        checked={state.isRealtime}
        onChange={() => {
          setState({ isRealtime: !state.isRealtime });
        }}
        value="on"
        color="primary"
      />
    )}
  </State>
);

export default ToggleRealtime;
