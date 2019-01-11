import React, { Component, createContext } from 'react';

const FilterContext = createContext({
  showModal: () => {},
  hideModal: () => {}
});

export class FilterProvider extends Component {
  state = {
    unitFilter: localStorage.getItem('unitFilter') || '',
    contractFilter: localStorage.getItem('contractFilter') || '',
    consumerFilter: localStorage.getItem('consumerFilter') || 'asdads',
    setUnitFilter: id => {
      localStorage.setItem('unitFilter', id);
      this.setState({
        unitFilter: id
      });
    },
    setContractFilter: id => {
      localStorage.setItem('contractFilter', id);
      this.setState({
        contractFilter: id
      });
    },
    setConsumerFilter: id => {
      localStorage.setItem('consumerFilter', id);
      this.setState({
        consumerFilter: id
      });
    }
  };

  render() {
    return (
      <FilterContext.Provider value={this.state}>
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const FilterConsumer = FilterContext.Consumer;
