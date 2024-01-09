import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Library from "../Library/Library";
import Admin from "../Admin/Admin";
import AssessmentPage from "../Assisment/AssessmentPage";
import Navigation from "./Navigation";
import MediaQuery from "react-responsive";
import MainPath from "./MainPath";

function RouterLayout() {
    const isMobAndTab = MediaQuery({ query: '(max-width: 768px)' })

    const myRoutes = createBrowserRouter([
        // {

        //     path: "/",
        //     element: <Navigation />
        // },

        {
            path: "/",
            element: <MainPath/>
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/library",
            element: <Library />
        },
        {
            path: "/admin",
            element: <Admin />
        }
    ])
    return (
        <>
            <RouterProvider router={myRoutes} />
        </>
    )

}
export default RouterLayout