import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ href, kind = "primary", children }) => {
	return (
		<Link className={`${style.button} ${style[kind]}`} to={href}>
			{children}
		</Link>
	);
};
export default Button;
