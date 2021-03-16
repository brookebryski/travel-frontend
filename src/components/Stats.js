import React from 'react';
 


const Stats = ( {numToys, topThree}) => {
    
 

let items = topThree.map((i, key) => {
    return <div key={key}>{i.name} </div>
})

      return (
        <div>
             <i className='gamepad icon total-class' /><strong>Total trips</strong><p>{numTrips} </p>
            <i className='hotjar icon hot-class' /><strong>Top trips</strong>
            {items}

        </div>
      );
    }
    

  
   export default Stats