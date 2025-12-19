import  { lazy, Suspense, use } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";





// ✅ Restaurant Data


const Footer = () => {
  return (
    <footer className="footer  bg-gray-900 text-gray-300 mt-10">
      <div className="footer-content max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="footer-section text-2xl font-bold text-white mb-3 ">
          <h3>Food Express</h3>
          <p className="text-sm leading-relaxed">
            Delicious meals delivered right to your doorstep.</p>
        </div>


        <div className="text-lg font-semibold text-white mb-3 footer-section">
          <h4>Connect</h4>
          <ul className="space-y-2 text-sm">
           <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-bottom border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Foodie App. All rights reserved.
      </p>
    </footer>
  );
};
// Lazy load Grocery component
//chunking
//code splitting
//dynamic loading
//on demand loading
//lazy loading
//when we load the grocery route only then the grocery component should be loaded

const Grocery = lazy(() => import("./components/Grocery"));
// ✅ App Layout
const AppLayout = () => {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Chandani Dawda",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter ([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
            <Suspense fallback={<h1>Loading...</h1>}>
    <About />
  </Suspense>
),

      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/grocery",
        element : ( <Suspense fallback= { <h1>Loading...</h1>} >
        <Grocery/></Suspense>
        ), // lazy loaded component
      },

      {
          path : "/restaurant/:resId",
          element : <RestaurantMenu />,

      },
      {
          path : "/cart",
          element : <Cart />,

      }
      
    ],
  },
]);


// ✅ Render
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
