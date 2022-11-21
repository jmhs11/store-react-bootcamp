import { useEffect, useState } from "react";
import style from "./Home.module.css";
import Button from "../components/Button";
import Game from "../components/Game";
import Grid from "../components/Grid";
import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const { games, slides } = useLoaderData();

	return (
		<div className={style.app}>
			<header className={style.hero}>
				<h6>AWARDED AND RECOMMENDED</h6>
				<Slider
					initSlide={(el) => {
						document.body.style.backgroundImage = `url(${
							slides.find((slide) => slide.id === el.activeIndex + 1).background
						})`;
					}}
				>
					{slides &&
						slides.map((slide) => (
							<SwiperSlide className={style.swiperSlide} key={slide.id}>
								<h1 className={style.title}>{slide.title}</h1>
								<p className={style.description}>{slide.description}</p>
								<div className={style.buttonWrapper}>
									<Button>INSTALL GAME</Button>
									<Button kind="secondary">ADD TO FAVORITES</Button>
								</div>
							</SwiperSlide>
						))}
				</Slider>
			</header>
			<main>
				<h6>BESTSELLERS</h6>
				<Grid>{games && games.map((game) => <Game key={game.id} {...game} />)}</Grid>
			</main>
		</div>
	);
};
export default Home;

const getGames = async () => {
	const response = await fetch("http://localhost:3001/games");
	return await response.json();
};

const getSlides = async () => {
	const response = await fetch("http://localhost:3001/slides");
	return await response.json();
};

export const loaderHome = async () => {
	const games = await getGames();
	const slides = await getSlides();
	return { games, slides };
};
