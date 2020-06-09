import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router ,Switch} from 'react-router-dom';

import Listen from './Components/Listen/Listen';
import NotFound from './Components/FileNotFound/NotFound'
import Speak from './Components/Speak/Speak';
import Check from './Components/Listen/Check';
import CheckImage from './Components/Listen/CheckImage';
const Rot=(
    <Router>
    <div>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/listen" component={Listen} />
    <Route path="/speak" component={Speak} />
    <Route path="/listenVideo" component={Check} />
    <Route path="/listenImage" component={CheckImage} />
    <Route component={NotFound}/>
    </Switch>
    </div>
    </Router>

)



ReactDOM.render(Rot, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
