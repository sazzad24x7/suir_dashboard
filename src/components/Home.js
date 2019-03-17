import React, { Component,Fragment } from 'react';
import {Grid} from 'semantic-ui-react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
      <Grid>
        <Grid.Column width={4} style={{height:'800px', overflow:'auto', backgroundColor:'red'}}>
          <h1>Left Coloum</h1>
        </Grid.Column>
        <Grid.Column width={12} style={{ backgroundColor:'purple'}}>
          <Grid.Row><h1>Menu</h1></Grid.Row>
          <Grid.Row><h1>Menu 2</h1></Grid.Row>
        </Grid.Column>
      </Grid>
      </Fragment>
    );
  }
}

export default Home;
