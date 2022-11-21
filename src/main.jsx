import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import "swiper/css";
import Home, { loaderHome } from "./pages/Home";
import GameDetail, { loaderGame } from "./pages/GameDetail";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
