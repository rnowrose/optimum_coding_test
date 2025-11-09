import { createBrowserRouter } from "react-router";
import App from '../App';
import MovieTrendsPage from "../views/Movies/MovieTrendsPage";
import MovieDetailsPage from "../views/Movies/MovieDetailsPage";
import Register from "../views/Users/Register";
import Login from "../views/Users/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MovieTrendsPage /> },
      { path: "details/:movieId", element: <MovieDetailsPage /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },

    ],
  },
]);