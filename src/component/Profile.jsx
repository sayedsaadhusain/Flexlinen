import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Profile = ({ setIsAuthenticated }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png";

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser(); // ✅ Corrected Supabase method
      if (error) {
        setError("Failed to fetch user details.");
        console.error("Error fetching user:", error.message);
      } else {
        setUser(data?.user || null); // ✅ Ensure user is properly set
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      setError("Logout failed. Try again.");
      console.error("Logout Error:", error.message);
      return;
    }

    setUser(null);
    setIsAuthenticated?.(false);
    navigate("/signin", { replace: true });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 text-center flex flex-col items-center">
        <h2 className="text-2xl font-semibold">User Profile</h2>

        {/* ✅ Centered Profile Image */}
        <img
          src={user?.user_metadata?.avatar_url || defaultAvatar}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full border-4 border-white mt-4"
          onError={(e) => (e.target.src = defaultAvatar)}
        />

        {error && <p className="text-red-400 mt-2">{error}</p>}

        {user ? (
          <>
            <p className="mt-4">
              <strong>Full Name:</strong> {user.user_metadata?.full_name || "N/A"}
            </p>
            <p className="mt-2">
              <strong>Email:</strong> {user.email}
            </p>
          </>
        ) : (
          <p className="mt-4">Loading user details...</p>
        )}

        {/* ✅ Centered Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
