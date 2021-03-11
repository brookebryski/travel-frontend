import React from 'react';
import './App.css';
 

import { connect } from 'react-redux';
import  NavBar  from './components/NavBar'
import Trips from './containers/Trips';
import TripForm from './components/TripForm';
import MyTrips from './containers/MyTrips';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from "./components/Login"
import Logout from "./components/Logout"
import { getAllTrips } from './actions/trips';
 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Divider } from 'semantic-ui-react'
import history from './history';


class App extends React.Component {

  componentDidMount() {
      this.props.getAllTrips();

      
 }
 
 

  render() {
     
    let loggedIn=this.props.tripsReducer.currentUser.username
 

    return (
      <div>

      <Router history={history}>
          <div className="App">
          <NavBar />

          <h3>Travel Journal</h3>
           
          { loggedIn ? <Logout /> : <div> <Login /> <Signup /> </div> }
          { loggedIn ? <TripForm /> : ""}

          <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/trips" component={Trips} />
                <Route path="/myTrips" component={MyTrips} /> 
                <Route path="/about" component={About}/>
          </Switch> 

          <Divider />

          <Footer />


          </div>
      </Router>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
    return {
      tripsReducer: state.tripsReducer
     }
  }

 


 export default connect(mapStateToProps, {getAllTrips})(App);