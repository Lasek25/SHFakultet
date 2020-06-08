import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Movie from './views/movie/Movie';
import SearchMovie from './views/searchMovie/SearchMovie';
import Home from './views/home/Home';
import {Provider} from "react-redux";
import store from "./store";
import TodoPanel from "./views/todoPanel/TodoPanel";
import Favourites from "./views/favourites/Favourites";

//yarn add @types/react-router-dom  @types/react-router

const App = () => {
  return (
      <div>
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                  <Route path="/movie/:id" component={Movie} />
                  <Route path="/search" component={SearchMovie} />
                  <Route path="/todo" component={TodoPanel}/>
                  <Route path="/favourites" component={Favourites}/>
                  <Route path="/" component={Home} />
                </Switch>
            </Provider>
        </BrowserRouter>
      </div>
  );
};

export default App;




