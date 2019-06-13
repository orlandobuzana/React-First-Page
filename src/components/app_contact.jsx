import React, { Component } from 'react';
import './components_styles/contact_style.css'
import '../App.css'


class AppContact extends Component {
  
    render() { 
        return (
         
            <form id="contact" action="" method="post" onSubmit={ (e) => this.formSubmit(e)}>
              <h3>Contact</h3>
              <h4>If this doesn't work, try smoke signals.</h4>
              <fieldset>
                <input placeholder="Your name" name="name" type="text" tabindex="1"   required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2"   name="email"  required />
              </fieldset>
              <fieldset>
                <input placeholder="Your Phone Number" type="tel" tabindex="3" required />
              </fieldset>
              <fieldset>
                <input placeholder="Your Web Site starts with http://" type="url" tabindex="4"  />
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your Message Here...." tabindex="5"  name="message"  required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Send</button>
              </fieldset>
            </form>  
          


          
           
          
          );
    }
}
 
export default AppContact;