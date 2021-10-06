


import React, {useEffect,useState, forwardRef, useImperativeHandle } from "react";

function Prod_configurator(props) {

  const [checked ,setChecked] = useState (false)

  useEffect(() => {
    props.empty && setChecked(false);
}, [props.empty]);

const isDisabled = (id) => {
  return (
      props.dis > props.disable  && props.attr.indexOf(id) === -1
  );
};


  return (
    <div>
     
    <input
    
    name={props.name}
    className='checkbox'
 type="checkbox"
 disabled={isDisabled(props.name)}
 value={props.name}
 onClick={() => {
   
setChecked(!checked)

   props.calculateTotal(props.value, !checked);
   props.addExtra(props.name, !checked);
 
 }}
/> <label className='text-xs'>
{props.name} (+{props.value}€)
</label>  



</div>
  );
}

export default Prod_configurator;

