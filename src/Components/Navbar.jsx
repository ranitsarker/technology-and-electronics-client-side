import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // Logout: 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out.'); 
            })
            .catch()
    }
    return (
        <>
            <div className="navbar bg-[#1259A6]">
                <div className="container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/addproduct">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/mycart">My Cart</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

                        </ul>
                        </div>
                        <Link to="/">
                            <img className="h-24" src="/logo.png" alt="Website Logo" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-bold text-white text-lg">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/addproduct">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/mycart">My Cart</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

                        </ul>
                    </div>
                        {
                            user ? (
                                <div className="navbar-end inline-block">
                                <span className="mr-2 text-xs text-white">
                                    {user.photoURL && (
                                    <img
                                        className="inline-block mx-2 w-8 h-8 my-2 rounded-full"
                                        src={user.photoURL}
                                        alt={`${user.displayName}'s photo`}
                                    />
                                    )}
                                    {user.displayName ? (
                                    <>
                                        {user.displayName}
                                        <button className="font-bold mx-4 btn btn-outline rounded-lg text-white" onClick={handleLogOut}>
                                        Logout
                                        </button>
                                    </>
                                    ) : (
                                    <>
                                        {user.email || 'Unknown'}
                                        <button className="font-bold mx-4 btn btn-outline rounded-lg text-white" onClick={handleLogOut}>
                                        Logout
                                        </button>
                                    </>
                                    )}
                                </span>
                                </div>
                            ) : (
                                <div className="navbar-end">
                                <Link to="/login" className="font-bold mx-4 btn btn-outline rounded-lg text-white">
                                    Login
                                </Link>
                                </div>
                            )
                        }
                </div>
            </div>
        </>
    );
};

export default Navbar;