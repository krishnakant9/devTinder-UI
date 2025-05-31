import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addRequest,removeRequest} from "../utils/requestSlice";
import axios from "axios";
import Loader from "./Loader";
const Requests = () => {
	const requests = useSelector((store) => store.request);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	
	const fetchRequest = async () => {
		try {
			const res = await axios.get(BASE_URL + "/user/requests/received", {
				withCredentials: true,
			});
			dispatch(addRequest(res.data));
		} catch (err) {
			//Handle Error
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchRequest();
	}, []);

	if (loading) {
		return <Loader />;
	} else if (!loading && requests.length == 0) {
		return (
			<h1 className="text-3xl flex justify-center my-20">
				No Connection Request Pending !!
			</h1>
		);
	}

	const handleSendRequest = async (status, userId) => {
		try {
			const res = await axios.post(
				BASE_URL + "/request/review/" + status + "/" + userId,
				{},
				{ withCredentials: true }
			);
			dispatch(removeRequest(userId))
		} catch {
			//error
		} 
	};

	return (
		<div className="flex flex-col justify-center my-10">
			<h1 className="text-bold text-4xl from-neutral-50 mx-auto my-5">
				Requests
			</h1>

			{requests.map((request) => {
				const {
					_id,
					firstName,
					lastName,
					photoUrl,
					about,
					skill,
					gender,
					age,
				} = request.fromUserId;
				console.log(request);
				return (
					<div>
						<div className=" max-w-1/2 my-5 mx-auto ">
							<div className="card card-side bg-base-300 shadow-sm card-sm">
								<figure>
									<img src={photoUrl} alt="Movie" className="h-50 w-50" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">{firstName + " " + lastName}</h2>
									{age && gender && <p>{`${age}, ${gender}`}</p>}
									<p>{about}</p>
									<div className="card-actions justify-between">
										<button
											className="btn btn-success"
											onClick={() => handleSendRequest("accepted", request._id)}
										>
											Accept
										</button>
										<button
											className="btn btn-error"
											onClick={() => handleSendRequest("rejected",request._id)}
										>
											Reject
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Requests;
