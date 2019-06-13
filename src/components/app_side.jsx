import React, { Component } from 'react';
import portifoliophoto from '../images/portifoliophoto.png';
import '../App.css';

class SideBlock extends Component {
    state = {  }
    render() { 
        return (     
        <aside>
         <img src={portifoliophoto} id = "Self-photo" alt="A Photo of Orlando" title = "Orlando's only good photo" / >
      <address rel="author">Orlando Buzana</address>
        </aside>

         );
    }
}
 
export default SideBlock;