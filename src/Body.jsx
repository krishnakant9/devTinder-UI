import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-1">
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Body;
