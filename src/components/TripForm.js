import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTripFormData } from '../actions/tripForm';
import { createTrip} from '../actions/trips';
import { Form, Icon, Divider } from 'semantic-ui-react';
 


class TripForm extends Component {


  handleOnChange = event => {
    const { name, value } = event.target;
    const currentTripFormData = Object.assign({}, this.props.tripFormData, {
      [name]: value
    })
     
    this.props.updateTripFormData(currentTripFormData)
  }


  handleonSubmit = event => {
    event.preventDefault()
    //console.log(this.props.tripFormData)
    
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
             onChange={this.handleOnChange}
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
    //errors: state.errors
  }
}

export default connect(mapStateToProps, { updateTripFormData, createTrip})(TripForm);