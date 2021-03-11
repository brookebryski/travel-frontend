import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser'
import {Icon } from 'semantic-ui-react';
 


const Logout = ({ logout }) => {


 
    return (
        <form onSubmit={logout}>

            
           <button className="button button-logout" type="submit" value="Log Out" ><Icon name="sign out" />Log out</button>
            
        </form>
    )
}
 


export default connect(null, { logout })(Logout)