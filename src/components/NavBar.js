import React from 'react';
 
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

import '../App.css';
 


const NavBar = () => {

 
    return (

 
        <div className="nav">
          <Menu> 
       

      
            <Link to='/' className='item'>
                Home
            </Link>

            <Link to='/trips' className='item'>
                View All Trips
            </Link>

            <Link to='/myStuff' className='item'>
                View My Trips
            </Link> 
 

            <Link to='/about' className='item'>
                About Us
            </Link>

   
             

        </Menu>
        </div>
    )
}
 


export default NavBar