import React, { Component, Fragment } from "react";
import { Grid, Segment, Menu, Input, Icon, Label } from "semantic-ui-react";
import "./App.css";

class Home extends Component {
  state = {
    activeItem: "home"
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Fragment>
        <Grid>
          <Grid.Column
            width={1}
            style={{
              overflow:'auto',
              height: "100vh",
              borderRight: "1px solid rgba(34,36,38,.15)"
            }}
          >
            <Menu pointing secondary vertical>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
          </Grid.Column>
          {/* Right portion */}
          <Grid.Column width={15} style={{ paddingLeft: "0" }}>
            {/* Menu 1 start */}
            <Grid.Row
              style={{
                backgroundColor: "white"
              }}
            >
              <Menu
                secondary
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  borderBottom: "1px solid rgba(34,36,38,.15)"
                }}
              >
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Input icon="search" placeholder="Search..." />
                  </Menu.Item>
                  <Menu.Item
                    name="logout"
                    active={activeItem === "logout"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu>
            </Grid.Row>
            {/*Menu 1 End */}
            {/* Menu 2 start */}
            <Grid.Row
              style={{
                backgroundColor: "white",
                boxShadow: "0 1px 2px 0 rgba(34,36,38,.15)"
              }}
            >
              <Menu pointing secondary>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item
                    name="logout"
                    active={activeItem === "logout"}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
              </Menu>
            </Grid.Row>

            {/* Menu 2 End */}
            {/* Child Structure start */}
            <Grid.Row style={{ padding: "10px 10px 0 10px" }}>
              <Grid columns={4}>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ minHeight: "100px" }} />
                </Grid.Column>
              </Grid>
            </Grid.Row>
            {/* Child Structure End */}
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default Home;
