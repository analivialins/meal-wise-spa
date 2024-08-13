import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes.template";

import DefaultRedirect from "../hooks/useDefaulRedirect";
import Authorization from "../pages/authorization";
import Home from "../pages/home";

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
        }
    ],
    { basename: '/' }
);

export { router };
