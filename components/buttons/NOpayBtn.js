import React, { useState } from 'react';
import OrderOk from '../page_sections/OrderOk'
import OrderWrong from "../page_sections/OrderWrong.js";

import Loader from "react-loader-spinner";
import axios from "axios";
import Button from '@material-ui/core/Button';

function NOpayBtn(props) {

    const [data,setData]= useState(props.data)

    const [orderWrong, setOrderWrong] = useState(false);
  const [orderOk, setOrderOk] = useState(false);
  const [loading, setLoading] = useState(false);


    const getData = async () => {
        try {
          const result = await axios.post('/api/nopay_sessions', {data:data});
          console.log(result.data);
          setLoading(false);
          setOrderOk(true);
        } catch (err) {
          console.log(err);
          setLoading(false);
          setOrderWrong(true);
        }
      };

      const onSubmit = (e) => {
        e.preventDefault();
       // props.close();
        setLoading(true);
        getData();}


    return (
        <React.Fragment>

<Button
              style={{paddingTop:'30px',paddingBottom:'30px',maxWidth:'400px'}}
                onClick={onSubmit}
                className="   mt-5 mb-5 button_to_menu h-12 
           flex justify-center md:justify-start   w-full btn_don_oro  content-center"
              >
                <p className="marro font-black text-lg">Paga alla consegna</p>
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
        <h2>Stiamo elaborando il tuo ordine</h2>
      </div>
      <OrderOk orderOk={orderOk}></OrderOk>
      <OrderWrong orderWrong={orderWrong}></OrderWrong>
            
        </React.Fragment>
    );
}

export default NOpayBtn;