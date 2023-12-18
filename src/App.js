import React, {useState} from "react";

function App() {

      const[likes, setLikes]=useState(5);
      const [value,setValue]=useState('text input')
      function increment(){
          setLikes(likes+1)
      }
      function decriment() {
          setLikes(likes-1)
      }
      return(
    <center>
        <div className={App}>
            <h1>{likes}</h1>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <br/>
            <hr/>
            <button onClick={increment}>like</button>
            <button onClick={decriment}>dislike</button>

        </div>
    </center>
      )

}

export default App;
