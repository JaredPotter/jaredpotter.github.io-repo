import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Portfolio from './Portfolio';
import Work from './Work';
import Community from './Community';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
      <ul className="navigation-bar">
        <li>
          <NavLink to="/" exact activeClassName="selected">Bio</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" exact activeClassName="selected">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/work" exact activeClassName="selected">Work</NavLink>
        </li>        
        <li>
          <NavLink to="/community" exact activeClassName="selected">Community</NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeClassName="selected">Contact</NavLink>
        </li>
      </ul>          
        <Route path="/" exact component={App} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/work" component={Work} />
        <Route path="/community" component={Community} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
