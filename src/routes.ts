import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Likes from "./pages/Likes";
import { FindMe } from "./pages/FindMe";
import SubscribeYoutube from "./pages/SubscribeYoutube";
import App from "./App";
import NotFound from "./pages/NotFound";
import Writes from "./pages/Writes";

export const  router = createBrowserRouter([
    { path: "/", 
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: "projects", Component:Projects},
            {path: "likes", Component: Likes},
            {path: "writes", Component: Writes},
            {path: "contact", Component: FindMe}
        ]   
    },
    {path: "subscribe", Component:SubscribeYoutube},
    {path: '*', Component: NotFound}
])

