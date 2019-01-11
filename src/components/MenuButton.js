import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

class MenuButton extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;
    const { badgeContent } = this.props;

    return (
      <React.Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar-account' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
        >
          {badgeContent ? (
            <Badge badgeContent={badgeContent} color="primary">
              <Wrapper />
            </Badge>
          ) : (
            <Wrapper />
          )}
        </IconButton>

        <Menu
          id="menu-appbar-account"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              width: 300
            }
          }}
        >
          {this.props.children}
        </Menu>
      </React.Fragment>
    );
  }
}

export default MenuButton;
