import React from "react";

function EyesOnMe(){
    function handleFocus(event) {
        event.preventDefault();
        console.log("Good!");
    }

    function handleBlur(event) {
        event.preventDefault();
        console.log("Hey! Eyes on me!");
    }


    return (
       <div>
            <form onFocus={handleFocus} onBlur={handleBlur}>           
              <button>Eyes on me</button>
            </form>
       </div> 
    )
}

export default EyesOnMe;