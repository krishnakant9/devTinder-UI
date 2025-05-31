import React from 'react'

const Shimmer = () => {
    return (
			<div className="bg-base-200 flex justify-center w-full">
				<div className="card bg-base-300 w-96 shadow-sm m-8 h-108 rounded-2xl shimmer-effect">
					<figure>
						<div className="bg-gray-700 h-60 w-96 rounded-l-sm-2xl"></div>
					</figure>
					<div className="card-body">
						<h2 className="card-title bg-gray-700 w-full h-6"></h2>
						<p className="card-title bg-gray-700 w-full h-5"></p>
						<p></p>
						<div className="flex card-actions justify-end">
							<button className="card-title bg-gray-700 w-20 h-8 ml-5 rounded-lg"></button>
							<button className="card-title bg-gray-700 w-20 h-8 ml-5 rounded-lg"></button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Shimmer
