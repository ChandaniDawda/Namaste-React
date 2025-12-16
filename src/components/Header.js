import { lOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


// ✅ Header Component
const Header = () => {

 const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus(); // using the custom hook to get online status
 //console.log("Header Render");



  return (
    <div className="flex  justify-between bg-pink-50 shadow-lg ">
      <div className="logo-container">
        <img
          className="w-32"
          src={lOGO_URL}
          alt="app-logo"
        />
      </div>
      <div className="nav-items m-4 p-4 ">
        <ul className="flex ">
          <li className="px-4 py-4 font-bold">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>
         <li className="px-4 py-4 font-bold">
            <Link to="/">Home</Link>
          </li>

           <li className="px-4 py-4 font-bold">
            <Link to="/about">
            About Us
          </Link></li>

          <li className="px-4 py-4 font-bold"><Link to="/contact">
            Contact Us
          </Link></li>

          <li className="px-4 py-4 font-bold"><Link to="/grocery">
            Grocery
          </Link></li>
          
          <li className="px-4 py-4 font-bold">Cart</li>

          <button className = "Login px-4 py-4 font-bold"
          
          onClick={() => {btnNameReact==="Login"? 
            setBtnNameReact("Logout") : 
            setBtnNameReact("Login");

          }} > 
          
          {btnNameReact}
          
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;