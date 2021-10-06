import React, {useEffect,useState, forwardRef, useImperativeHandle } from "react";


function Checkbox(props) {


    const [checked ,setChecked] = useState (false)




    useEffect(() => {
        props.empty && setChecked(false);
    }, [props.empty]);


    

    return (
        <div>
     
             <input
             name={props.name}
             className='checkbox'
          type="checkbox"
          value={checked}
          onClick={() => {
         setChecked(!checked)

            props.calculateTotal(props.value, !checked);
            props.addExtra(props.extra, !checked);
          
          }}
        /> <label className='text-xs'>
      con {props.extra} (+{props.value}€)
      </label>  

    
    
        </div>
    );
}

export default Checkbox;

