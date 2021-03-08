import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import {fetchTrips} from '../actions/fetchTrips'
import Trips from '../components/Trips'
import TripInput from '../components/TripInput'

class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips()
    }

    render () {
        return (
            <div>
              <Route path='/trips/new' component={TripInput}/>
              <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
              <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      trips: state.trips
    }
}

export default connect(mapStateToProps, {fetchTrips})(TripsContainer)