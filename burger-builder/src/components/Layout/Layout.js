import React from 'react';

import classes from './Layout.module.scss'
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = props => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main
      className={classes.Content}
    >{props.children}</main>
  </Auxiliary>
);

export default layout;