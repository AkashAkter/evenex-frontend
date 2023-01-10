import React from "react";
import footerLogo from "../../../assets/img/footer-logo.png"
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaStackOverflow, FaTwitter } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="footer footer-center p-10 bg-white text-base-content rounded">
			<div>
				<Link to="/">
					<img src={ footerLogo } alt="logo" />
				</Link>
				<p className="py-3 text-lg">
					We bring over 2,600 journalists from the world’s leading <br />publications to Web Summit. They’re part of the reason why the event
				</p>
			</div>
			<div className="grid grid-flow-col gap-8">
				<Link to="/" className="link link-hover">Home</Link>
				<Link to="/" className="link link-hover">About us</Link>
				<Link to="/" className="link link-hover">Contact</Link>
				<Link to="/" className="link link-hover">Pricing</Link>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4 text-xl ">
					<div className="card w-16 h-16  bg-base-100 shadow-xl flex justify-center items-center">
						<FaFacebookF></FaFacebookF>
					</div>
					<div className="card w-16 h-16  bg-base-100 shadow-xl flex justify-center items-center">
						<FaGithub></FaGithub>
					</div>
					<div className="card w-16 h-16  bg-base-100 shadow-xl flex justify-center items-center">
						<FaStackOverflow></FaStackOverflow>
					</div>
					<div className="card w-16 h-16  bg-base-100 shadow-xl flex justify-center items-center">
						<FaTwitter></FaTwitter>
					</div>
				</div>
			</div>
			<div>
				<p>Copyright © 2023 - All right reserved by evenex</p>
			</div>
		</footer>
	);
};

export default Footer