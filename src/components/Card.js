import { Link, useLocation } from "react-router-dom";

function Card({ field, id }) {
	const location = useLocation();

	return (
		<>
			<div className="relative top-36  px-5 lg:px-11 md:px-5 mb-4 ">
				<div className="flex justify-center rounded-lg overflow-hidden ">
					<img
						src={"https:" + field.cardeImg.fields.file.url}
						alt={"https:" + field.cardeImg.fields.title}
						width="400"
						height="300"
						className="w-full h-72 object-cover"
					/>
				</div>
				<Link to={location.pathname + "/" + id}>
					<div className="relative -top-3 transform rotate-2 p-2 lg:px-16 lg:py-6 bg-gray-900 rounded-lg text-white ">
						<p>{field.title}</p>
					</div>
				</Link>
			</div>
		</>
	);
}

export default Card;
