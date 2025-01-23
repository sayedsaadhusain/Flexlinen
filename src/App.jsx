import Nav from "./component/Nav"
import Shop from "./component/Shop";
import Contact from "./component/Contact";
import PrivacyPolicy from "./component/PrivacyPolicy";
import Promotion from "./component/Promotion";
import About from "./component/About";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

export default function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element :<> <Shop/> <Nav/></>
  //   },
  //   {
  //     path : "/Promotion",
  //     element :<> <Promotion/> <Nav/></>
  //   },
  //   {
  //     path : "/About",
  //     element :<> <About/> <Nav/></>
  //   },
  //   {
  //     path : "/Contact",
  //     element :<> <Contact/> <Nav/></>
  //   },
  //   {
  //     path : "/PrivacyPolicy",
  //     element :<> <PrivacyPolicy/> <Nav/></>
  //   },
  // ])

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = "/PrivacyPolicy" element = {<PrivacyPolicy/>} />
      <Route path = "/About" element = {<About/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Promotion" element={<Promotion />} />
    </Routes>
    


    {/* <Nav/>
    <BrowserRouter router = {router}/> */}
    {/* <h1 className="font-bold text-center bg-[#1d3557] text-white py-2">
     EXCLUSIVE DISCOUNTS ON HIGH-QUALITY ACTIVEWEAR!
    </h1>

    
    <HeroSection></HeroSection> */}

  </>
  )
}
