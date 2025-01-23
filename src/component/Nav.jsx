import logo from "../assets/logo.png"
import MyIcon from "../component/MyIcon"
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="p-4 px-32 flex justify-between">
      <div className="w-16">
        <img src={logo} alt="" />
      </div>
      <div className="flex p-2 gap-8 text-lg place-items-center">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Promotion">Promotion</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/PrivacyPolicy">Privacy policy</Link>
        <MyIcon className="size-8" />
      </div>
    </nav>
  );
}

export default Nav;
