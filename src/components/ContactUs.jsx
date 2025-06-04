import React from "react";

const ContactUs = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
			<div className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-2xl w-full text-gray-300">
				<h1 className="text-4xl font-bold mb-6 text-center text-white">
					Contact Us
				</h1>

				<p className="text-md mb-6 text-center">
					Have questions, feedback, or need assistance? Reach out to us using
					the details below — we’re here to help.
				</p>

				<div className="space-y-6">
					<div>
						<h2 className="text-lg font-semibold mb-1 text-white">📧 Email</h2>
						<p className="text-sm">support@devtinder.com</p>
					</div>

					<div>
						<h2 className="text-lg font-semibold mb-1 text-white">
							📍 Address
						</h2>
						<p className="text-sm leading-relaxed">
							devTinder
							<br />
							BIT Mesra, Ranchi
							<br />
							Jharkhand, India – 835215
						</p>
					</div>

					<div>
						<h2 className="text-lg font-semibold mb-1 text-white">📞 Phone</h2>
						<p className="text-sm">+91-9876543210 (Mon–Fri, 10am – 6pm IST)</p>
					</div>

					<div>
						<h2 className="text-lg font-semibold mb-1 text-white">
							🔗 Socials
						</h2>
						<p className="text-sm">
							Instagram: <span className="text-white">@devtinder</span>
							<br />
							Twitter: <span className="text-white">@devtinder_app</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
