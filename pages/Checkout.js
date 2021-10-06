import React, { useState, useEffect, useRef } from "react";

import Header from "../components/page_sections/Header";
import FormCheckout from "../components/page_sections/FormCheckout";

import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Link from 'next/link'
import Image from 'next/image'

const useStyles = makeStyles({
    root: {
      minWidth: 175,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  export default function CheckOut(props) {

    const classes = useStyles();

    const [order,setOrder] = useState([''])

    useEffect(() => {
        if (localStorage.getItem("Line_item")) {
          setOrder(JSON.parse(localStorage.getItem("Line_item")));
        }
      }, []);
    return (
        <div>
<Header></Header>
<div className="cuore">
    <Link href="/">Torna al Menu</Link>
</div>
<div className="home">
    {order!=''?




    <div className="w-full p-4 ">
        <div className=" grid grid-cols-1 md:grid-cols-6 gap-20 ">
       
        <div className="w-full md:col-start-2 md:col-span-2 ">
            <FormCheckout></FormCheckout>
        </div>
        
        
        
        
        <div className="order-first md:order-last w-full md:col-end-6 md:col-span-2">
          <Paper className={classes.root}>
        
            <div className='border p-4'>
              <h2 className="marro font-black text-2xl">Riepilogo Ordine</h2>
          { order &&
          order.slice(0).reverse().map((post, i) => {
            return (
              <Paper elevation={3} key={i} className="m-4">
              <div className="grid grid-cols-12 mb-6  mr-4 place-content-center h-full ">
                <div className="text-center flexy  col-span-4">
              <img
              style={{height:'50%'}}
                        className=" w-full  object-contain object-center  rounded-lg"
                        src={post.img}
                        alt={'ok'}
                      />
                      <div className="item_qnt text-red-400 font-black"> x {post.quantity}</div>
                     
                      </div>
                      <div className="flexy col-span-5"> <div className=" item-name marro">
                  {" "}
                  {post.name.replace(/,/g, '')} 
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
                  <div style={{marginTop:'30px',fontWeight:700}} className="marro font-black text-2xl">
                      Totale:
                  {order
            .reduce((acc, post) => acc + post.total * 1, 0)
            .toFixed(2)}€
                  </div>
              </div>
          </div>
          </div>
          </Paper></div>
         
           </div></div>
         : <div className="container-fluid"><div className="row justify-content-center">
             <div className="col-sm-6 text-center">
              <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        ⚠ Ordine incompleto
        </Typography>
       
      
     
      </CardContent>
      <CardActions className='d-flex justify-content-center text-center'>
        <Button   ><Link href="/">Torna al Menu</Link> </Button>
      </CardActions>
    </Card>
    </div></div></div> }
        </div>
        </div>
    );
}


