import React, { useState } from "react";
import { supabase } from "../../supabase";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SignInForm = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword(formData);

    if (error) {
      setError(error.message);
    } else {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/");
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { queryParams: { access_type: "offline", prompt: "consent" } },
    });

    if (error) setError(error.message);
    setGoogleLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>

        {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}

        <form className="mt-4" onSubmit={handleSignIn}>
          {["email", "password"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-sm mb-1 capitalize">{field}</label>
              <input
                type={field}
                name={field}
                placeholder={field === "email" ? "john@example.com" : "********"}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">Or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="p-2 rounded-full bg-white flex items-center justify-center shadow-md"
          >
            {googleLoading ? (
              <span className="text-gray-600">Loading...</span>
            ) : (
              <Icon icon="logos:google-icon" className="w-8 h-8" />
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
