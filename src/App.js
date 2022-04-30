import React from "react";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import ClickAwayListener from "react-click-away-listener";
import {useContext} from "react";
import ThemeContext from "./redux/actions/Theme";


function App() {
    const [popup, setPopup] = useState(false)
    const [{ theme}, toggleTheme] = useContext(ThemeContext);


  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <nav>
            <Link to ={"/"}>Wordle</Link>
            <Link to={"/about"}>About</Link>
        </nav>

        <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => setPopup(true)}>How to play</button>
        {popup && (
            <ClickAwayListener onClickAway={() => setPopup(false)}>
                <div className={'popup'}>
                    <p>You are given six tries to guess a five letter word.</p>
                    <p><strong>Green:</strong> Letter is in the right place and in the word.</p>
                    <p><strong>Yellow:</strong> Letter is in the word but in the incorrect place.</p>
                    <p>If the word does not turn green or yellow, it is not in the word at all.</p>
                    <p>Turn all five letters green and you win!</p>
                </div>
            </ClickAwayListener>
        )}
        <Outlet/>
    </div>
  );
}

export default App;
