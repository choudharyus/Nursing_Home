//import React from 'react';
import React, { Component } from 'react';
//import './App.css';
import {Route, Switch} from 'react-router-dom';
//import { render } from '@testing-library/react';
import Navigation from './Navigation';
import NursingHome from './NursingHome';
import Penalties from './Penalties';
//import Home from './components/Home';
import './Home.css'

function Home () {


    return (
        <>
        <h1 className="homePage">National Nursing Home Database</h1>
        <div className="homeDiv1">
        <Navigation />
        <Switch>
          <Route path="/components/NursingHome" component={NursingHome} />
          <Route path="/components/Penalties" component={Penalties} />
        </Switch>
        </div>
        </>
    )
}
export default Home;
