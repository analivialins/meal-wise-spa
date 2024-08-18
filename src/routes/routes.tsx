import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes.template";

import DefaultRedirect from "../hooks/utils/useDefaulRedirect";
import Authorization from "../pages/authorization";
import Home from "../pages/home";
import Recipes from "../pages/recipes";

const router = createBrowserRouter(
    [
        {
            path: ROUTES.INITIAL,
            element: <DefaultRedirect />,
        },
        {
            path: ROUTES.LOGIN,
            element: <Authorization />,
        },
        {
            path: ROUTES.HOME,
            element: <Home />,
        },
        {
            path: ROUTES.RECIPE,
            element: <Recipes />,
        }
    ],
    { basename: '/' }
);

export { router };
