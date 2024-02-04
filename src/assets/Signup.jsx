import React from 'react'
function Signup(){

    return(

    <>
        <div>
        <form > 
        <label>Add Transaction Type:</label><br></br>
        <input type="text"  id="name" placeholder='Deposit/ Credit' /><br></br>
        <label>Enter Transaction id:</label><br></br>
        <input type="number"  id="name" placeholder='67840D' /><br></br>
        <input type="submit" value="Add "/>
        </form>
        </div>
     </>
    );
}
export default Signup