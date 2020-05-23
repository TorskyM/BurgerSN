import React from "react";

import classes from "./Modal.module.scss";
import Auxiliary from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Auxiliary>
  <Backdrop showModal={props.showModal} clicked={props.modalClosed}/>
    <div
      style={{
        transform: props.showModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.showModal ? "1" : "0"
        }}
      className={classes.Modal}>
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
