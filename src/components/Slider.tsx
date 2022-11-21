import { FC, PropsWithChildren } from "react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperProps } from "swiper/react";

type SliderProps = PropsWithChildren<{ initSlide: (el: any) => void }>;

const Slider: FC<SliderProps> = ({ initSlide, children }) => {
	const params: SwiperProps = {
		modules: [Pagination],
		direction: "vertical",
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			clickable: true,
		},
		height: 500,
		onSlideChange: initSlide,
		onSwiper: () => (document.body.style.backgroundImage = `url(/images/league-of-legends-background.png)`),
	};

	return <Swiper {...params}>{children}</Swiper>;
};
export default Slider;
