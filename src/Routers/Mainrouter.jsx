import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProductForm from "../Pages/AddProductForm";
import AppleBrand from "../Components/AppleBrand";
import GoogleBrand from "../Components/GoogleBrand";
import SamsungBrand from "../Components/SamsungBrand";
import SonyBrand from "../Components/SonyBrand";
import IntelBrand from "../Components/IntelBrand";
import MicrosoftBrand from "../Components/MicrosoftBrand";
import UpdateProduct from "../Components/UpdateProduct";
import ProductDetails from "../Components/ProductDetails";
import PrivateRouter from "./PrivateRouter";
import MyCart from "../Pages/MyCart";

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
                element: <PrivateRouter><AddProductForm></AddProductForm></PrivateRouter>,
             },
             {
               path: '/brands/apple',
               element: <AppleBrand></AppleBrand>,
             },
             {
               path: '/brands/google',
               element: <GoogleBrand></GoogleBrand>,
             },
             {
               path: '/brands/samsung',
               element: <SamsungBrand></SamsungBrand>,
             },
             {
               path: '/brands/sony',
               element: <SonyBrand></SonyBrand>,
             },
             {
               path: '/brands/intel',
               element: <IntelBrand></IntelBrand>,
             },
             {
               path: '/brands/microsoft',
               element: <MicrosoftBrand></MicrosoftBrand>,
             },
             {
               path: '/updateproduct/:id',
               element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
               loader: ({ params }) => fetch(`https://technology-and-electronics-server-side-lugjmequ0.vercel.app/product/${params.id}`),
             },
             {
              path: '/product/:id',
              element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
            },
            {
                path: '/login',
                element: <Login></Login>,
             },
             {
                path: '/register',
                element: <Register></Register>,
             },
             {
              path: '/mycart',
              element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
            },
        ]
    }
]);
export default myCustomRoute;