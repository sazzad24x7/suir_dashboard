import React, { Component,Fragment } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import './App.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
      <Grid>
        <Grid.Column width={1} style={{height:"100vh", /*overflow:'auto',*/borderRight:"1px solid lightblue"}}>
          <p>left sidebar</p>
        </Grid.Column>
        <Grid.Column width={15} style={{ backgroundColor:'lightgray', paddingLeft:'0'}}>
          <Grid.Row style={{height:"50px", backgroundColor:"white", borderBottom:"1px solid lightblue"}}><h1>Menu</h1></Grid.Row>
          <Grid.Row style={{height:"50px", backgroundColor:"white",borderBottom:"1px solid lightblue"}}><h1>Menu 2</h1></Grid.Row>
          <Grid.Row style={{padding:'10px 10px 0 10px'}}>
             <Grid columns={4}>
              <Grid.Column>
                <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
              <Grid.Column>
              <Segment style={{minHeight:'100px'}}></Segment>
              </Grid.Column>
             </Grid>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      </Fragment>
    );
  }
}

export default Home;
