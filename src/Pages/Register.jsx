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
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

  const passwordValidationError = Validation(password);

  if (passwordValidationError) {
      toast.error(passwordValidationError);
      return;
  }
        // Create user:
        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photo)
                    .then(() => {
                        toast.success('User created successfully.');
                        navigate('/');
                    })
                    // new user has created
                    const user = { email }
                    fetch('http://localhost:5000/user' , {
                        method: 'POST',
                        headers:{
                            'content-type' : 'application/json',
                        },
                        body: JSON.stringify(user)
                      })
                      .then(res => res.json())
                      .then(data => {
                        console.log(data);
                        if(data.insertedId){
                            toast.success('User also added successfully in database!');
                        }
                      })

            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to register. Please check your information and try again.');
            });
    };
    const handleLoginToggle = () => {
        navigate('/login');
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-4"
            >
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                type="text"
                                name="photo"
                                placeholder="Enter your photo URL"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={userPassword} 
                                onChange={(e) => setUserPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full  hover:border-white btn btn-outline py-2 rounded-lg"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account?{' '}
                        <button
                            className="hover:underline"
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
