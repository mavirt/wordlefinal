import React from "react";

import Key from "./Key";
import {useDispatch} from "react-redux";
import {Delete} from "../redux/actions/Delete";
import {SubmitGuess} from "../redux/actions/SubmitGuess";


function Keys(){
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");
    const dispatch = useDispatch();

    let keys_ele = keys.map((itm, idx)=>
        <Key key = {idx} vl={itm}/>
    )

    return(
        <div className="keys">
            {keys_ele}
            <div className={"key submit"} onClick={()=>dispatch(SubmitGuess())}>Enter</div>
            <div className={"key delete"} onClick={()=>dispatch(Delete())}>Delete</div>
        </div>
    )
}

export default Keys;