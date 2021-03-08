import React from 'react';
import {connect} from 'react-redux'
import {TripsContainer} from './containers/TripsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
       <TripsContainer />
      </div>
    );
  }
  
}

export default App;
