
import React from 'react';
//Presentational components are modular, reusable (and typically small) components that are concerned with "how stuff looks". In this pattern, they are not typically connected to a store. Typically not concerned with state of app
//Are resuable because they are seperated from redux specific code


const Footer = () => {
  return(
    <div className="Footer">
     <p className="FooterContent">Travel Journal © Copyright 2021</p>
     </div>
  )
}

export default Footer;