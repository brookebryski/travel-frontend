import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTripFormData } from '../actions/tripForm';
import { createTrip} from '../actions/trips';
import { Form, Icon, Divider } from 'semantic-ui-react';
 


class TripForm extends Component {

// we use an arrow function here (to declare this as a class property - instead of class method) because arrow functions don't define their own version of this and default to the context they are in
// this is important because class methods are the context of the prototype chain, not an instance
// this way, handleChange() will always be bound to the particular instance of the component it is defined in
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTripFormData = Object.assign({}, this.props.tripFormData, {
      [name]: value
    })
     
    this.props.updateTripFormData(currentTripFormData)
  }


  handleonSubmit = event => {
    event.preventDefault()
    
     const { createTrip, tripFormData } = this.props;
      createTrip(tripFormData);

  }

  render() {
    const { name, description, url } = this.props.tripFormData;
    return(
      <div>
      <Divider />

    <Form onSubmit={this.handleonSubmit}>
          <Form.Group widths='equal'>
           <Form.Input
             fluid label='Name'
             onChange={this.handleOnChange} //we can do this since we defined this as an arrow function. Refers to the definition of a function that takes in the event as an argument, so we do not need an onChange arrow function callback
             placeholder='Name'
             value={name}
             name='name'
            />
            <Form.Input
             fluid label='Description'
             onChange={this.handleOnChange}
             placeholder='Description'
             value={description}
             name='description'
            />
            <Form.Input
             fluid label='URL'
             onChange={this.handleOnChange}
             placeholder='Image URL'
             value={url}
             name='url'
            />
          
          </Form.Group>
          


        <button className="button button-add" type="submit" value="Add Trip Out" ><Icon name="gamepad" />Add Trip</button>

        </Form>
          
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    tripFormData: state.tripFormData,
  }
}

export default connect(mapStateToProps, { updateTripFormData, createTrip})(TripForm);
// we do not need to write mapDispatchToProps because if not given any arguments, connect will return dispatch as a prop to the component we are wrapping with connect