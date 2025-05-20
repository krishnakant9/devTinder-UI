import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const Navigate = useNavigate();
	const userData = useSelector((store) => store.user);

	const fetchUser = async () => {
		if (userData) return;
		try {
			const res = await axios.get(BASE_URL + "/profile", {
				withCredentials: true,
			});
			dispatch(addUser(res.data));
		} catch (err) {
			if (err.status === 401) {
				Navigate("/login");
			}
			console.log(err);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

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
