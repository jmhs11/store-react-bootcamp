import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "swiper/css";
import "./index.css";
import GameDetail, { loaderGame } from "./pages/GameDetail";
import Home, { loaderHome } from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./reset.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		loader: loaderHome,
		errorElement: <NotFound />,
	},
	{
		path: "/game/:id",
		element: <GameDetail />,
		loader: loaderGame,
		errorElement: <NotFound />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
