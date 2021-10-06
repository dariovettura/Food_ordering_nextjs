import React, { useState, useEffect } from "react";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  
 
 // const [order,setOrder] = useState([''])

  //useEffect(() => {
     // if (localStorage.getItem("Line_item")) {
       // setOrder(JSON.parse(localStorage.getItem("Line_item")));
   //   }
   // }, []);

 

  if (req.method === 'POST') {
  
  
    try {
    const order = JSON.parse(localStorage.getItem("Line_item"))
    const quantity = order.length;
    //  const quantity =req.body;
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
      
        line_items: [
          {
           // price_data:{product_data:{description:1}},
            // TODO: replace this with the `price` of the product you want to sell
           // price: 'price_1JcD2KG1Ic4rK71FoEnAYvSq',
            quantity,
            amount:2000,
            currency:'eur',
            name:'pane cafone'
          },
        ],
        payment_method_types: [
          'card',
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
