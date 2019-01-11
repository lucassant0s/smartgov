import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import GridItem from "../components/GridItem";
import EconomyModeSelectModalContainer from "../containers/EconomyModeSelectModalContainer";
import { ModalConsumer } from "../components/Modal/ModalContext";
import Layout from "../components/Layout";

const EconomyItem = styled.div`
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

class EconomyMode extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <GridItem>
            <Typography variant="headline" paragraph>
              Modo Economia
              <ModalConsumer>
                {({ showModal }) => (
                  <Fragment>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: 20 }}
                      onClick={() => showModal(EconomyModeSelectModalContainer)}
                    >
                      Adicionar
                    </Button>
                  </Fragment>
                )}
              </ModalConsumer>
            </Typography>
          </GridItem>
        </Grid>
        <Grid container>
          <GridItem item xs={12} sm={12} md={12}>
            <Paper>
              <ModalConsumer>
                {({ showModal }) => (
                  <Fragment>
                    <EconomyItem
                    >
                      <div style={{ flex: 1, marginRight: "auto" }}>SetorB</div>
                      <IconButton aria-label="Edit">
                        <EditIcon onClick={() => showModal(EconomyModeSelectModalContainer)} />
                      </IconButton>
                      <IconButton aria-label="Delete">
                        <DeleteIcon onClick={() => console.log("Delete")} />
                      </IconButton>
                    </EconomyItem>
                  </Fragment>
                )}
              </ModalConsumer>
            </Paper>
          </GridItem>
        </Grid>
        {/* <EconomyModeSelectModal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal} 
        />*/}
      </React.Fragment>
    );
  }
}

export default EconomyMode;
