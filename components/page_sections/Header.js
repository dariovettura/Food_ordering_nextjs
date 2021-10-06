import React, { useState, useEffect} from "react";
import Link from 'next/link'







function Header(props) {
    return (
        <React.Fragment>
 <div className="header">
	   <Link className='logo' href="/">
           <h1 className="logo font-black cursor-pointer">	DONUTS</h1>
	
	 
	  	 </Link>
		    
		


          
	  </div>
            
        </React.Fragment>
    );
}

export default Header;