import React from "react";
import { BASE_URL, defaultPhotoUrl } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUserFormFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
	const { _id,firstName, lastName, email, age, photoUrl, about, skills, gender } =
		user;
	const dispatch = useDispatch();

	const handleSendRequest = async (_id, status) => {
		try {
			const res = await axios.post(
				BASE_URL + "/request/send/" + status + "/" + _id,
				{},
				{ withCredentials: true }
			);
			dispatch(removeUserFormFeed(_id));
		} catch (err) {
			// Handle error
			console.error("Error sending request:", err);
		}
	};

	return (
		<div className="card bg-base-300 w-96 h-120 shadow-sm m-8">
			<figure>
				<img src={photoUrl || defaultPhotoUrl} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{firstName + " " + lastName}</h2>
				{age && gender && <p>{age + ", " + gender}</p>}
				<p>{about} </p>
				<div className="card-actions justify-end">
					<button
						className="btn btn-primary"
						onClick={() => handleSendRequest(_id, "interested")}
					>
						Interested
					</button>
					<button
						className="btn btn-primary"
						onClick={() => handleSendRequest(_id, "ignored")}
					>
						Ignored
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
