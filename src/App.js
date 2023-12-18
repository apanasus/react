import React, {useState} from "react";

function App() {

      const[likes, setLikes]=useState(5);
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
            <button onClick={increment}>like</button>
            <button onClick={decriment}>dislike</button>

        </div>
    </center>
      )

}

export default App;
