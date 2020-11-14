import React from 'react';
// import Bootstrap from 'bootstrap';
import {
    BrowserRouter as AppRouter,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Startups from './components/Startups';

const Router = () => {
    return (
        <AppRouter>
            <navLink className="navbar navbar-default navbar-fixed-top topnav homeimg">
                <div className="container navbar-links">
                    {/* Brand and toggle get grouped for better mobile display */}
	                <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#"><img src={'./images/kawo-legal-logo.png'} style={{width: 200, height: 90}} /></a>
	                </div>
                    
                        {/* Collect the nav links, forms, and other content for toggling */}
	                <div>
                            <ul className="link-nav"> {/*navbar-nav*/}
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/startups">Startups</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                    </div>
	            </div> 
	        </navLink>

            <Route exact path="/" component={Home} />
            <Route path="/startups" component={Startups} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            {/* <Route path="/services/:id" component={ServiceDetails} /> */}
            
        </AppRouter>
    );
}

export default Router;
