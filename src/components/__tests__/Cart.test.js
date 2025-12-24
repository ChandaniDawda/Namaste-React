import { fireEvent, render , screen} from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

// Mocking the fetch API

// ensure useParams returns a resId for RestaurantMenu
jest.mock("react-router-dom", () => {
    const original = jest.requireActual("react-router-dom");
    return {
        __esModule: true,
        ...original,
        useParams: () => ({ resId: "678901" }),
    };
});

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(MOCK_DATA),
    })
);

it("Should Load Restaurant Menu Component", async () => {
    await act(async () => render(
    <Provider store={appStore}>
        <BrowserRouter>
        <Header/>
         <RestaurantMenu/>
       </BrowserRouter>
       </Provider> 
         
   ));

    const accordionHeader = screen.getByText("Ice Creams (3)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(3);

    const addBtn = screen.getAllByRole("button", { name: "Add+" });

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    fireEvent.click(addBtn[2]); 

    // header shows cart count like '(3 Items)'
    expect(screen.getByText(/3\s*Items/i)).toBeInTheDocument();

        // render the Cart page to access the Clear Cart button
        render(
            <Provider store={appStore}>
                <Cart />
            </Provider>
        );

        fireEvent.click(screen.getByRole("button", { name: /Clear Cart/i }));

        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();

});
    
    