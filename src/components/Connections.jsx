import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import Loader from "./Loader";

const Connections = () => {
	const connections = useSelector((store) => store.connection);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const fetchConnection = async () => {
		try {
			const res = await axios.get(BASE_URL + "/user/connection", {
				withCredentials: true,
			});
			dispatch(addConnection(res.data));
		} catch (err) {
			//Handle Error
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchConnection();
	}, []);

	
	if (loading) {
		return <Loader />;
	} else if (!loading && connections.length == 0) {
		return (
			<h1 className="text-3xl flex justify-center my-20">
				No Connections Found !!
			</h1>
		);
	}

	return (
		<div className="flex flex-col justify-center my-10">
			<h1 className="text-bold text-4xl from-neutral-50 mx-auto my-5">
				Connections
			</h1>
			{(connections) && connections.map((connection) => {
				const { firstName, lastName, photoUrl, about, skill, gender, age } =
					connection;
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
									<div className="card-actions justify-end">
										<button className="btn btn-primary">View Profile</button>
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

export default Connections;
