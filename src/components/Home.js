import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import NursingHome from './NursingHome';
import Penalties from './Penalties';
import './Home.css'
import Quality from './Quality';
import Capacity from './Capacity';
import About from './About';
import Disclaimer from './Disclaimer';

function Home () {

    return (
        <body>
            <div className="headingContainer">
                <h1 className="heading">National Nursing Home Database</h1>
              
            </div>
        <div className="homeDiv1">
        <Navigation />
        <Switch>
          <Route path="/components/NursingHome" component={NursingHome} />
          <Route path="/components/Penalties" component={Penalties} />
          <Route path="/components/Quality" component={Quality} />
          <Route path="/components/Capacity" component={Capacity} />
          <Route path="/components/About" component={About} />
          <Route exact path="/components/Disclaimer" component={Disclaimer} />
        </Switch>
        </div>
        </body>
    )
}
export default Home;
