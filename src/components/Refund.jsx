import React from "react";

const CancellationRefundPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 py-10">
			<h1 className="text-4xl font-bold text-center mb-8">
				Cancellation and Refund Policy
			</h1>

			<p className="text-sm text-gray-200 mb-4">Effective Date: 02.06.2025</p>

			<section className="mb-6">
				<p className="text-base leading-relaxed text-gray-300">
					At <strong>devTinder</strong>, we strive to deliver a high-quality and
					seamless user experience. As our services are digital and
					personalized, we follow a strict no-cancellation and no-refund policy
					once a purchase or payment is made.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">
					Digital Nature of Services
				</h2>
				<p className="text-base leading-relaxed text-gray-300">
					Since the services provided on devTinder are digital, instant, and
					intangible, we do not entertain cancellations or provide refunds after
					an order is placed and payment is processed. Users are encouraged to
					carefully review service details before completing any transactions.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Payment Issues</h2>
				<p className="text-base leading-relaxed text-gray-300">
					If you believe a payment has been made in error or was unauthorized,
					please contact us immediately at [support@devtinder.in.net]. We will
					review such incidents on a case-by-case basis and cooperate with our
					payment gateway (Razorpay) to resolve the issue.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Refund Exceptions</h2>
				<p className="text-base leading-relaxed text-gray-300">
					Refunds may be granted only under exceptional circumstances, such as
					double payment or failed service delivery due to technical errors from
					our end. All such requests must be submitted with proper transaction
					details and within 7 days of the transaction date.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Processing Time</h2>
				<p className="text-base leading-relaxed text-gray-300">
					If a refund is approved, it will be processed within 7–10 business
					days and credited back to the original payment method as per
					Razorpay's standard refund timelines.
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
				<p className="text-base leading-relaxed text-gray-300">
					For any questions or concerns regarding this policy, please contact us
					at:
					<br />
					<strong>Email:</strong> support@devtinder.net
					<br />
					<strong>Address:</strong> BIT Mesra, Ranchi
				</p>
			</section>
		</div>
	);
};

export default CancellationRefundPolicy;
