import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
	const feed = useSelector((store) => store.feed);
	const dispatch = useDispatch();

	const getFeed = async () => {
		if (feed) return;
		try {
			const res = await axios.get(BASE_URL + "/user/feed", {
				withCredentials: true,
			});
			dispatch(addFeed(res.data));
		} catch (err) {
			//ERROR PAGE
		}
	};
	useEffect(() => {
		getFeed();
    }, []);
    console.log(feed);
    
    return ( 
        feed && (
            <div className="flex flex-col items-center justify-center">
                <UserCard user={feed[0]} />
            </div>
        )
    );
};

export default Feed;
