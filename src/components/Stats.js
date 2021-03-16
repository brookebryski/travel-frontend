import React from 'react';
 


const Stats = ( {numTrips, topThree}) => {
    
 

let trips = topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>
})

      return (
        <div>
             <i className='gamepad icon total-class' /><strong>Total trips</strong><p>{numTrips} </p>
            <i className='hotjar icon hot-class' /><strong>Top trips</strong>
            {trips}

        </div>
      );
    }
    

  
   export default Stats