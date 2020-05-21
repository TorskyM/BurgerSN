import React from 'react';

import classes from './Layout.module.scss'
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
  <Auxiliary>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Auxiliary>
);

export default layout;