import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Library from "../Library/Library";
import Admin from "../Admin/Admin";
import AssessmentPage from "../Assisment/AssessmentPage";
import Navigation from "./Navigation";

function RouterLayout() {

    const myRoutes = createBrowserRouter([
        // {
        //     path: "/",
        //     element: <Navigation />
        // },
        {
            path: "/",
            element: <div className="d-flex gap-3 bg-secondary"><Navigation /><AssessmentPage /></div>
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