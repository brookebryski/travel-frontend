import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { Divider, Icon } from 'semantic-ui-react';

 

const Login = ({ loginFormData,  updateLoginForm, login }) => {

    const handleInputChange = event => {
         const { name, value } = event.target

         //create updatedLoginFormInfo object from loginForm state
         const updatedLoginFormInfo = {
            ...loginFormData,
            [name]: value
        }
     
        // pass updatedLoginFormInfo object to action creator
        updateLoginForm(updatedLoginFormInfo)
    }

    const handleSubmit = event => {
     
        event.preventDefault()

        //call asynch action creator and pass loginFormData as credentials
        login(loginFormData)


    }

    return (
        <div>
            <Divider />
        
        <form onSubmit={handleSubmit}>
            <div className="ui input">
            <input placeholder="user name" value={loginFormData.username} name="username" type="text" onChange={handleInputChange}/>
            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange}/><br/><br/>
            <button className="button button-login" type="submit" value="Log In" > <Icon name="sign in" /> Log in </button>
             </div>
        </form>
        </div>

    )
}

//loginForm state has user credentials
//{
//     username: "xxx",
//     password: "password"
// }

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)