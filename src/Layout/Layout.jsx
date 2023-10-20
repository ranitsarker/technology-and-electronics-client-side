import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer";


const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </>
    );
};

export default Layout;