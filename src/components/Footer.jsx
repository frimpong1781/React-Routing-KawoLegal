import React from 'react';

const Footer = () => {
    return (
    <footer className="footer mobi-footer">
		<div className="container container-footer">
        <div className="row">
		    <div className="col-md-6 foot-txt">
		    	<ul>
		        	<li> copy 2020 KawoLegal. All Rights Reserved</li>
		    	</ul>
		    </div>

	    	<div className="col-md-6 social">
		      	<ul>
			        <li><a href=""><i className="icon-facebook"></i></a></li>
			        <li><a href=""><i className="icon-twitter"></i></a></li>
			        <li><a href=""><i className="icon-linkedin"></i></a></li>
			        <li><a href=""><i className="icon-instagram"></i></a></li>
		      	</ul>
	    	</div>
        </div>
	  	</div>
	</footer>
    );
}

export default Footer;
