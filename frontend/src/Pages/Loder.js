import React from 'react'
import { PuffLoader } from "react-spinners";

function Loader() {
    return ( 
        <div
        className="
        
        "
        style={{height:"100vh",width:"100vw",display:"flex", justifyContent:"center" ,alignItems:"center"}}
        >
          <PuffLoader
            size={100}
            color="red"
          />
        </div>
       );
}

export default Loader