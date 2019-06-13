import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import AppResume from './app_resume'
import AppContact from './app_contact'
import AppFooter from './app_footer'
import App from '../App'
import '../App.css'
//import 'bootstrap/dist/css/bootstrap.css'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <App />,
    main: () => <AppFooter />
  },
  {
    path: "/resume",
    sidebar: () => <AppResume />,
    main: () => <AppFooter />
  },
  {
    path: "/contact" ,
    sidebar: () => <AppContact />,
    main: () => <AppFooter />
  }

];

function Navibar() {
  return (
    <Router>
    <div class ='headerNavi'>
    <nav id ='NaviBar' class="navbar navbar-inverse" style={{padding: "1px" }}>

      <div class="container-fluid">
        <div class="navbar-header">
            <Link class="navbar-brand" to="/">Orlando Buzana</Link>
        </div>
            <div>
                <ul class="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
          
            </div>
        </div>
    </nav>
    </div>
        <div style={{ flex: 1, padding: "1px" }}>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
              render={() => <Redirect to="/" />}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "4px" }}>
          {routes.map((route, index) => (
             // render secondary linked to main:'' 
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      
    
    </Router>
  );
}

export default Navibar;
