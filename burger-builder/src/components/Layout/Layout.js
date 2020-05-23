import React, { Component } from "react";

import classes from "./Layout.module.scss";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerOpenHandler = _ => {
    this.setState({showSideDrawer: true});
  }

  sideDrawerClosedHandler = _ => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Auxiliary>
        <Toolbar toggleSideDrawer={this.sideDrawerOpenHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  }
}

export default Layout;
