import React, { useState, useEffect } from "react";

import Checkbox from "../products_components/Checkbox";

import Swipable from "./Cart";
import Btn_checkout from "../buttons/Btn_checkout";
import Create_Dnt from "../products_components/Prod_configurator";
import Dnt_button from "../buttons/Dnt_button";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

import AddIcon from "@material-ui/icons/Add";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

function Products(props) {
  // set States//// set States//// set States//// set States//// set States//// set States//
  // set States//// set States//// set States//// set States//// set States//// set States//
  // set States//// set States//// set States//// set States//// set States//// set States//
  // set States//// set States//// set States//// set States//// set States//// set States//
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [quantity, setQuantity] = useState(1);
  const [attrib, setAttrib] = useState([]);
  const [attrib2, setAttrib2] = useState([]);
  const [attrib3, setAttrib3] = useState([]);
  const [attrib4, setAttrib4] = useState([]);
  const [nota, setNota] = useState([]);
  const [cardTotal, setCardTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const [expanded, setExpanded] = useState(false);

  const [products, setProducts] = useState(props.products);

  const uncheck = () => {
    document
      .querySelectorAll("input[type=checkbox]")

      .forEach((el) => (el.checked = false));
  };
  
  // set Adding product in Cart// set Adding product in Cart// set Adding product in Cart// set Adding product in Cart
  // set Adding product in Cart// set Adding product in Cart// set Adding product in Cart// set Adding product in Cart
  // set Adding product in Cart// set Adding product in Cart// set Adding product in Cart// set Adding product in Cart

  const addItem = () => {

//REMOVED//REMOVED//REMOVED//REMOVED//REMOVED

  };

  // set adding extra to product// set adding extra to product// set adding extra to product// set adding extra to product
  // set adding extra to product// set adding extra to product// set adding extra to product// set adding extra to product
  // set adding extra to product// set adding extra to product// set adding extra to product// set adding extra to product
  // set adding extra to product// set adding extra to product// set adding extra to product// set adding extra to product

  
//set total product price//set total product price//set total product price//set total product price
  const calculateTotal = () => {

    //REMOVED//REMOVED//REMOVED//REMOVED//REMOVED
   
  };

  //product configurator   //product configurator  //product configurator  //product configurator
  const addExtra = () => {
   //REMOVED//REMOVED//REMOVED//REMOVED//REMOVED
 

    
  };
  const addExtra2 = () => {
    //REMOVED//REMOVED//REMOVED//REMOVED//REMOVED
  };
  const addExtra3 = () => {
  
   //REMOVED//REMOVED//REMOVED//REMOVED//REMOVED
  };

  // set actions in cart page// set actions in cart page// set actions in cart page// set actions in cart page
  // set actions in cart page// set actions in cart page// set actions in cart page// set actions in cart page
  // set actions in cart page// set actions in cart page// set actions in cart page// set actions in cart page

  const removeItem = () => {
   //REMOVED//REMOVED//REMOVED//REMOVED//REMOVED
  };

  //Add quantity//Add quantity//Add quantity//Add quantity//Add quantity


  const addQuantity = () => {
   
  };
  const removeQuantity = () => {
  
  };

  // set Accordions// set Accordions// set Accordions// set Accordions
  // set Accordions// set Accordions// set Accordions// set Accordions
  // set Accordions// set Accordions// set Accordions// set Accordions

  

  const expand = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  
  };

  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//
  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//
  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//  // Snackbar//

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <div className="">
        <Swipable
          count={cart
            .reduce((acc, item) => acc + item?.quantity * 1, 0)
            .toFixed(0)}
          item={
            cart &&
            cart
              .slice(0)
              .reverse()
              .map((post, i) => {
                return (
                  <Paper elevation={3} key={i} className="m-4">
                    <div className="grid grid-cols-12 mb-6  mr-4 place-content-center h-full ">
                      <div className="text-center flexy  col-span-4">
                        <img
                          style={{ height: "50%" }}
                          className=" w-full  object-contain object-center  rounded-lg"
                          src={post.images[0]?.src}
                          alt={post.images[0]?.name}
                        />
                        <div className="item_qnt text-red-400 font-black">
                          {" "}
                          x {post.quantity}
                        </div>
                      </div>
                      <div className="flexy col-span-5">
                        {" "}
                        <div className=" item-name marro"> {post.name}</div>
                        <ul style={{ listStyleType: "none" }}>
                          <li className="extra text-xs font-extralight">
                            {post.extra}
                          </li>
                        </ul>
                      </div>
                      <div className="flexy col-span-3">
                        <div className=" item-price font-black marro">
                          {" "}
                          {(post.price * post.quantity).toFixed(2)}€
                        </div>
                        <p
                          style={{ cursor: "pointer" }}
                          className="text-right mt-5 text-sm text-red-400"
                          onClick={() => removeItem(post)}
                        >
                          Rimuovi
                        </p>
                      </div>
                    </div>
                  </Paper>
                );
              })
          }
        
          total={
            <div>
              <Btn_checkout
                setCart={setCart}
                cart={cart}
                total={cart
                  .reduce((acc, post) => acc + post?.price * post?.quantity, 0)
                  .toFixed(2)}
              />
            </div>
          }
        ></Swipable>
       
        <div className="z-10">
          <div className=" grid grid-cols-1 md:grid-cols-3">
          

            {products &&
              products.slice(0).map((post, i) => {
                return post.categories[0].id === 37 ? (
                  <div key={i} className="" style={{ padding: "15px" }}>
                    <Accordion
                      expanded={expanded === i}
                      onChange={expand(i)}
                      elevation={2}
                      className=" product-card"
                    >
                      <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <div className="product-card grid grid-cols-2  h-full">
                          <div className=" h-full flex">
                            {" "}
                            <div className=" items-center  object-contain  w-full h-full  overflow-hidden">
                              <img
                                className=" w-full  object-contain object-right  rounded-lg"
                                src={post.images[0]?.src}
                                alt={post.images[0]?.name}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1  place-content-center">
                            <Typography className="cat-name">
                              {post.categories[0].name}
                            </Typography>
                            <Typography className="prod-name">
                              {post.name}
                            </Typography>

                            <span className="price">€ {post.price}.00</span>
                          </div>
                        </div>
                      </AccordionSummary>

                      <AccordionDetails>
                        <div className="grid grid-cols-1">
                          <div
                            className="text-xs font-thin mb-4"
                            dangerouslySetInnerHTML={{
                              __html: post?.short_description,
                            }}
                          ></div>
                          <form className="extra">
                            {post.attributes &&
                              post.attributes.slice(0).map((att, i) => {
                                return (
                                  <Checkbox
                                    empty={attrib.length === 0}
                                    name="io"
                                    key={i}
                                    addExtra={addExtra}
                                    calculateTotal={calculateTotal}
                                    value={+att?.options[0]}
                                    extra={att.name}
                                  />
                                );
                              })}
                          </form>
                          <label className="text-xs font-thin mt-2 ">
                            Aggiungi nota
                          </label>

                          <textarea
                            name={i + "1"}
                            type="text"
                            value={nota}
                            onChange={(e) => setNota(e.target.value)}
                            className="border pl-3 pr-2 w-3/6 mt-2"
                          />
                          <div className="grid grid-cols-12 mt-6 place-content-center place-items-center">
                            <button
                              className="col-span-1 adding flex self-center  justify-center"
                              onClick={removeQuantity}
                            >
                              -
                            </button>
                            <h2 className="col-span-1 flex self-center  justify-center pink font-black">
                              {quantity}
                            </h2>

                            <button
                              className="col-span-1 adding flex self-center  justify-center"
                              onClick={addQuantity}
                            >
                              +
                            </button>
                            <Button
                              className="col-span-4 col-end-13"
                              variant="contained"
                              color="primary"
                              onClick={() => addItem(post)}
                            >
                              aggiungi
                            </Button>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ) : null;
              })}
          </div>
        </div>

        
        {products &&
          products.slice(0).map((post, i) => {
            return post.categories[0].id === 38 ? (
              <div key={i} className=" grid grid-cols-1 md:grid-cols-12 mb-28">
                <Accordion
                  expanded={expanded === i}
                  onChange={expand(i)}
                  elevation={2}
                  className=" p-10 product-card min-h-200 ring-2 rounded-full md:col-start-4 md:col-span-6 grid grid-cols-1"
                >
                  <AccordionSummary
                    className="blocks text-center"
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                      <img src="/ciambone-8.png" alt="" />
                      <div className=" text-center md:text-left blocks">
                        <h3 className="text-4xl font-black marro">
                          Crea la tua Donuts
                        </h3>
                        <p className=" text-lg font-normal marro">
                          Seleziona tra le nostre varianti di impasto, confetti
                          e glasse per creare la tua Donuts perfetta
                        </p>
                        <Dnt_button
                          onClick={expand}
                          text="Crea le tue Donuts"
                          classes="mt-5 button_to_menu h-12 flex justify-center   text-center  w-full md:justify-start"
                          fontEdit="font-edit font-bold"
                          btn_oro="btn_don_oro2  content-center"
                          btn_icon=" btn-icon2"
                        ></Dnt_button>
                      </div>
                    </div>
                  </AccordionSummary>
                  <form className="extra">
                    {post.attributes &&
                      post.attributes.slice(0).map((att, i) => {
                        return att.id === 6 ? (
                          <Paper
                            style={{
                              minHeight: "100px",
                              margin: "10px",
                              padding: "10px",
                            }}
                            elevation={3}
                            key={i}
                            className="grid grid-cols-10 place-content-center h-full"
                          >
                            <h2 className="md:col-start-3  md:col-span-4 col-span-10  pink font-bold mt-1 mb-5">
                              {att?.name}
                            </h2>
                            <div className="col-span-10 md:col-span-4">
                              {att.options &&
                                att.options.slice(0).map((opt, i) => {
                                  return (
                                    <Create_Dnt
                                      disable={0}
                                      empty={attrib2.length === 0}
                                      dis={attrib2.length}
                                      attr={attrib2}
                                      key={i}
                                      addExtra={addExtra2}
                                      calculateTotal={calculateTotal}
                                      value={+opt?.substring(0, 4)}
                                      extra={opt}
                                      name={opt.slice(5)}
                                    ></Create_Dnt>
                                  );
                                })}
                            </div>
                          </Paper>
                        ) : null;
                      })}

                    {post.attributes &&
                      post.attributes.slice(0).map((att, i) => {
                        return att.id === 8 ? (
                          <Paper
                            style={{
                              minHeight: "100px",
                              margin: "10px",
                              padding: "10px",
                            }}
                            elevation={3}
                            key={i}
                            className="grid grid-cols-10 place-content-center h-full"
                          >
                            <h2 className="md:col-start-3 md:col-span-4  col-span-10 mt-1 mb-5 pink font-bold ">
                              {att?.name}
                            </h2>
                            <div className="col-span-10 md:col-span-4">
                              {att.options &&
                                att.options.slice(0).map((opt, i) => {
                                  return (
                                    <Create_Dnt
                                      disable={1}
                                      empty={attrib3.length === 0}
                                      dis={attrib3.length}
                                      attr={attrib3}
                                      key={i}
                                      addExtra={addExtra3}
                                      calculateTotal={calculateTotal}
                                      value={+opt?.substring(0, 4)}
                                      extra={opt}
                                      name={opt.slice(5)}
                                    ></Create_Dnt>
                                  );
                                })}
                            </div>
                          </Paper>
                        ) : null;
                      })}

                    {post.attributes &&
                      post.attributes.slice(0).map((att, i) => {
                        return att.id === 7 ? (
                          <Paper
                            style={{
                              minHeight: "100px",
                              margin: "10px",
                              padding: "10px",
                            }}
                            elevation={3}
                            key={i}
                            className="grid grid-cols-10 place-content-center h-full"
                          >
                            <h2 className="md:col-start-3 md:col-span-4  col-span-10 mt-1 mb-5 pink font-bold ">
                              {att?.name}
                            </h2>
                            <div className="col-span-10 md:col-span-4">
                              {att.options &&
                                att.options.slice(0).map((opt, i) => {
                                  return (
                                    <Create_Dnt
                                      disable={1}
                                      empty={attrib4.length === 0}
                                      dis={attrib4.length}
                                      attr={attrib4}
                                      key={i}
                                      addExtra={addExtra4}
                                      calculateTotal={calculateTotal}
                                      value={+opt?.substring(0, 4)}
                                      extra={opt}
                                      name={opt.slice(5)}
                                    ></Create_Dnt>
                                  );
                                })}
                            </div>
                          </Paper>
                        ) : null;
                      })}
                  </form>

                  <div className="grid grid-cols-1">
                    <label className="text-xs font-thin mt-2 ">
                      Aggiungi nota
                    </label>

                    <textarea
                      name={i + "1"}
                      type="text"
                      value={nota}
                      onChange={(e) => setNota(e.target.value)}
                      className="border pl-3 pr-2 w-3/6 mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-12 mt-6 place-content-center place-items-center">
                    <button
                      className="col-span-1 adding flex self-center  justify-center"
                      onClick={removeQuantity}
                    >
                      -
                    </button>
                    <h2 className="col-span-1 flex self-center  justify-center pink font-black">
                      {quantity}
                    </h2>

                    <button
                      className="col-span-1 adding flex self-center  justify-center"
                      onClick={addQuantity}
                    >
                      +
                    </button>
                    <Button
                      className="col-span-4 col-end-13"
                      variant="contained"
                      color="primary"
                      onClick={() => addItem(post)}
                    >
                      aggiungi
                    </Button>
                  </div>
                </Accordion>
              </div>
            ) : null;
          })}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose2}
        message={message + " è stato aggiunto al carrello"}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose2}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Products;
