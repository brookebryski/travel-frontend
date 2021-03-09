import React from 'react'
import ActivityInput from '../components/ActivityInput'
import Activities from '../components/Activities'
import Trip from '../components/Trip'


class ActivitiesContainer extends React.Component {

    render () {
        return (
         <div>
             <ActivityInput trip={this.props.trip}/>
             <Activities activities={this.props.trip && this.props.trip.activities}/>
         </div>
        )
    }



}

export default ActivitiesContainer