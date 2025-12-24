import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";





it("Should render Header component with a login button", () => {

    render(
       <BrowserRouter>
       <Provider store={appStore}>
       <Header />
       </Provider>
       </BrowserRouter>
       
    );
       const loginButton = screen.getByRole("button", { name: "Login" }); // this is better than using getByText....it is a good way.

       // const loginButton = screen.getByText("Login");

       expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with a Cart Items", () => {

    render(
       <BrowserRouter>
       <Provider store={appStore}>
       <Header />
       </Provider>
       </BrowserRouter>
       
    );
       const cartItems = screen.getByText("🛒 - (0 Items)"); 
      
       expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with a Cart Item", () => {

    render(
       <BrowserRouter>
       <Provider store={appStore}>
       <Header />
       </Provider>
       </BrowserRouter>
       
    );
       const cartItems = screen.getByText(/🛒/); // used rejex

       

       expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {

    render(
       <BrowserRouter>
       <Provider store={appStore}>
       <Header />
       </Provider>
       </BrowserRouter>
       
    );
       const loginButton = screen.getByRole("button", { name: "Login" }); 

       fireEvent.click(loginButton);

       const logoutButton = screen.getByRole("button", { name: "Logout" });

       expect(logoutButton).toBeInTheDocument();
});
