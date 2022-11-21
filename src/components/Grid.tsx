import { FC, PropsWithChildren } from "react";
import style from "./Grid.module.css";

const Grid: FC<PropsWithChildren> = ({ children }) => {
	return <section className={style.grid}>{children}</section>;
};
export default Grid;
