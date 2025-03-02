import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import { supabase } from "./supabase";
import Nav from "./component/Nav";

// Lazy Load Components
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));
const Shop = lazy(() => import("./component/Shop"));
const Promotion = lazy(() => import("./component/Promotion"));
const PrivacyPolicy = lazy(() => import("./component/PrivacyPolicy"));
const SignUpForm = lazy(() => import("./component/auth/SignUpForm"));
const SignInForm = lazy(() => import("./component/auth/SignInForm"));
const Profile = lazy(() => import("./component/Profile"));

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getSession();
      setIsAuthenticated(!!data?.session);
      setLoading(false);
      if (error) console.error("Auth Error:", error.message);
    };

    checkAuth();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => setIsAuthenticated(!!session)
    );

    return () => authListener?.subscription?.unsubscribe();
  }, []);

  return { isAuthenticated, loading };
}

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <div className="bg-blue-700 text-white text-center py-1 text-sm">
        EXCLUSIVE DISCOUNTS ON HIGH-QUALITY ACTIVEWEAR!
      </div>

      {isAuthenticated && <Nav />}

      <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
          />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/signin"
            element={isAuthenticated ? <Navigate to="/" /> : <SignInForm />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/signin" />} />
          )}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
