import { FC, PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import style from "./Link.module.css";

type ButtonProps = PropsWithChildren<{ href?: string; kind?: string }>;

const Link: FC<ButtonProps> = ({ href = "", kind = "primary", children }) => {
	return (
		<RouterLink className={`${style.button} ${style[kind]}`} to={href}>
			{children}
		</RouterLink>
	);
};
export default Link;
