import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import NewGameIcon from "../assets/icons/NewGameIcon";
import Button from "../components/Button";
import style from "./GameDetail.module.css";

const GameDetail = () => {
	const { game } = useLoaderData();

	const setBackground = () => {
		document.body.style.backgroundImage = `url(${game.backgroundImage})`;
	};

	useEffect(() => {
		setBackground();
	}, []);

	return (
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
				<img src={game.descriptionImage} alt="" />
				<div>
					{game.description.split("\n").map((p, index) => {
						return <p key={index}>{p}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default GameDetail;

export const loaderGame = async ({ params }) => {
	const data = await fetch(`http://localhost:3001/games/${params.id}`);
	const game = await data.json();
	return { game };
};
