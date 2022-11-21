import React from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

const Slider = ({ initSlide, children }) => {
	const params = {
		modules: [Pagination],
		direction: "vertical",
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			clickable: true,
		},
		height: "500",
		onSlideChange: initSlide,
		onSwiper: () => (document.body.style.backgroundImage = `url(/images/league-of-legends-background.png)`),
	};

	return <Swiper {...params}>{children}</Swiper>;
};
export default Slider;
