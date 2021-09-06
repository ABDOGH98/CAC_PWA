import Car, {
	autoplayPlugin,
	slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../img/carousel/work_1.jpg";
import imageTwo from "../img/carousel/work_2.jpg";
import imageThree from "../img/carousel/work_3.jpg";
import imageFour from "../img/carousel/work_4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Carousel() {
	return (
		<div className=" md:w-3/4 w-full filter  ">
			<Car
				plugins={[
					"clickToChange",
					"centered",
					"infinite",
					"fastSwipe",
					{
						resolve: autoplayPlugin,
						options: {
							interval: 3000,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 2,
						},
					},
				]}
				animationSpeed={2000}
				breakpoints={{
					640: {
						plugins: [
							"infinite",
							"fastSwipe",
							{
								resolve: autoplayPlugin,
								options: {
									interval: 3000,
								},
							},
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 1,
								},
							},
						],
					},
				}}
				slides={[
					<LazyLoadImage
						alt="pic 1"
						src={imageOne}
						width="500"
						height="300"
						effect="blur"
						className="rounded-3xl p-1 "
					/>,
					<LazyLoadImage
						alt="pic 2"
						src={imageTwo}
						width="500"
						height="300"
						effect="blur"
						className="rounded-3xl p-1 "
					/>,
					<LazyLoadImage
						alt="pic 3"
						src={imageThree}
						width="500"
						height="300"
						effect="blur"
						className="rounded-3xl p-1"
					/>,
					<LazyLoadImage
						alt="pic 4"
						src={imageFour}
						width="500"
						height="300"
						effect="blur"
						className="rounded-3xl p-1"
					/>,
				]}
			/>
		</div>
	);
}

export default Carousel;
