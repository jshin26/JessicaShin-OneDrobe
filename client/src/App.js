import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Component/Header/Header';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Product from './Page/Product/Product';
import StyleLog from './Page/StyleLog/StyleLog';

// APP

function App () {
  
  return (
    <BrowserRouter>

      <div className="page-content">          
        <div className="sideHeader">
          <Header/>
        </div>
        <Switch>
            <div className="right">
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/product" exact component={Product} />
              <Route path="/log" exact component={StyleLog} />
            </div>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
