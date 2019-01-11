import React from 'react';
import Spinner from 'react-spinkit';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import GridItem from './GridItem';

const Loading = () => (
  <div style={{ textAlign: 'center' }}>
    <Grid>
      <GridItem>
        <CircularProgress />
      </GridItem>
    </Grid>
  </div>
);

export default Loading;
