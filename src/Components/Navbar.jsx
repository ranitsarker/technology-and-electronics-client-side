import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useDarkMode } from "../DarkModeContext/DarkModeContext";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { isDarkMode, toggleDarkMode} = useDarkMode();
    const handleToggleClick = () => {
        toggleDarkMode();
    };

    const navbarStyle = {
        background: isDarkMode ? 'black' : '#1a1f40',
        color: isDarkMode ? 'white' : 'black',
    };

    // Logout: 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out'); 
            })
            .catch(() => {
                toast.error('Logout failed');
            });
    };

    return (
        <>
            <div className="navbar bg-[#1b2141]" style={navbarStyle}>
                <div className="container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} 
                            className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            style={navbarStyle}
                            >
                                <li className="text-white">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="text-white">
                                    <NavLink to="/addproduct">Add Product</NavLink>
                                </li>
                                <li className="text-white">
                                    <NavLink to="/mycart">My Cart</NavLink>
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
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addproduct">Add Product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mycart">My Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
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
                        ) : (
                            <Link to="/login" className="font-bold mx-4 btn btn-outline rounded-lg text-white">
                                Login
                            </Link>
                        )}
                        <button onClick={handleToggleClick} className="text-white">
                            {isDarkMode ? <FaToggleOn /> : <FaToggleOff />} Mode
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
