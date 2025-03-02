import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import MyIcon from "../component/MyIcon";
import { supabase } from "../supabase";

const Nav = ({ setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch user data & listen for auth state changes
  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) setUser(data.user);
    };

    fetchUserData();

    // ✅ Listen for login/logout events
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener?.subscription?.unsubscribe();
  }, []);

  // ✅ Extract first name safely
  const getFirstName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(" ")[0];
    }
    return user?.email?.split("@")[0] || "User";
  };

  // ✅ Logout function
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setIsAuthenticated?.(false);
      navigate("/signin", { replace: true });
      window.location.reload(); // ✅ Clear session
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="p-4 px-6 md:px-32 flex justify-between items-center bg-gray-800 text-white relative">
      {/* Logo */}
      <div className="w-16">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:gap-8 text-lg`}>
        {[
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: "Promotion", path: "/promotion" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`block px-4 py-2 hover:text-gray-400 ${location.pathname === path ? "text-indigo-400 font-bold" : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div className="relative flex items-center z-10">
        <MyIcon className="hidden md:inline size-8 mr-4" />

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="focus:outline-none flex items-center gap-2">
            {/* ✅ Show First Name */}
            <span className="hidden md:inline">{getFirstName()}</span>
            <img
              src={
                user?.user_metadata?.avatar_url ||
                "https://www.w3schools.com/howto/img_avatar.png"
              }
              alt="Profile Avatar"
              className="w-10 h-10 rounded-full border-4 border-white mx-auto cent"
              onError={(e) => {
                e.target.src = "https://www.w3schools.com/howto/img_avatar.png";
              }}
            />
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-700 text-white rounded-lg shadow-lg">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-600" onClick={() => setProfileOpen(false)}>
                Profile
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
