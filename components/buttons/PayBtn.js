import React, { useState } from 'react';
import axios from "axios";
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";
import { loadStripe } from '@stripe/stripe-js';

//import getStripe from '../lib/get-stripe';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default function PayBtn(props) {

  const [data,setData]= useState(props.data)

  const [loading, setLoading] = useState(false);
   
  const getData = async () => {
    try {
      data.set_paid=true;
      data.payment_method= "Stripe";
        data.payment_method_title= "Stripe";
      const result = await axios.post('/api/nopay_sessions', {data:data});
      console.log(result.data);
     
    } catch (err) {
      console.log(err);
     
    }
  };


  let stripePromise = null;
  
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
  };
  


  const redirectToCheckout = async () => {
    setLoading(true);
    // Create Stripe checkout
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
     
        amount:props.amount,
    
    });
getData();
    // Redirect to checkout
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });

  };
  return (
 <React.Fragment>
     
        <Button

        style={{paddingTop:'30px',paddingBottom:'30px',maxWidth:'400px'}}
        className={props.classi}
        onClick={redirectToCheckout} type="submit" role="link">
          <p className='white font-black text-lg'> Paga adesso {props.total}</p>
         
        </Button>

        <div
className='grid grid-cols-1 place-items-center place-content-center'
        style={{
          position: loading ? "fixed" : "block",
          display: loading ? "grid" : "none",

          backgroundColor: "rgba(255, 255, 255, 0.8)",
          top: 0,
          left: 0,
        
          height: "100vh",
          width: "100vw",
          zIndex: 100,
        }}
      >
        <Loader
         className='loade'
          type="Oval"
          color="#ff8800"
          height={80}
          width={80}
        />
        <h2>Stai per essere indirizzato al modulo di pagamento con Stripe</h2>
      </div>
     
        </React.Fragment>
     
  );
}