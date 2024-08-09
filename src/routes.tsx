import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movies from "./pages/movies";
import TVseries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: "/tv-series",
    element: <TVseries />,
    errorElement: <Error />,
  },
  {
    path: "/bookmark",
    element: <Bookmark />,
    errorElement: <Error />,
  },
]);
