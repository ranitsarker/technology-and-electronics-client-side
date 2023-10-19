import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { LoginUser, googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Clear previous login error
    setLoginError(null);

    LoginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success('Successfully logged in.');
        navigate (location?.state ? location.state : '/');
      })
      .catch((error) => {
        console.error(error);
        setLoginError("Invalid email or password.");
      });
  };
    //Google login
    const handleGoogleLogin = async () => {
        try {
          await googleLogin();
          toast.success('Successfully logged in.');
          navigate (location?.state ? location.state : '/');
        } catch (error) {
          console.error("Google login error:", error);
        }
      };
    
      const handleRegisterToggle = () => {
        navigate('/register');
      };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          {loginError && (
            <div className="mb-4 text-red-600 font-semibold">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#1DBC60]"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#1DBC60]"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full btn btn-outline py-2 rounded-lg hover:bg-[#1DBC60] hover:border-white"
              type="submit"
            >
              Login
            </button>
          </form>
          <button
            onClick={handleGoogleLogin}
            className="btn my-3 btn-outline w-full hover:border-white"
          >
            <FaGoogle /> Login with Google
          </button>
            <p className="mt-4 text-center">
            Do not have an account?{' '}
            <button
              className="hover:underline"
              type="button"
              onClick={handleRegisterToggle}
            >
              Register
            </button>
          </p>

        </div>
      </div>
    </>
  );
};

export default Login;
