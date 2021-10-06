import React from 'react';
import Button from "@material-ui/core/Button";

function Dnt_button(props) {
    return ( <div className={props.classes}>
    <img
      style={{ height: "100%" }}
      className={props.btn_icon}
      src="doughnut_color.png"
    ></img>
    <Button
      style={{ height: "100%" }}
      className={props.btn_oro}
    >
      {" "}
      <h3 className={props.fontEdit}>{props.text}</h3>
    </Button>
  </div>
    );
}

export default Dnt_button;