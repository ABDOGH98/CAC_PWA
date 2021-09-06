import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavMobile() {
	return (
		<>
			<motion.div
				className=" w-full  h-screen bg-black  flex justify- pt-3 pb-3 md:pl-3 z-10 absolute top-16 "
				animate={{ x: 0, animationDuration: 5 }}
				initial={{ x: -300 }}
			>
				<div className="relative flex-1 justify-around  items-center  text-white ">
					<Link to="/actus">
						<div className="px-7 cursor-pointer font-bold flex justify-around mt-7">
							Actualite
						</div>
					</Link>
					<Link to="/articles">
						<div className="px-7 cursor-pointer font-bold flex justify-around mt-16">
							Articles
						</div>
					</Link>
					<Link to="/contact">
						<div className="px-7 cursor-pointer font-bold flex justify-around my-16">
							Contact
						</div>
					</Link>
				</div>
			</motion.div>
		</>
	);
}

export default NavMobile;
