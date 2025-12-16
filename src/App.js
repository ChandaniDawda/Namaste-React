import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";


// ✅ Restaurant Data


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Food Express</h3>
          <p>Delicious meals delivered right to your doorstep.</p>
        </div>


        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-bottom">
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
  return (
    <>
      <Header />
      <Outlet /> {/* to render the matched child route component */}
      <Footer />
    </>
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
        element: ( <Suspense fallback= { <h1>Loading...</h1>} >,
        <About />,</Suspense>
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
        element : ( <Suspense fallback= { <h1>Loading...</h1>} >,
        <Grocery/></Suspense>
        ), // lazy loaded component
      },

      {
          path : "/restaurant/:resId",
          element : <RestaurantMenu />,

      }
      
    ],
  },
]);


// ✅ Render
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
