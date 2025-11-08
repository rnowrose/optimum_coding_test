import { createBrowserRouter } from "react-router";
import App from '../App';
import MovieTrendsPage from "../views/Movies/MovieTrendsPage";
import MovieDetailsPage from "../views/Movies/MovieDetailsPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MovieTrendsPage /> },
      { path: "details/:movieId", element: <MovieDetailsPage /> },
    ],
  },
]);