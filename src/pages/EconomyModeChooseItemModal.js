import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components';
import { graphql, Query } from 'react-apollo';
import CustomExpand from '../components/CustomExpand';
import ResponsiveModal from '../components/Modal/ResponsiveModal';
import Loading from '../components/Loading';
import { GET_MODULES } from '../graphql/queries';
import customClientApi from '../customClient';

const WrapperLabel = styled.div`
  display: flex;
  align-items: center;
  min-height: 38px;
`;

const WrapperButton = styled.div`
  display: none;
  ${WrapperLabel}:hover & {
    display: block;
  }
`;

const RenderItems = ({ data, handleClickChooseItem, leftPosition = 0 }) => {
  return (
    <div style={{ width: 700 }}>
      {data.map(item => (
        <CustomExpand
          key={item.id}
          leftPosition={leftPosition}
          label={
            <WrapperLabel onClick={() => handleClickChooseItem({ item })}>
              <div style={{ flex: 1, marginRight: "auto" }}> {item.floor !== undefined ? item.floor + ' / ' : ''} {item.name}</div>
              <WrapperButton>
                <Button variant="outlined" color="primary">
                  Selecionar
                </Button>
              </WrapperButton>
            </WrapperLabel>
          }
        >
          {item.children && (
            <RenderItems
              key={item.id}
              data={item.children}
              leftPosition={leftPosition + 25}
              handleClickChooseItem={handleClickChooseItem}
            />
          )}
        </CustomExpand>
      ))}
    </div>
  );
};

const EconomyModeChooseItemModal = ({
  onRequestClose,
  otherProps,
  data,
  activeStep,
  handleClickChooseItem
}) => {
  return (
    <ResponsiveModal
      isOpen
      onRequestClose={onRequestClose}
      dialogTitle={'Escolha onde quer aplicar o modo economia'}
      dialogActions={
        <Fragment>
          <Button onClick={onRequestClose} color="primary">
            Cancelar
          </Button>
        </Fragment>
      }
      {...otherProps}
    >
      <div>
        <Query query={GET_MODULES} client={customClientApi}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) return <p>Error</p>;
            return (
              <RenderItems
                data={data.readAllEquipments}
                handleClickChooseItem={handleClickChooseItem}
              />
            );
          }}
        </Query>
      </div>
    </ResponsiveModal>
  );
};

export default withMobileDialog()(EconomyModeChooseItemModal);
