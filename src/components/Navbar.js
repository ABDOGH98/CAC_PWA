import logo from "../img/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavMobile from "./NavMobile";

function Navbar() {
	const [showNav, setShowNav] = useState(false);
	let location = useLocation();
	useEffect(() => {
		setShowNav(false);
	}, [location]);

	return (
		<>
			<div className=" w-full bg-black  flex items-center pt-3 pb-3 md:pl-3 fixed z-10">
				<Link to="/">
					<div>
						<img src={logo} alt="logo" width={200} heigh={300} />
					</div>
				</Link>
				{showNav && <NavMobile />}
				<div
					className="sm:hidden flex text-white pr-2 cursor-pointer flex-1 justify-end"
					onClick={() => setShowNav(!showNav)}
				>
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
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>

				<div className="relative  items-center   text-white   flex-1 sm:flex hidden">
					<Link to="/actus">
						<div className="px-7 cursor-pointer font-bold">Actualite</div>
					</Link>
					<Link to="/articles">
						<div className="px-7 cursor-pointer font-bold">Articles</div>
					</Link>
					<Link to="/contact">
						<div className="px-7 cursor-pointer font-bold">Contact</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navbar;
