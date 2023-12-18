import React, {useState} from "react";
import Counter from "./componets/Counter";

function App() {

       const [value,setValue]=useState('text input')

      return(
    <center>
        <div className={App}>
             <h2>{value}</h2>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <br/>
            <hr/>
          <Counter/>
        </div>
    </center>
      )

}

export default App;
