import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

type ButtonProps = PropsWithChildren<{ href?: string; kind?: string }>;

const Button: FC<ButtonProps> = ({ href = "", kind = "primary", children }) => {
	return (
		<Link className={`${style.button} ${style[kind]}`} to={href}>
			{children}
		</Link>
	);
};
export default Button;
