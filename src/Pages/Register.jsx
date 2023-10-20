import { useContext, useState } from "react";
import Validation from "../Components/ValidedPaaword";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useState("");
  const [photo, setPhoto] = useState(""); 

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');

    const passwordValidationError = Validation(password);

    if (passwordValidationError) {
      toast.error(passwordValidationError);
      return;
    }

    try {
      // Create the user in Firebase Authentication
      await createUser(email, password);

      // Update the user profile
      await handleUpdateProfile(name, photo);

      // Notify success
      toast.success('User created successfully.');

      // Save user data to your database
      const user = { email };
      await fetch('https://technology-and-electronics-server-side-tb9wzrxtb.vercel.app/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      // Redirect to the login page or any other page
      navigate('/login');
    } catch (error) {
      // Handle registration errors
      console.error('Registration error:', error);
      toast.error('Failed to register. Please check your information and try again.');
    }
  };

  const handleLoginToggle = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#1DBC60]"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#1DBC60]"
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
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
                value={userPassword} 
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full hover:border-white btn btn-outline py-2 rounded-lg"
              type="submit"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <button
              className="text-[#1DBC60] hover:underline"
              type="button"
              onClick={handleLoginToggle}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
