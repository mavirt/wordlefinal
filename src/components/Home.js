import React from "react";
import Guesses from "./Guesses";
import Keys from "./Keys";

function Home (){
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return(
        <div>

            <p>{date}</p>
            {<Guesses/>}
            {<Keys/>}
        </div>
    )
}

export default Home;