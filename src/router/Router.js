import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home"
import { Layout } from "../components/layout/Layout";
import { SignIn } from "../pages/signIn/SignIn";
import { Profile } from "../pages/profile/Profile"

export const Router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/profile",
                element: <Profile />
            }

        ]
    }
    
])
