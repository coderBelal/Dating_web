import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home";
import SearchResults from "../components/Result/Result";
import ErrorPage from "../pages/Error";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactForm from "../pages/ContactPage";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/results", element: <SearchResults /> },
      {path:"/login",element:<LoginPage/>},
      {path:"/register",element:<RegisterPage/>},
      {path:"/contact",element:<ContactForm/>},
      { path: "*", element: <ErrorPage/>},   
    ],
  },
]);

export default router;
