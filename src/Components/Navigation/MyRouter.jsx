import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyAssisment from "../Assisment/AssessmentPage";
import Dashboard from "../Dashboard/Dashboard";
import Library from "../Library/Library";
import Admin from "../Admin/Admin";
import ReactDOM from "react";
import Navigation from "../Home/Navigation";
import AssessmentPage from "../Assisment/AssessmentPage";

function RouterLayout() {

    const myRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />
        },
        {
            path: "/assisment",
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