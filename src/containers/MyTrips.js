import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripCard from '../components/TripCard';
import { Card, Divider } from 'semantic-ui-react';
 
class MyTrips extends Component {


 


    render() {
      //Destructure to extract data from objects into their own variable- ex: toy instead this.props.toy)
      const { tripsReducer  } = this.props;
  
      
           return (
  
            <div className="My Trips">
              <Divider hidden />
  
             
  
                {tripsReducer.currentUser.username ? <h3>{tripsReducer.currentUser.username}'s Trips</h3> : <strong>Log in or sign up</strong>}
  
                <Divider hidden />
  
                
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
  
  export default connect(mapStateToProps)(MyTrips);
  