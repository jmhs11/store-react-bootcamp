import { FC } from "react";
import Button from "./Button";
import style from "./Game.module.css";

type GameProps = {
	id: number;
	title: string;
	trademark: boolean;
	cover: string[];
	price: number;
};

const Game: FC<GameProps> = ({ id, title, trademark, cover, price }) => {
	return (
		<article className={style.game}>
			<img className={style.cover} src={cover[0]} srcSet={cover.join(",")} alt="" />
			<div className={style.infoWrapper}>
				<div className={style.info}>
					<h4 className={style.title} title={title}>
						{title}
						{trademark && "™"}
					</h4>
					<p className={style.price}>{price} USD</p>
				</div>
				<Button href={`/game/${id}`}>BUY NOW</Button>
			</div>
		</article>
	);
};
export default Game;
