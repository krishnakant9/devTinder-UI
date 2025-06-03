import { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [age, setAge] = useState(user.age || "");
	const [gender, setGender] = useState(user.gender || "");
	const [about, setAbout] = useState(user.about);
	const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
	const [error, setError] = useState("");
	const [showToast, setShowToast] = useState(false);
	const dispatch = useDispatch();
	const saveProfile = async () => {
		setError("");
		try {
			const res = await axios.patch(
				BASE_URL + "/profile/edit",
				{
					firstName,
					lastName,
					age,
					gender,
					photoUrl,
					about,
				},
				{ withCredentials: true }
			);
			dispatch(addUser(res?.data));
			setShowToast(true);
			setTimeout(() => {
				setShowToast(false);
			}, 3000);
		} catch (err) {
			//console.log(err);
			setError(err?.response?.data);
		}
	};

	return (
		<>
			<div className="flex justify-between">
				<fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-80 border p-4 shadow-sm m-8">
					<legend className="fieldset-legend text-xl ">Edit Profile</legend>

					<label className="label">First Name</label>
					<input
						type="text"
						value={firstName}
						className="input"
						onChange={(e) => setFirstName(e.target.value)}
					/>

					<label className="label">Last Name</label>
					<input
						type="text"
						value={lastName}
						className="input"
						onChange={(e) => setLastName(e.target.value)}
					/>

					<label className="label">Age</label>
					<input
						type="number"
						value={age}
						className="input"
						onChange={(e) => setAge(e.target.value)}
					/>

					<label className="label">Gender</label>
					<select
						value={gender}
						className="input"
						onChange={(e) => setGender(e.target.value)}
					>
						<option value="">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
						<option value="Other">Other</option>

					</select>

					<label className="label">About</label>
					<input
						type="text"
						value={about}
						className="input"
						onChange={(e) => setAbout(e.target.value)}
					/>

					<label className="label">Photo</label>
					<input
						type="text"
						value={photoUrl}
						className="input"
						onChange={(e) => setPhotoUrl(e.target.value)}
					/>
					<p className="text-red-500">{error}</p>
					<button
						className="btn btn-outline bg-amber-50 text-cyan-500"
						onClick={saveProfile}
					>
						Save Profile
					</button>
				</fieldset>
				<div className="flex flex-col justify-center">
					<UserCard 
						user={{ firstName, lastName, age, gender, photoUrl, about }}
					/>
				</div>
			</div>

			{showToast && (
				<div className="toast toast-top toast-end">
					<div className="alert alert-success">
						<span>Profile Updated successfully.</span>
					</div>
				</div>
			)}
		</>
	);
};

export default EditProfile;
