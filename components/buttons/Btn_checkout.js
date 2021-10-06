import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Btn_checkout(props) {

  const router= useRouter();
  
    let history = useHistory();

const [line_items,setLine_items] = useState([])

const OnClick = async (e) => {
    e.preventDefault();
   



    await setLine_items(
      
      
      props.cart &&
        props.cart.slice(0).map((param) => (
        
          {product_id:param.id,
            quantity:param.quantity,
            name:param.name + '('+param?.extra+')',
          img:param.images[0]?.src,
           total: "" + param.price * param.quantity + "",})));
          
            ( router.push("/Checkout")
                
            )
         
          
           
        

  };
  useEffect(() => { if (line_items){
    localStorage.setItem("Line_item", JSON.stringify(line_items));}
  }, [line_items]);
  console.log(line_items)


    return (
        <div className='container-fluid text-center'
        >
          { props.cart.length !=0 ? <Button
          style={{width:'80%'}}
            onClick={OnClick}
          
            variant="contained" color="primary"
            
            ><p className=' text-lg  font-medium capitalize' style={{color:'#fff',marginBottom:'unset',padding:5}}>
Ordina  <span>{props.total}€</span>
</p>
            </Button> : null}
        </div>
    );
}

export default Btn_checkout;