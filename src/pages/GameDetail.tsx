import { useEffect } from "react";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import GoBackIcon from "../assets/icons/GoBackIcon";
import NewGameIcon from "../assets/icons/NewGameIcon";
import Button from "../components/Link";
import style from "./GameDetail.module.css";

const GameDetail = () => {
	const { game }: any = useLoaderData();

	const setBackground = () => {
		document.body.style.backgroundImage = `url(${game.backgroundImage})`;
	};

	useEffect(setBackground, []);

	return (
		<>
			<div className={style.back}>
				<Link to={"/"}>
					<GoBackIcon />
				</Link>
			</div>

			<div className={style.container}>
				{game.isNewGame ? (
					<p className={style.newGame}>
						<NewGameIcon className={style.icon} />
						New Release
					</p>
				) : null}
				<h1>{game.title}</h1>
				<div className={style.infoHeader}>
					<h3>{game.price}€</h3>
					<Button>INSTALL GAME</Button>
				</div>
				<div className={style.description}>
					<img src={game.descriptionImage} alt={game.title} />
					<div>
						{game.description.split("\n").map((p: string, index: number) => {
							return <p key={index}>{p}</p>;
						})}
					</div>
				</div>
			</div>
			<ScrollRestoration getKey={(location, matches) => location.key} />
		</>
	);
};

export default GameDetail;

export const loaderGame = async ({ params }: any) => {
	const data = await fetch(`http://localhost:3001/games/${params.id}`);
	const game = await data.json();
	return { game };
};
