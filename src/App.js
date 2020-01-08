import React, { Component } from 'react';
import './App.css';
//import {Route, Switch} from 'react-router-dom';
//import Navigation from './components/Navigation';
//import NursingHome from './components/nursingHomeData';
//import Penalties from './components/Penalties';
import Home from './components/Home';

class App extends Component {

  render () {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
export default App;


// {/* <Navigation />
// <Switch>
//   <Route exact path="/components/Home" component={Home} />
//   <Route path="/components/NursingHome" component={NursingHome} />
//   <Route path="/components/Penalties" component={Penalties} />
// </Switch> */}



// import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// //import Nav from './components/Nav.js'
// //import logo from './logo.svg';
// import './App.css';
// import NursingHome from './components/nursingHomeData';
// import Penalties from './components/Penalties';
// import Navigation from './components/Navigation';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navigation />
//         <Switch>
//           <Route path="/components/NursingHome" component = {NursingHome} />
//           <Route path="/components/PenaltiesPenalties" component = {Penalties} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
// export default App;
