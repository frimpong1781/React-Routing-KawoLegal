import React from 'react';

const Login = () => {
    return (
        <div className="container">
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8 content">
				<h3>Already a Member? Login to add your Startup.</h3>
				<br />

				<div className="signup">
					<form>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					  </div>
					  
					  <button type="button" className="btn btn-primary">Sign in</button>
					</form>
				</div>

			</div>
			<div className="col-md-2"></div>
		</div>
	</div>
    );
}

export default Login;
