import React from "react";
import MUICard from "@material-ui/core/Card";
import MUICardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%"
  }
});

const Card = ({ style, children }) => (
  <div style={{ paddingBottom: 30 }}>
    <MUICard style={{ ...styles().wrapper, ...style }}>
      <MUICardContent>
        {React.isValidElement(children) ? children : <div>{children}</div>}
      </MUICardContent>
    </MUICard>
  </div>
);

export default withStyles(styles)(Card);
