import React from 'react';
import { ModalConsumer } from './ModalContext';

const FilterRoot = () => (
  <FilterConsumer>
    {({ component: Component, props, hideModal }) =>
      Component ? <Component {...props} onRequestClose={hideModal} /> : null
    }
  </FilterConsumer>
);

export default FilterRoot;
