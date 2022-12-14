import { useRouteError } from "react-router-dom";
import style from "./NotFound.module.css";

const NotFound = () => {
	const error: any = useRouteError();
	console.error(error);

	return (
		<div className={style.container}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{error && (
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			)}
		</div>
	);
};
export default NotFound;
