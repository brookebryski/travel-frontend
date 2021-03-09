import React from 'react'
import {connect} from 'react-redux'

class ActivityInput extends React.Component {

    state = {
        kind: 'sight',
        location: '',
        description: ''
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addActivity(this.state, this.props.trip.id)
        this.setState({
          kind: 'sight',
          location: '',
          description: ''
        })
      }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>Activity Type:</label>
                 <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                    <option>sight</option>
                    <option>cuisine</option>
                </select>
                 <label> Location:</label>
                <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                <label> Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                 <input type="submit"/>
             </form>
            </div>
        )
    }
}

export default connect(null)(ActivityInput)