import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProductForm from "../Pages/AddProductForm";

const myCustomRoute = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
               path: '/',
               element: <Home></Home>,
            },
            {
                path: '/addproduct',
                element: <AddProductForm></AddProductForm>,
             },
            {
                path: '/login',
                element: <Login></Login>,
             },
             {
                path: '/register',
                element: <Register></Register>,
             },
        ]
    }
]);
export default myCustomRoute;
