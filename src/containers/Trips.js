import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripCard from '../components/TripCard';
import { Card } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'
import { getAllTrips } from "../actions/trips";

class Trips extends React.Component {

  componentDidMount() {
    this.props.getAllTrips()
  }
//instead of <tripCard I did a simple console.log to know i was rendering this
  render() {
   return (
     <div>
    <tripCard/>
     </div>
   )
   }
  }
    
         

const mapStateToProps = (state) => {
  return ({
    trips: state.trips
   })
}

export default connect(mapStateToProps, {getAllTrips})(Trips);
/*
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripCard from '../components/TripCard';
import { Card } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'


class Trips extends Component {

 


  render() {
    //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
    const { tripsReducer  } = this.props;

    
         return (

          <div className="Trips">
              
               <Card.Group itemsPerRow={3}>
               {tripsReducer.userTrips.map((trip, id) => <TripCard numUsers={trip.users.length} claimed={trip.claimed} key={id} trip={trip} />)}

              </Card.Group>
           </div>
      )
  }

}

const mapStateToProps = (state) => {
  return ({
    tripsReducer: state.tripsReducer
   })
}

export default connect(mapStateToProps)(Trips);
*/

