import React from 'react';
 
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';

import '../App.css';
 


const NavBar = () => {

 
    return (

 
        <div className="nav">
          <Menu> 
       

      
            <Link to='/' className='trip'>
                Home
            </Link>

            <Link to='/trips' className='trip'>
                View All Trips
            </Link>

            <Link to='/myTrips' className='trip'>
                View My Trips
            </Link> 
 

            <Link to='/inspiration' className='trip'>
                Inspiration
            </Link>

   
             

        </Menu>
        </div>
    )
}
 


export default NavBar