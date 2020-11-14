import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div style={{position: 'relative', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: "rgba(59, 12, 12, 0.75)"}}> 
        <div  style={{
            
            backgroundImage: `url("./images/scott-graham.jpg")`, backgroundRepeat: 'no-repeat', width:'100%', height:'100vh', overflow:'hidden', backgroundSize:'cover', position:'relative'
        }}>
            <div className="container cont-height">
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6 text-center text">
                            <h1 className="text-center">KAWOLEGAL</h1>
                            <h3 className="text-center">A collaborative ecosystem for problem solvers and support for Startups</h3>
                            <br />
                            <p>
                                {/* <a href="../kawo_register/register.html"><button className="btn btn-info btn-lg text-btn">Register Now!</button></a> */}
                                <Link to="/register"><button className="btn btn-info btn-lg text-btn">Register Now!</button></Link>
                            </p>
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            </div>
       </div>

    );
}

export default Home;
