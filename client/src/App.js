import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import backicon from './Asset/back-arrow.svg';

import Header from './Component/Header/Header';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Product from './Page/Product/Product';
import Favourite from './Page/Favourite/Favourite';

// APP

class App extends React.Component {
  
  // state ={
  //   sidebarOpen: true
  // }
  
  // onSetSidebarOpen = () => {
  //   this.setState({ sidebarOpen: !this.state.sidebarOpen });
  // }

  render() {
    return (
      <BrowserRouter>
  
        <div className="page-content">
          {/* <Sidebar
            sidebar={ <Header /> }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
            className="sidebar"
          >
            <button className="sidebarbtn" onClick={this.onSetSidebarOpen}>
              <img src={backicon}/>
            </button>
          </Sidebar> */}
          
          <div className="sideHeader">
            <Header/>
          </div>
          <Switch>
              <div className="right">
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/product" exact component={Product} />
                <Route path="/favourites" exact component={Favourite} />
              </div>
          </Switch>
        </div>
  
      </BrowserRouter>
    );
  }
}

export default App;
