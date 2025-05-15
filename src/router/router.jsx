import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import SearchResults from "../components/Result/Result";
import ErrorPage from "../pages/Error";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/results", element: <SearchResults /> },
      { path: "*", element: <ErrorPage/>},  // catch-all route for 404
    ],
  },
]);

export default router;
