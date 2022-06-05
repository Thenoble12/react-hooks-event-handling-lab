import React from "react";

function Keypad(){
    function handleChange(event) {
        event.preventDefault();
        console.log("Entering password...");
    }


    return (
       <div>
            <form onChange={handleChange}>           
                <input type="password" />
            </form>
       </div> 
    )
}

export default Keypad;