import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import OrderOk from "../page_sections/OrderOk";
import OrderWrong from "../page_sections/OrderWrong.js";
import PayBtn from "./PayBtn";
import Paper from "@material-ui/core/Paper";

import NOpayBtn from "./NOpayBtn";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Loader from "react-loader-spinner";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "1180px",
    overflow: "scroll",
    maxHeight: "90vh",
    background: "rgb(255,255,255)",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
  },
}));

function OrderBtn(props) {
  const classes = useStyles();

  const CK = process.env.NEXT_PUBLIC_CK;
  const CS = process.env.NEXT_PUBLIC_CS;

  const [open, setOpen] = useState(props.open);
  const [orderWrong, setOrderWrong] = useState(false);
  const [orderOk, setOrderOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    if (localStorage.getItem("order")) {
      setData(JSON.parse(localStorage.getItem("order")));
    }
  }, [props.open]);
  const [order, setOrder] = useState([""]);

  useEffect(() => {
    if (localStorage.getItem("Line_item")) {
      setOrder(JSON.parse(localStorage.getItem("Line_item")));
    }
  }, []);

 
  const revivalBack = () => {
    window.onpopstate = undefined;
    window.history.back();
  };
  const handleClose = () => {
    setOpen(false);
    revivalBack();
  };

  

  return (
    <div>
      <div className="mt-10 mb-20">
        <Button
          className="mt-10 button_to_menu h-12 flex justify-center md:justify-start   w-full btn_don_oro  content-center"
          onClick={props.form}
        >
          <p className="marro font-black text-2xl ">Ordina Ora</p>
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <div
              style={{
                position: "absolute",
                right: 5,
                top: 5,
                fontSize: "2em",
                color: "#000",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={props.close}
            >
              ←
            </div>
<div className="grid grid-cols-1 md:grid-cols-12 ">
            <div className="grid grid-cols-1 m-2 md:col-start-2 md:col-span-5">
              <Paper className="p-4">
                <div className="">
                  <h4 className="marro font-black text-2xl tx mb-2">
                    Riepilogo dati{" "}
                  </h4>

                  <div className="container-fluid">
                    <div>
                      <div
                        style={{ fontSize: "0.8em" }}
                        className="col-12 item-name2"
                      >
                        <strong className="text-lg marro font-black">
                          Nome
                        </strong>
                        <br />
                        {data?.billing?.first_name} {data?.billing?.last_name}
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{ fontSize: "0.8em" }}
                        className="col-12 item-name2"
                      >
                        <strong className="text-lg marro font-black">
                          E-mail
                        </strong>
                        <br />
                        {data?.billing?.email}
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{ fontSize: "0.8em" }}
                        className="col-12 item-name2"
                      >
                        <strong className="text-lg marro font-black">
                          Numero di telefono
                        </strong>
                        <br />
                        {data?.billing?.phone}
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{ fontSize: "0.8em" }}
                        className="col-12 item-name2"
                      >
                        <strong className="text-lg marro font-black">
                          Indirizzo
                        </strong>
                        <br />
                        {data?.billing?.address_1}
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                      <div className="grid grid-cols-2">
                        <div
                          style={{ fontSize: "0.8em" }}
                          className="col-6 item-name2"
                        >
                          <strong className="text-lg marro font-black">
                            Città
                          </strong>
                          <br />
                          {data?.billing?.city}
                        </div>
                        <div
                          style={{ fontSize: "0.8em" }}
                          className="col-6 item-name2"
                        >
                          <strong className="text-lg marro font-black">
                            CAP
                          </strong>
                          <br />
                          {data?.billing?.postcode}
                        </div>
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{ fontSize: "0.8em" }}
                        className="col-12 item-name2"
                      >
                        <strong className="text-lg marro font-black">
                          Note per la consegna
                        </strong>
                        <br />
                        {data?.customer_note}
                      </div>
                      <Divider
                        style={{
                          marginBottom: "15px",
                          height: "1px",

                          opacity: 0.8,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Paper>
            </div>

            <div className="md:col-end-12 md:col-span-4">
              <Paper className={classes.root}>
                <div className="border p-4">
                  <h2 className="marro font-black text-2xl">
                    Riepilogo Ordine
                  </h2>
                  {order &&
                    order
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
                                  src={post.img}
                                  alt={"ok"}
                                />
                                <div className="item_qnt text-red-400 font-black">
                                  {" "}
                                  x {post.quantity}
                                </div>
                              </div>
                              <div className="flexy col-span-5">
                                {" "}
                                <div className=" item-name marro">
                                  {" "}
                                  {post?.name?.replace(/,/g, '')}
                                </div>
                              </div>
                              <div className="flexy col-span-3">
                                <div className=" item-price font-black marro">
                                  {" "}
                                  {post.total}€
                                </div>
                              </div>
                            </div>
                          </Paper>
                        );
                      })}
                  <div className="container-fluid">
                    <div className="row justify-content-center">
                      <div
                        style={{ marginTop: "30px", fontWeight: 700 }}
                        className="marro font-black text-2xl"
                      >
                        Totale:
                        {order
                          .reduce((acc, post) => acc + post.total * 1, 0)
                          .toFixed(2)}
                        €
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </div>
            </div>
            <div className="grid grid-cols-1 mt-10 mb-20 place-items-center">
            <NOpayBtn
            data={data}
         
            
            />

              <div className="text-center mb-3 mt-3">Oppure</div>

              <PayBtn
        
                classi={" mt-5  button_to_menu h-12 flex justify-center md:justify-start   w-full purple  content-center"
                }
                total={order
                  .reduce((acc, post) => acc + post.total * 1, 0)
                  .toFixed(2)}
                amount={order.reduce((acc, post) => acc + post.total * 100, 0)}
                data={data}
              ></PayBtn>
            </div>
          </div>
        </Fade>
      </Modal>
     
    
      <OrderOk orderOk={orderOk}></OrderOk>
      <OrderWrong orderWrong={orderWrong}></OrderWrong>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const CK = process.env.REACT_APP_CK;
  const CS = process.env.REACT_APP_CS;
  console.log(CK);
  const url2 =
    "https://www.dariovettura.com/shop/wp-json/wc/v2/orders/?consumer_key=" +
    CK +
    "&consumer_secret=" +
    CS;

  const res = await fetch(url2);
  //const result = await Axios.get(url);
  //const menu =  result.data

  //  const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      url: url2,
    },
  };
}
export default OrderBtn;
