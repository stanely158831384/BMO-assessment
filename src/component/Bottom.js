
import React from "react";

function Bottom() {

    let bottomCss = {
        width: "100%",
        height: "40px",
        backgroundColor:"bisque",
        position: "fixed",
        bottom: "0px"
    }

    return(

        <div>
            <div style={{height: "50px"}}></div>
            <div style={bottomCss}>
            </div>
        </div>      
    )
}

export  default Bottom;