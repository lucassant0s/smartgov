import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToApp from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import { graphql, Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import Alerts from './Alerts';
import IconAccount from './Icons/IconAccount';
import IconAlert from './Icons/IconAlert';
import MenuButton from './MenuButton';
import SelectUnit from './SelectUnit';
import withRoot from '../withRoot';
import { logout } from '../auth';
import { GET_ALERTS, GET_USER_ME } from '../graphql/queries';

const styles = theme => ({
  menuButton: {
    marginLeft: '-12',
    marginRight: '20'
  }
});

const SelectUnitWrap = styled.div`
  flex: 1;
  margin-right: auto;
`;

const UserEmail = styled.p`
  margin: 0;
  display: block;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.875rem;
  font-weight: 400;
`;

class Header extends Component {
  handleCloseLogout() {
    logout();
    // TODO RESET STORE
    this.props.history.push('/login');
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <SelectUnitWrap>
          {/*<SelectUnit />*/}
        </SelectUnitWrap>

        {/*<Query query={GET_ALERTS}>
          {({ loading, error, data }) => {
              return (
                <MenuButton badgeContent="" iconType={IconAlert}>
                  <Alerts alerts="" />
                </MenuButton>
              );
          }}
        </Query>*/}

        <MenuButton iconType={IconAccount}>
          {this.props.user && (
            <ListItem button>
              <div>
                <span>{this.props.user.name}</span>
                <UserEmail>{this.props.user.email}</UserEmail>
              </div>
            </ListItem>
          )}

          <Divider />
          <ListItem button onClick={() => this.handleCloseLogout()}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            Sair
          </ListItem>
        </MenuButton>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withRoot(withStyles(styles)(Header)));
