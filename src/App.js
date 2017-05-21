import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link , Switch} from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';

import Comingbanner from './components/Comingbanner';

class App extends Component {
  render() {
    return (
       <Router>
        <div className="App">
        
          <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <Comingbanner/>
          
            <div>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/contact" exact component={ Contact } ></Route>
                <Route  component={ Notfound } ></Route>
              </Switch>
            </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
