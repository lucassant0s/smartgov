import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

import SelectContract from "./SelectContract";
import SelectConsumer from "./SelectConsumer";
import withRoot from "../withRoot";

const Wrapper = styled.div`
  border-top: 1px solid #414748;
`;

class SubHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Toolbar style={{ background: "#202427" }}>
          <SelectContract />
          <SelectConsumer />
        </Toolbar>
      </Wrapper>
    );
  }
}

export default withRoot(SubHeader);
