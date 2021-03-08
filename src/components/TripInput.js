import React from 'react'
import {connect} from 'react-redux'
import {addTrip} from '../actions/addTrip'


class TripInput extends React.Component {

    state = {
     location: '',
     days_spent: ''   
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrip(this.state)
        this.setState({
          location: '',
          days_spent: ''
        })
      }

    render() {
       return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>Trip Location </label>
          <input type='text' placeholder='Location' value={this.state.location} name="location" onChange={this.handleChange}/><br/>
          <label>Trip Duration (number of days): </label>
          <input type='text' placeholder='Duration' value={this.state.days_spent} name="days_spent" onChange={this.handleChange}/><br/>
          <input type="submit"/>
          </form>
        </div> 
        )
    }
}

export default connect(null, {addTrip})(TripInput) 