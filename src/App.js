import React, { Component } from 'react';
import Image from './images/frontpage.png'
import './App.css'
class App extends Component{
  render(){
   return(
     <div class = 'fc'>
     <aside >
     <img src={Image} id = "openingImg" alt="A Photo of a computer screen" title = "Working code" / >

     </aside>
     <main id='Projects'>
       
        <p><h1>Projects</h1></p>
        <div style ={{textAlign:"center"}}>
         <hr style={{color:"black", sixe:"2px;"}}/>
        </div>

        <div id ="Project1" style={{width:"auto",height:"100px",backgroundColor:"Black"}}>
        <a>Coming soon...</a>
        </div>
        <div id ="Project2" style={{width:"auto",height:"100px",backgroundColor:"grey"}}>
        <a>Coming soon...</a>
        </div>
        <div id ="Project3" style={{width:"auto",height:"100px",backgroundColor:"lightgrey"}}>
        <a>Coming soon...</a>
        </div>
      </main>
      
   </div> 
   );
  }
}
export default App;