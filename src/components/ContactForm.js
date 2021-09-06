import React, { useState } from "react";
import emailjs from "emailjs-com";
import Recaptcha from "react-recaptcha";

export default function ContactForm() {
	const serviceID = "service_1capq3t";
	const templateID = "template_z288cli";
	const [object, setObject] = useState("");
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [send, setSend] = useState(false);
	const [human, setHuman] = useState(false);

	const verifyCallback = (res) => {
		if (res) {
			setHuman(true);
		}
	};
	const loadCallback = () => {
		console.log("loaded captcha");
	};
	let recaptchaInstance;

	const resetRecaptcha = () => {
		recaptchaInstance.reset();
	};

	const sendMail = (e) => {
		e.preventDefault();
		if (human) {
			emailjs
				.sendForm(serviceID, templateID, e.target, "user_OZz52nbWNT6Mmy0zPaFZG")
				.then(
					() => {
						setSend(true);
						setTimeout(() => {
							setSend(false);
						}, 5000);
					},
					(err) => {
						alert(JSON.stringify(err));
					},
				)
				.then(() => {
					setEmail("");
					setObject("");
					setName("");
					setMessage("");
					setHuman(false);
				});
		}
	};
	return (
		<>
			<div className="relative top-56 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
				<div>
					<span className=" flex text-4xl font-bold text-red-600 justify-center">
						Contact Us
					</span>
					<div className="location flex items-center mx-1 lg:mx-2 my-2 ">
						<div className="p-5 bg-gray-100 w-min rounded-3xl shadow-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div className="mx-4 md:px-1 lg:px-4">
							37, Avenue de France Agdal <br /> Rabat 10 000
						</div>
					</div>

					<div className="mail mx-1 lg:mx-2 my-3 flex items-center">
						<div className=" p-5 bg-gray-100 w-min rounded-3xl shadow-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div className="mx-4 md:px-1 lg:px-4">cacafrica2020@gmail.com</div>
					</div>
					<div className="phone mx-1 lg:mx-2 flex items-center">
						<div className=" p-5 bg-gray-100 w-min rounded-3xl shadow-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
						</div>
						<div className="mx-4 md:px-1 lg:px-4">0537 778 377</div>
					</div>
				</div>
				<form className=" md:col-span-2  md:ml-5" onSubmit={sendMail}>
					<div
						className={
							send
								? "mx-1 p-2 text-md bg-green-200 rounded-lg"
								: "mx-1 p-2 text-md bg-green-200 rounded-lg invisible"
						}
					>
						Message send
					</div>
					<div className="my-3 mx-1">
						<input
							value={object}
							onChange={(e) => setObject(e.target.value)}
							type="text"
							name="object"
							id="object"
							placeholder="Object *"
							className="outline-none border-solid p-3 rounded-lg bg-gray-100 w-full md:w-5/6 lg:w-full"
							required
						/>
					</div>
					<div className="m-1">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							name="name"
							id="name"
							placeholder="Name *"
							className="outline-none border-solid p-3 rounded-lg bg-gray-100 w-full md:w-5/6 lg:w-full"
							required
						/>
					</div>
					<div className="my-3 mx-1">
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							name="email"
							id="email"
							placeholder="Email *"
							className="outline-none border-solid p-3 rounded-lg bg-gray-100 w-full md:w-5/6  lg:w-full"
							required
						/>
					</div>
					<div className="m-1">
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							name="message"
							id="message"
							placeholder="Message . . . ."
							cols="70"
							rows="8"
							className="outline-none border-solid p-2 rounded-lg bg-gray-100 w-full md:w-5/6  lg:w-full"
							required
						/>
					</div>

					<div className="m-1">
						<Recaptcha
							sitekey={process.env.REACT_APP_KEY}
							render="explicit"
							verifyCallback={verifyCallback}
							onloadCallback={loadCallback}
							ref={(e) => (recaptchaInstance = e)}
						/>
					</div>
					<div className="m-1">
						<button
							className="rounded-lg outline-none border-2  font-bold border-red-600 py-2 px-6 hover:bg-red-600 hover:text-white hover:border-transparent items-center transition duration-300 ease-in-out"
							type="submit"
							onClick={resetRecaptcha}
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
