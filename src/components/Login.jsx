import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [isLoginForm, setIsLoginForm] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logIn = async () => {
		try {
			const res = await axios.post(
				BASE_URL + "/login",
				{ email, password },
				{ withCredentials: true }
			);
			dispatch(addUser(res.data));
			navigate("/");
		} catch (err) {
			setError(err?.response?.data || "Something went wrong");
		}
	};

	const SignUp = async () => {
		try {
			const res = await axios.post(
				BASE_URL + "/signup",
				{ firstName, lastName, email, password },
				{ withCredentials: true }
			);
			dispatch(addUser(res.data));
			navigate("/profile");
		} catch {
			//Handle Error
		}
	};

	const borderStyle = error
		? "border border-red-500"
		: "border border-gray-300";

	return (
		<div className="flex justify-center my-8">
			<div className="card card-dash bg-base-300 w-96 shadow-xl h-auto">
				<div className="card-body">
					<h2 className="card-title text-4xl self-center my-2">
						{isLoginForm ? "Login" : "SignUp"}
					</h2>
					<div className="card-actions flex flex-col items-center w-full">
						{!isLoginForm && (
							<>
								<input
									type="name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									placeholder="firstName"
									className={`my-2 w-full px-4 py-2 rounded ${borderStyle} bg-base-100 outline-none`}
								/>
								<input
									type="name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									placeholder="LastName"
									className={`my-2 w-full px-4 py-2 rounded ${borderStyle} bg-base-100 outline-none`}
								/>
							</>
						)}
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="xyz@mail.com"
							className={`my-2 w-full px-4 py-2 rounded ${borderStyle} bg-base-100 outline-none`}
						/>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
							className={`my-2 w-full px-4 py-2 rounded ${borderStyle} bg-base-100 outline-none`}
						/>
						{/* Error message aligned to start (left) of row */}
						<div className="h-5 w-full">
							{error && (
								<p className="text-red-500 text-sm text-left">{error}</p>
							)}
						</div>
						<button
							className="btn btn-primary btn-lg py-4 mt-2 w-full"
							onClick={isLoginForm ? logIn : SignUp}
						>
							{isLoginForm ? "Login" : "SignUp"}
						</button>
					</div>
					<p
						onClick={() => setIsLoginForm(!isLoginForm)}
						className="cursor-pointer my-2 "
					>
						{isLoginForm
							? "New User? Signup here"
							: "Existing User? Login Here"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
