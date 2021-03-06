import React, { Component } from 'react'; 
import './Trip.css';
import '../App.css';
import {Card, Image } from 'semantic-ui-react';
import { claimTrip, unclaimTrip } from '../actions/tripHistories';
import { connect } from 'react-redux';
 
class TripCard extends Component {
  
  
  constructor(props) {
    //super calls the constructor of parent class Component
    super(props);

    //set initial state in constructor since it runs first
    this.state = { liked: false }
 
  }

  //alter state when like button is clicked using setState
  clickHandler = () => {
    this.setState(state => ({
      liked: !state.liked
    }));
   }
 

 
  render(){
    //Destructure to extract data from objects into their own variable- ex: trip instead this.props.trip)
    const { trip, numUsers, claimTrip, unclaimTrip, tripsReducer } = this.props;

   let buttonsVisible =  
   <div>
   { trip.claimed !== "true" ? 
    <div className="claim-button" onClick={() => {claimTrip(trip, tripsReducer.currentUser)}}><i className='plus icon plus-class'  />I went here</div> :
    <div className="unclaim-button" onClick={() => {unclaimTrip( tripsReducer.tripHistories, trip, tripsReducer.currentUser)}}><i className="minus icon minus-class" />I did not go here</div> 
   }   </div>


    return(
      
       <Card>
            <div key={trip.id} >

                <Card.Content>
                    <Image className="TripImage" src={trip.url} alt={trip.name} />
                    <Card.Header><strong>{trip.name}</strong></Card.Header>
                    <Card.Description>{trip.description}</Card.Description>
  
   

 
                </Card.Content>

                <Card.Content extra>
                    <i className='users icon user-class' /> {numUsers !== undefined ? trip.users.length : 0}
                 </Card.Content>
 

            {tripsReducer.currentUser.username ? buttonsVisible : ""}
 

             </div>
        </Card>
   
    )
  }
}


 
const mapStateToProps = state => {
  return {
    trips: state.trips,
    user: state.currentUser,
    tripHistories: state.tripHistories,
    tripsReducer: state.tripsReducer
  }
}

export default connect(mapStateToProps, {claimTrip, unclaimTrip})(TripCard);
 
