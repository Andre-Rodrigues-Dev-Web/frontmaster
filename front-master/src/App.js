import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Post from './Pages/Post';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;