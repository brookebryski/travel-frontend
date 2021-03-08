import React from 'react'


class TripInput extends React.Component {

    state = {
     location: '',
     days_spent: ''   
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

export default TripInput 