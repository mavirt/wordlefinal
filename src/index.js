import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/About";
import Home from  "./components/Home"
import {ThemeProvider} from "./redux/actions/Theme";
ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
          <BrowserRouter>
          <Provider store={configureStore()}>
                  <Routes>
                      <Route path={"/"} element={<App/>}>
                          <Route index element={<Home/>}/>
                          <Route path ={"about"} element={<About/>}/>
                          </Route>
                  </Routes>
          </Provider>
    </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


