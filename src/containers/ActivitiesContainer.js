import React from 'react'
import ActivityInput from '../components/ActivityInput'
import Activities from '../components/Activities'


class ActivitiesContainer extends React.Component {

    render () {
        return (
         <div>
             <ActivityInput/>
             <Activities/>
         </div>
        )
    }



}

export default ActivitiesContainer