import DashBoardLayout from "../../Layout/DashBoardLayout";
import AppointmentPage from "../../Pages/Appointment/AppointmentPage/AppointmentPage";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/Login/SingUp";
import Privetroute from "../../Privetroute/Privetroute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <AppointmentPage></AppointmentPage>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <Privetroute><DashBoardLayout></DashBoardLayout></Privetroute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }

])