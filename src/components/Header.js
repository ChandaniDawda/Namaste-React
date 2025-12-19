import { lOGO_URL } from "../utils/constants";
import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


// ✅ Header Component
const Header = () => {

 const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus(); // using the custom hook to get online status
 //console.log("Header Render");


 const { loggedInUser } = useContext(UserContext);


 //console.log(loggedInUser);

 // subscribing to a store using selector

 const cartItems = useSelector((store) => store.cart.items);
 console.log(cartItems);

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
          
          < li className="px-4 py-4 font-bold text-xl">

            <Link to="/Cart">🛒 - ({cartItems.length} Items)</Link>
          
            </li>

          <button className = "Login px-4 py-4 font-bold"
          
          onClick={() => {btnNameReact==="Login"? 
            setBtnNameReact("Logout") : 
            setBtnNameReact("Login");

          }} > 
          
          {btnNameReact}

          </button>
       
        <li className="px-4 py-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;