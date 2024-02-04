import React from 'react'

function SearchBar(){

    fetch ("http://localhost:8001/transactions")
    .then(res=> res.json())
    .then(data=>console.log(data))
    return(
        
        <div>
            <h4>Search Transaction</h4>
            <form>
                <input type="text" placeholder="DEFGHVRT"/><br></br>
                <input type="button" value="Search"/>
            </form>
            
            {/* <ul>
                <li>{data}</li>
            </ul> */}
        </div>

    );
}
export default SearchBar