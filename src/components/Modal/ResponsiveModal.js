import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import styled from "styled-components";
// import CustomExpand from '../components/CustomExpand';

const CustomHeader = styled.div`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 4px 56px 4px 24px;
  font-size: 0.75rem;
  font-weight: 500;
`;

class ResponsiveModal extends React.Component {
  render() {
    const { fullScreen, classes } = this.props;

    return this.props.isOpen ? (
      <div>
        <Dialog
          maxWidth={"md"}
          fullScreen={fullScreen}
          open={this.props.isOpen}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {this.props.dialogTitle}
          </DialogTitle>
          <DialogContent>{this.props.children}</DialogContent>
          <DialogActions>{this.props.dialogActions}</DialogActions>
        </Dialog>
      </div>
    ) : null;
  }
}

ResponsiveModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveModal);
