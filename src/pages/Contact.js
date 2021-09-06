import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
	return (
		<>
			<ContactForm />
			<div className=" flex justify-center relative top-60 p-5 shadow-xl">
				<iframe
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.445444241565!2d-6.8535294661818424!3d33.99774847178012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8e3eeb45d9%3A0x5a97f762e0faf65f!2s37%20Av.%20de%20France%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1629557909087!5m2!1sfr!2sma"
					width="1200"
					height="400"
					className="border-0"
					loading="lazy"
				></iframe>
			</div>
		</>
	);
}

export default Contact;
