import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripCard from '../components/TripCard';
import { Card } from 'semantic-ui-react';
import Stats from '../components/Stats';
import { Divider } from 'semantic-ui-react'


class Trips extends Component {

    state = {newSearch: ""}


    handleInputChange = e => {
        this.setState({newSearch: e.target.value})
    }


    render() {
        //Destructure to extract data from objects into their own variable- ex: trip instead this.props.trip)
        const { tripsReducer} = this.props;
        
        //copy trips so sort does not mutate
        let topToys = [...tripsReducer.trips].sort((a, b) => (a.users.length > b.users.length) ? -1 : 1)
        let toysMatch = tripsReducer.trips.filter( (trip ) => trip.name.toLowerCase().includes(this.state.newSearch.toLowerCase()))
  
        return (
            <div className="Trips">
                <input placeholder="toyName" value={this.state.newSearch} name="toyName" type="text" onChange={this.handleInputChange} />
            <Divider />
            <Stats numToys={tripsReducer.trips.length} topThree={topToys.slice(0, 3)}/>
            <Divider />


 
                <Card.Group itemsPerRow={3}>
                    {/* { tripsReducer.trips.map((trip, id) => <TripCard  claimed={trip.claimed} numUsers={trip.users.length} key={id} trip={trip} />)} */}
                            { toysMatch.map((trip, id) => <TripCard  claimed={trip.claimed} numUsers={trip.users.length} key={id} trip={trip} />)}
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

