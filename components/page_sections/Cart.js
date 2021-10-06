import React, { useState, useEffect, forwardRef, useRef } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";

import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import Paper from "@material-ui/core/Paper";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div className="row posts ">{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

const Swipable = forwardRef((props, ref) => {
  const [cartItem, setCartItem] = useState([]);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCartItem(JSON.parse(localStorage.getItem("cart")));
    }
    console.log(cartItem);
  }, []);

  useEffect(() => {
    if (cartItem.length !== 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }, [cartItem]);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const textAreaRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = useState(true);

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      //  onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
     
<div className="border">
      <div className="container-fluid contact-tab">
        <div className="row">
          <div className="col-12">
            <p className='text-3xl font-extrabold m4 marro' onClick={toggleDrawer(anchor, false)}>✖︎</p>
            <h2 className="about-titl text-center text-xl font-extrabold mt-4 mb-4 marro">Il tuo carrello </h2>
            {props.total}
          </div>

          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-12">
            
                <div>
                  {props.item}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );

  return (
    <div className="contact-button">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Badge className='cuore' badgeContent={props.count} color="primary">
            <img src='doughnut_color.png' style={{height:'100%'}}
            
              onClick={toggleDrawer(anchor, true)}
            ></img >
          </Badge>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
});

export default Swipable;