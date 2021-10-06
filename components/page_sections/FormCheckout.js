import React, { useState, useEffect } from "react";
import OrderBtn from "../buttons/OrderBtn";

import { useForm } from "react-hook-form";
import classes from "./FormCheckout.module.css"

function FormCheckout(props) {
  const neutralizeBack = (callback) => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
      callback();
    };
  };

  const revivalBack = () => {
    window.onpopstate = undefined;
    window.history.back();
  };

  const handleOpen = () => {
    setOpen(true);
    neutralizeBack(handleClose);
  };

  const handleClose = () => {
    setOpen(false);
    revivalBack();
  };

  const [line_items, setLine_items] = useState([""]);
  useEffect(() => {
    if (localStorage.getItem("Line_item")) {
      setLine_items(JSON.parse(localStorage.getItem("Line_item")));
    }
  }, []);

  const [orderData, setOrderData] = useState({});

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const order = {
        payment_method: "Cash",
        payment_method_title: "Cash",
        set_paid: false,
      billing: {
        first_name: data.firstName,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address_1: data.address,
        address_2: "",
        city: data.city,
        state: "Italia",
        postcode: data.postcode,
        country: "IT",
      },
      shipping: {
        first_name: data.firstName,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address_1: data.address,
        city: data.city,
        state: "Italia",
        postcode: data.postcode,
        country: "IT",
      },
      line_items: line_items,
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "0.00",
        },
      ],
      customer_note:data.note
    };

    if (errors) {
      setOrderData(order);
      setOpen(true);
      neutralizeBack(handleClose);
    } else {
      console.log(errors);
    }
  };

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(orderData));
  }, [orderData]);

  return (
    <div className={classes.forms}>
      <form className="grid grid-cols-12">
        <div className="col-span-12 marro font-black text-2xl"><h3>Indirizzo di consegna</h3></div>
      <div className=" col-span-12">
          <label> Via e numero civico</label>
          <input
       
            className="checkout "
            // onChange={(e) => setOrderData(e.target.value)}
            {...register("address", {
              required: true,

              pattern: /^[A-Za-z0-9'\.\-\s\,]+$/i,
            })}
          />
          {errors?.address?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}

          {errors?.address?.type === "pattern" && (
            <p className="error">solo lettere e numeri</p>
          )}
        </div>
        <div className=" col-span-4">
          <label> C.A.P.</label>
          <input
      
            className="checkout"
            {...register("postcode", {
              required: true,
              min: 80124,
              max: 80125,
              maxLength: 10,
              pattern: /\d+/,
            })}
          />
          {errors?.postcode?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}
          {errors?.postcode?.type === "maxLength" && (
            <p className="error">nome non può eccedere 10 caratteri</p>
          )}
          {errors?.postcode?.type === "pattern" && (
            <p className="error">Solo caratteri numerici</p>
          )}
          {errors?.postcode && (
            <p className="error">non consegniamo in questa zona</p>
          )}
        </div>
        <div className="col-end-13 col-span-7">
          <label> Città</label>
          <input
   
            className="checkout "
            // onChange={(e) => setOrderData(e.target.value)}
            {...register("city", {
              required: true,

              pattern: /^[A-Za-z0-9'\.\-\s\,]+$/i,
            })}
          />
          {errors?.city?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}

          {errors?.city?.type === "pattern" && (
            <p className="error">solo lettere e numeri</p>
          )}
        </div>
        <div className="col-span-12">
          <label> Note per la consegna</label>
          
          <textarea type='textarea'
          style={{width:'100%'}}
          rows="4" 
            className="checkout "
            // onChange={(e) => setOrderData(e.target.value)}
            {...register("note", {
              required: false,

             
            })}
          />
          {errors?.note?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}

          {errors?.note?.type === "pattern" && (
            <p className="error">solo lettere e numeri</p>
          )}
        </div>
        <div className=" col-span-12 marro font-black text-2xl"><h3>Dettagli personali</h3></div>


        <div className=" col-span-5">
          <label> Nome</label>
          <input
         
            className="checkout "
            // onChange={(e) => setOrderData(e.target.value)}
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstName?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p className="error">nome non può eccedere 20 caratteri</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className="error">Solo caratteri alfabetici</p>
          )}
        </div>
        <div className=" col-span-5 col-end-13">
          <label> Cognome</label>
          <input
        
            className="checkout "
            // onChange={(e) => setOrderData(e.target.value)}
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.last_name?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}
          {errors?.last_name?.type === "maxLength" && (
            <p className="error">cognome non può eccedere 20 caratteri</p>
          )}
          {errors?.last_name?.type === "pattern" && (
            <p className="error">Solo caratteri alfabetici</p>
          )}
        </div>

        <div className="col-span-12">
          <label>E-mail</label>
          <input
       
            className="checkout "
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="error">Formato E-mail non corretto</p>
          )}
        </div>

       
        <div className="col-span-12">
          <label> Numero di telefono</label>
          <input
         
            className="checkout"
            {...register("phone", {
              required: true,
              maxLength: 20,
              pattern: /\d+/,
            })}
          />
          {errors?.phone?.type === "required" && (
            <p className="error">il campo è richiesto</p>
          )}
          {errors?.phone?.type === "maxLength" && (
            <p className="error">nome non può eccedere 20 caratteri</p>
          )}
          {errors?.phone?.type === "pattern" && (
            <p className="error">Solo caratteri numerici</p>
          )}
        </div>
       
       
      </form>
      <OrderBtn
      order={orderData}
        close={handleClose}
        open={open}
        form={handleSubmit(onSubmit)}
      ></OrderBtn>
    </div>
  );
}

export default FormCheckout;
