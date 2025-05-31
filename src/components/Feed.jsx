import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import { useNavigate } from "react-router";
import Shimmer from "./Shimmer";

const Feed = () => {
	const feed = useSelector((store) => store.feed);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userData = useSelector((store) => store.user);
	const [loading, setLoading] = useState(true);
	const getFeed = async () => {
		if (feed) return;
		try {
			const res = await axios.get(BASE_URL + "/user/feed", {
				withCredentials: true,
			});
			console.log(res.data);
			dispatch(addFeed(res.data));
		} catch (err) {
			//Error
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (userData) {
			getFeed();
		}
	}, [userData]);
	// console.log(feed);

	if (loading) {
		return (
			<Shimmer/>
		)
	}

	if (userData && !feed && !setLoading)
		return (
			<h1 className="flex text-4xl justify-center my-10">
				No New User Found !
			</h1>
		);
	return (
		feed && (
			<div className="fade-in flex flex-col items-center justify-center">
				<UserCard user={feed[0]} />
			</div>
		)
	);
};

export default Feed;
