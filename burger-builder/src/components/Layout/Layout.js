import React from "react";

import Auxiliary from "../../hoc/Auxiliary";
import classes from './Layout.scss'

const layout = (props) => (
  <Auxiliary>
    <div>ToolBar, SideDrawer, Backdrop</div>
    
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;