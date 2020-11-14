import React from 'react';

const Register = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8 content">
                        <h3>Join KawoLegal. Sign up to get your Startup listed now!</h3>
                        <br />

                        <div className="signup">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputFullName">Full Name</label>
                                    <input type="fullname" className="form-control" id="exampleInputFullName" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputConfirmPassword1">Confirm Password</label>
                                    <input type="confirmpassword" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" />
                                </div>

                                    <button type="button" className="btn btn-primary">Sign up</button>
                            </form>
                        </div>

                    </div>
                <div className="col-md-2"></div>
            </div>
	    </div>
    );
}

export default Register;
