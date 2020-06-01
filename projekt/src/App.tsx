import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Post from "./views/Post";
import User from "./views/User";

const App = () => {
    return (
        <div>
          <BrowserRouter>
              <Switch>
                  <Route path="/post/:id" component={Post} />
                  <Route path="/user/:id" component={User}/>
                  <Route path="/" component={Home} />
              </Switch>
          </BrowserRouter>
        </div>
    );
};

export default App;
