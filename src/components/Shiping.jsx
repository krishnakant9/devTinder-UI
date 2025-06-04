import React from "react";

const ShippingAndDelivery = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 py-10">
			<h1 className="text-4xl font-bold text-center mb-8 text-gray-300">
				Shipping and Delivery Policy
			</h1>

			<p className="text-sm text-gray-400 mb-4">Effective Date: 02.06.2025</p>

			<section className="mb-6">
				<p className="text-base leading-relaxed text-gray-300">
					At <strong>devTinder</strong>, all our services are delivered
					digitally and instantly upon successful payment. As such, there are no
					physical products to be shipped, and no traditional shipping timelines
					apply.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2 text-gray-300">
					Service Access
				</h2>
				<p className="text-base leading-relaxed text-gray-300">
					Upon confirmation of your transaction through our payment gateway
					(e.g., Razorpay), the purchased service or feature will be activated
					on your account immediately or within a short processing time. You
					will receive confirmation via email or notification within the
					platform.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2 text-gray-300">
					Delays or Failures
				</h2>
				<p className="text-base leading-relaxed text-gray-300">
					In rare cases, there may be a delay in service delivery due to network
					issues, server errors, or payment verification delays. If you face any
					issues accessing a service after payment, please contact us at [Insert
					Contact Email], and we will ensure timely resolution.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2 text-gray-300">
					No Physical Shipment
				</h2>
				<p className="text-base leading-relaxed text-gray-300">
					We do not deliver any physical products. All services are confined to
					digital usage within the devTinder platform. As such, there is no
					tracking number or courier information associated with any purchase.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2 text-gray-300">
					Contact Us
				</h2>
				<p className="text-base leading-relaxed text-gray-300 mb-4">
					For any queries or concerns related to service delivery, please reach
					out to:
				</p>
				<ul className="list-disc list-inside text-gray-300 space-y-1">
					<li>Email: support@devtinder.in.net</li>
					<li>Address: BIT Mesra, Ranchi</li>
				</ul>
			</section>
		</div>
	);
};

export default ShippingAndDelivery;
