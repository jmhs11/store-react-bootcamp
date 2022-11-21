import style from "./Grid.module.css";

const Grid = ({ children }) => {
	return <section className={style.grid}>{children}</section>;
};
export default Grid;
