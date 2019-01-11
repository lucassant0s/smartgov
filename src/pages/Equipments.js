import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { graphql, Query } from "react-apollo";

import CustomExpand from "../components/CustomExpand";
import GridItem from "../components/GridItem";
import EquipmentsAdd from "../pages/EquipmentsAdd";
import { ModalConsumer } from "../components/Modal/ModalContext";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import { GET_MODULES } from "../graphql/queries";
import EquipmentsSwitch from "../components/EquipmentsSwitch";
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

const EquipmentItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding: 15px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;

const RenderItems = ({
  data,
  handleClickChooseItem,
  leftPosition = 0,
  showModal,
  handleChange,
  state
}) => {
  return (
    <div>
      {data.map(item => (
        <CustomExpand
          key={item.id}
          leftPosition={leftPosition}
          label={
            <WrapperLabel onClick={() => handleClickChooseItem({ item })}>
              <div style={{ flex: 1, marginRight: "auto" }}> {item.floor !== undefined ? item.floor + 'º Andar / ' : ''} {item.name}</div>
              <div style={{ paddingRight: 50 }}>
                <EquipmentsSwitch item={item} />
              </div>
              <IconButton aria-label="Edit">
                <EditIcon
                  onClick={() => showModal(EquipmentsAdd({ teste: "teste" }))}
                />
              </IconButton>
              <IconButton aria-label="Delete">
                <DeleteIcon onClick={() => console.log("Delete")} />
              </IconButton>
            </WrapperLabel>
          }
        >
          {item.children && (
            <RenderItems
              key={item.id}
              data={item.children}
              leftPosition={leftPosition + 25}
              handleClickChooseItem={handleClickChooseItem}
              showModal={showModal}
              handleChange={handleChange}
              state={state}
            />
          )}
        </CustomExpand>
      ))}
    </div>
  );
};

class Equipments extends Component {
  state = {
    data: []
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleClickChooseItem = () => {
    console.log("asdasd");
  };

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Equipamentos
              {/*<ModalConsumer>
                {({ showModal }) => (
                  <Fragment>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: 20 }}
                      onClick={() => showModal(EquipmentsAdd)}
                    >
                      Adicionar
                    </Button>
                  </Fragment>
                )}
                </ModalConsumer>*/}
            </Typography>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem item xs={12} sm={12} md={12}>
            <Paper>
              <ModalConsumer>
                {({ showModal }) => (
                  <Fragment>
                    <Query query={GET_MODULES} client={customClientApi}>
                      {({ loading, error, data }) => {
                        if (loading) {
                          return <Loading />;
                        }
                        if (error) return <p>Error</p>;
                        return (
                          <RenderItems
                            data={data.readAllEquipments}
                            showModal={showModal}
                            state={this.state}
                            handleChange={this.handleChange}
                            handleClickChooseItem={() =>
                              this.handleClickChooseItem()
                            }
                          />
                        );
                      }}
                    </Query>
                    {/* <EquipmentItem>
                      <div style={{ flex: 1, marginRight: "auto" }}>SetorB</div>
                      <IconButton aria-label="Edit">
                        <EditIcon
                          onClick={() => showModal(EquipmentsModalContainer)}
                        />
                      </IconButton>
                      <IconButton aria-label="Delete">
                        <DeleteIcon onClick={() => console.log("Delete")} />
                      </IconButton>
                    </EquipmentItem> */}
                  </Fragment>
                )}
              </ModalConsumer>
            </Paper>
          </GridItem>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Equipments;
