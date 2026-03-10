import { createBrowserRouter } from "react-router";
import React from "react";
const Home =  React.lazy(() => import("../pages/Home/Home"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])