import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../JS/Actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(newUser, navigate));
  };

  console.log(newUser);
  return (
    <section className="text-gray-600 body-font min-h-screen flex items-center">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
        >
          <h1 className="text-3xl font-medium title-font text-gray-900 text-center mb-8">
            Create Account
          </h1>

          {/* First Name */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              First Name
            </label>

            <input
              onChange={(e) => handleInputChange(e)}
              name="firstName"
              type="text"
              placeholder="John"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-4"
            />
          </div>

          {/* Last Name */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Last Name</label>

            <input
              onChange={(e) => handleInputChange(e)}
              name="lastName"
              type="text"
              placeholder="Doe"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-4"
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>

            <input
              onChange={(e) => handleInputChange(e)}
              name="email"
              type="email"
              placeholder="example@email.com"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-4"
            />
          </div>

          {/* Phone */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Phone</label>

            <input
              onChange={(e) => handleInputChange(e)}
              name="phone"
              type="tel"
              placeholder="+216 XX XXX XXX"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-4"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <label className="leading-7 text-sm text-gray-600">Password</label>

            <input
              onChange={(e) => handleInputChange(e)}
              name="password"
              type="password"
              placeholder="********"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-2 px-4"
            />
          </div>

          {/* Register Button */}
          <button className="w-full text-white bg-indigo-500 hover:bg-indigo-600 py-3 px-6 rounded text-lg">
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-500 text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500 cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
