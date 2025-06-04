import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
		<footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-2">
			<nav className="grid grid-flow-col gap-4">
				<Link to="/privacy" className="link link-hover">Privacy Policy</Link>
				<Link to="/refund" className="link link-hover">Refund Policy</Link>
				<Link to="/delivery" className="link link-hover">Shipping Policy</Link>
				<Link to="/contact" className="link link-hover">Contact Us</Link>
				<Link to="/tnc" className="link link-hover">TnC</Link>
			</nav>

			<aside>
				<p className="">
					Copyright © {new Date().getFullYear()} - All right reserved by ACME
					Industries Ltd
				</p>
			</aside>
		</footer>
	);
}

export default Footer
