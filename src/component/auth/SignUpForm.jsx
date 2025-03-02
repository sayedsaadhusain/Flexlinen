import React, { useState } from "react";
import { supabase } from "../../supabase"; // Ensure Supabase client is correctly set up
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // ✅ Clear previous error messages

    if (formData.password !== formData.confirmPassword) {
      setError("❌ Passwords do not match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: { full_name: formData.fullName }, // ✅ Store Full Name
      },
    });

    if (error) {
      setError(error.message);
    } else {
      alert("✅ Signup successful! Check your email for verification.");
      navigate("/signin"); // ✅ Redirect to SignIn
    }
  };

  const handleGoogleSignUp = async () => {
    setError(""); // ✅ Clear previous errors

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) setError(error.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <form className="mt-4" onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">Continue with</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignUp}
            className="p-2 rounded-full bg-white flex items-center justify-center shadow-md"
          >
            <Icon icon="logos:google-icon" className="w-8 h-8" />
          </button>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{" "}
          <span
            className="text-indigo-400 hover:underline cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
