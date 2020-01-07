import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
//import { render } from '@testing-library/react';
import Navigation from './components/Navigation';
import NursingHome from './components/nursingHomeData';
import Penalties from './components/Penalties';


class App extends Component {

  render () {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/components/NursingHome" component={NursingHome} />
          <Route path="/components/Penalties" component={Penalties} />
        </Switch>
      </div>
    )
  }
}
export default App;






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
