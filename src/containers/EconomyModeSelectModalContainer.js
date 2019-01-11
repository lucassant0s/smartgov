import React, { Component } from 'react';
import EconomyModeScheduleModal from '../pages/EconomyModeScheduleModal';
import EconomyModeChooseItemModal from '../pages/EconomyModeChooseItemModal';

class EconomyModeSelectModalContainer extends Component {
  state = {
    activeStep: 0,
    selectedItem: {}
  };

  handleClickChooseItem = ({ item }) => {
    this.setState({
      activeStep: 1,
      selectedItem: item
    });
  };

  handleBack = () => {
    alert('back')
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleSubmit = () => {
    alert('aqui');
  }

  render() {
    const { activeStep, selectedItem } = this.state;
    const { onRequestClose, modules } = this.props;

    return activeStep === 0 ? (
      <EconomyModeChooseItemModal
        data={modules}
        activeStep={activeStep}
        onRequestClose={onRequestClose}
        handleClickChooseItem={this.handleClickChooseItem}
      />
    ) : (
      <EconomyModeScheduleModal
        data={modules}
        activeStep={activeStep}
        handleClickChooseItem={this.handleClickChooseItem}
        handleSubmit={this.handleSubmit}
        onRequestClose={onRequestClose}
        handleBack={this.handleBack}
        selectedItem={selectedItem}
      />
    );
  }
}

export default EconomyModeSelectModalContainer;
