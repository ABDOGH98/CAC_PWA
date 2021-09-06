import bg_home from "../img/bg_home.jpg";
import bg_home_mobile from "../img/bg_home_mobile.jpg";
import TypeAnimation from "react-type-animation";
import Carousel from "../components/Carousel";
import Aboutimg from "../img/about_1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
	return (
		<>
			<div className="relative z-0">
				<div>
					<img
						src={bg_home}
						alt="bg_home"
						width="500"
						height="500"
						className=" bg-cover w-screen md:h-screen md:block hidden object-cover"
					/>
				</div>
				<div>
					<img
						src={bg_home_mobile}
						alt="bg_home_mobile"
						width="500"
						height="500"
						className=" w-full h-screen md:h-screen block md:hidden object-cover"
					/>
				</div>
				<div className="absolute text-white sm:top-1/4  top-40 flex-row md:left-10  md:w-2/3 lg:w-1/2 sm:text-4xl font-bold font-sans text-3xl text-center md:text-left md:text-6xl ">
					<TypeAnimation
						className="h-16 sm:h-16 md:h-36"
						cursor={true}
						sequence={["Le Centre Africain De Cyber-sécurité"]}
					/>

					<p className=" sm:text-lg text-sm pt-11 text-left p-3 h-48 md:h-40 lg:h-40 ">
						Le centre Africain de Cyber-sécurité (CAC) est une organisation non
						gouvernementale qui a pour objectif de développer des synergies
						entre les chercheurs en sécurité de l’information ...
					</p>
					<a
						href="#aboutUS"
						className="sm:text-lg text-sm border-white sm:border-dashed border-2 bg-white text-black sm:bg-opacity-0 sm:text-white sm:p-3 p-2  mt-2 font-bold hover:bg-white hover:text-black outline-none "
					>
						Lire la suite
					</a>
				</div>
			</div>
			<span className="text-3xl font-bold text-primary p-5 flex justify-center">
				Evénements
			</span>
			<dir className="flex justify-center">
				<Carousel />
			</dir>
			<div
				id="aboutUS"
				className="grid md:grid-cols-3 grid-cols-1 mt-3 items-center "
			>
				<div className="flex justify-center ">
					<LazyLoadImage
						src={Aboutimg}
						effect="blur"
						width="400"
						alt="Aboutimg"
						className="w-50"
					/>
				</div>
				<div className="col-span-2">
					<span className="flex text-4xl font-bold py-7 text-primary justify-center">
						Le Centre Africain De Cyber-sécurité
					</span>
					<span className="flex md:w-2/4 px-3 md:px-0 text-justify text-gray-600 font-light m-auto">
						Le centre Africain de Cyber-sécurité (CAC) est une organisation non
						gouvernementale qui a pour objectif de développer des synergies
						entre les chercheurs en sécurité de l’information, Les Responsables
						de la Sécurité des Systèmes d’Information (RSSI), ainsi que les
						Directeurs des Systèmes d’Information (DSI) et les responsables de
						la technologie de l’information (IT) des organisations
						gouvernementales et non gouvernementales et le secteur privé au
						Maroc et dans les pays africains.
					</span>
				</div>
			</div>
			<div className=" flex justify-center">
				<iframe
					className="md:w-2/4  w-screen my-5  h-96"
					src="https://www.youtube.com/embed/-07q9wkHKIA"
					title="YouTube video player"
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/-07q9wkHKIA?autoplay=1><img src=https://i.ytimg.com/vi/-07q9wkHKIA/hqdefault.jpg alt='Video de CAC'><span>▶</span></a>"
					loading="lazy"
				></iframe>
			</div>
		</>
	);
}

export default Home;
