import React from 'react'
import { defaultPhotoUrl } from '../utils/constants';

const UserCard = ({ user }) => {
    const { firstName,lastName,email,age,photoUrl,about,skills,gender } = user;
  return (
		<div className="card bg-base-300 w-96 shadow-sm m-8">
			<figure>
				<img src={photoUrl || defaultPhotoUrl} alt="Shoes" />
			</figure>
			<div className="card-body">
              <h2 className="card-title">{firstName+" "+lastName}</h2>
              {age && gender && <p>age + ", " + gender</p>}
				<p>{about} </p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Interested</button>
					<button className="btn btn-primary">Ignored</button>
				</div>
			</div>
		</div>
	);
}

export default UserCard
