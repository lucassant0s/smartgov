import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  display: flex;
  flex-grow: 1;
  transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const InnerTitle = styled.span`
  padding: 12px 0;

  padding-left: 32px;
  width: 100%;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const IconButtonStyled = styled(IconButton)`
  top: 50%;
  left: 8px;
  position: absolute !important;

  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 48px;
  align-items: center;
`;

const ExpandHeader = styled.div`
    display: flex;
    padding: 0 24px 0 24px;
    min-height: 48px;
    transition: min-height 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: relative;
    align-items: center;
    vertical-align: middle;
    justify-content: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
}
`;

class CustomExpand extends Component {
  state = {
    expanded: this.props.expanded ? this.props.expanded : true
  };

  expandedCell = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  fixIncreaseLeftPosition = (leftPosition, children) => {
    const isFirstLoop = leftPosition === 0;
    if (!isFirstLoop) {
      return children ? leftPosition + 10 : leftPosition;
    }
    return leftPosition;
  };

  render() {
    return (
      <Wrapper>
        <ExpandHeader>
          {this.props.children && (
            <IconButtonStyled
              onClick={() => this.expandedCell()}
              style={{
                left: this.fixIncreaseLeftPosition(
                  this.props.leftPosition,
                  this.props.children
                ),
                transform: this.state.expanded
                  ? 'translateY(-50%) rotate(0deg)'
                  : 'translateY(-50%) rotate(180deg)'
              }}
            >
              <ExpandMoreIcon />
            </IconButtonStyled>
          )}
          <Title
            style={{
              paddingLeft: this.fixIncreaseLeftPosition(
                this.props.leftPosition,
                this.props.children
              )
            }}
          >
            <InnerTitle>{this.props.label}</InnerTitle>
          </Title>
        </ExpandHeader>
        <Collapse in={this.state.expanded} unmountOnExit>
          <div>{this.props.children}</div>
        </Collapse>
      </Wrapper>
    );
  }
}

export default CustomExpand;
